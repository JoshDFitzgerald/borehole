/* ================= CORE: shared helpers, question bank API, matching, selection ================= */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=n=>Math.round(n).toLocaleString("en-US");
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const FM="'IBM Plex Mono',ui-monospace,Menlo,monospace",FD="'Big Shoulders Display','Arial Narrow',Impact,sans-serif",FB="'IBM Plex Sans',system-ui,sans-serif";
const TIERS=[
  {name:"Gravel",pts:10,col:"#c9cdd5",share:"top 10%"},
  {name:"Coal",pts:30,col:"#98acd8",share:"next 40%"},
  {name:"Copper",pts:60,col:"#f2905a",share:"next 30%"},
  {name:"Gold",pts:85,col:"#f7cd4a",share:"the rest"},
  {name:"Diamond",pts:100,col:"#86ecff",share:"only 1"}
];
const MPP=20; // meters drilled per point

function hashStr(s){let h=2166136261>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return h>>>0;}
function rng(seed){let s=(seed>>>0)||1;return()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296;};}

/* ---------- bank API used by the data files ---------- */
const BANK=[],DATASETS={},SKIPPED=[],DUPQ=[],QSEEN=new Set();
let CUR_GRP="misc";
function GROUP(g){CUR_GRP=g;}
function parseItems(body){
  return body.split(/\n|;/).map(s=>s.trim()).filter(Boolean).map(line=>{
    let tags=[];const h=line.indexOf(" #");
    if(h>=0){tags=line.slice(h+2).split(/\s+/).map(t=>t.replace(/^#/,"").toLowerCase()).filter(Boolean);line=line.slice(0,h).trim();}
    const parts=line.split("|").map(s=>s.trim()).filter(Boolean);
    return{name:parts[0],alias:parts.slice(1),tags:new Set(tags)};
  }).filter(it=>it.name);
}
function tagf(expr){
  if(typeof expr==="function")return expr;
  const ors=expr.split("|").map(a=>a.split("&").map(t=>t.trim().toLowerCase()));
  return it=>ors.some(and=>and.every(t=>t[0]==="!"?!it.tags.has(t.slice(1)):it.tags.has(t)));
}
function addQ(fam,q,sub,items,opts){
  opts=opts||{};const min=opts.min||6;
  if(QSEEN.has(q)){DUPQ.push(q);return;}
  if(items.length<min){SKIPPED.push(q+" ("+items.length+")");return;}
  QSEEN.add(q);
  BANK.push({id:hashStr(q).toString(36),fam,grp:opts.grp||CUR_GRP,q,sub:sub||"",items,surname:!!opts.surname});
}
/* standalone list */
function L(fam,q,sub,body,opts){addQ(fam,q,sub,parseItems(body),opts);}
/* tagged dataset, ordered most → least familiar */
function DS(name,body,opts){DATASETS[name]={items:parseItems(body),opts:opts||{}};}
/* derived prompt: filter a dataset by tag expression, e.g. "eu", "af&landlocked", "es|pt" */
function T(fam,ds,q,sub,filter,opts){const d=DATASETS[ds];if(!d)throw new Error("no dataset "+ds);let items=d.items.filter(tagf(filter));
  if(opts&&opts.demote){const dm=opts.demote.map(n=>n.toLowerCase());items=items.filter(it=>!dm.includes(it.name.toLowerCase())).concat(dm.map(n=>items.find(it=>it.name.toLowerCase()===n)).filter(Boolean));}
  addQ(fam,q,sub,items,Object.assign({},d.opts,opts||{}));}
function ALL(fam,ds,q,sub,opts){T(fam,ds,q,sub,()=>true,opts);}
/* one prompt per starting letter that has enough answers */
function LETTERS(fam,ds,qf,sub,filter,opts){
  const d=DATASETS[ds];if(!d)throw new Error("no dataset "+ds);
  const pool=filter?d.items.filter(tagf(filter)):d.items;const by={};const min=(opts&&opts.min)||8;
  pool.forEach(it=>{const c=norm(it.name).charAt(0).toUpperCase();if(/[A-Z]/.test(c))(by[c]=by[c]||[]).push(it);});
  Object.keys(by).sort().forEach(c=>{if(by[c].length>=min)addQ(fam,qf(c),typeof sub==="function"?sub(c):sub,by[c],Object.assign({},d.opts,opts||{},{min}));});
}

/* ---------- matching ---------- */
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/\+/g," plus ").replace(/['’‘`".,!?“”:()\[\]]/g,"").replace(/[-_/–—]/g," ").replace(/\s+/g," ").trim().replace(/^(the|a|an) /,"");}
function sing(n){const w=n.split(" ");let l=w[w.length-1];if(l.length>3){if(/ies$/.test(l))l=l.slice(0,-3)+"y";else if(/(ch|sh|x|z|ss)es$/.test(l))l=l.slice(0,-2);else if(/[^s]s$/.test(l))l=l.slice(0,-1);}w[w.length-1]=l;return w.join(" ");}
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(Math.abs(m-n)>2)return 9;let prev=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const cur=[i];for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur;}return prev[n];}
function tierFor(i,n){if(i===n-1)return 4;const p=(i+1)/(n-1);if(i===0||p<=.10+1e-9)return 0;if(p<=.50+1e-9)return 1;if(p<=.80+1e-9)return 2;return 3;}
function prepQ(Qd){
  const n=Qd.items.length;
  const list=Qd.items.map((it,i)=>{
    const keys=new Set();const add=s=>{const k=norm(s);if(k){keys.add(k);keys.add(sing(k));}};
    add(it.name);it.alias.forEach(add);
    const np=it.name.replace(/\s*\([^)]*\)/g,"");if(np!==it.name)add(np);
    const sp=it.name.split(/:\s| – | - /);const subk=sp.length>1&&norm(sp[sp.length-1]).length>=6?norm(sp[sp.length-1]):null;
    return{name:it.name,keys,rank:i+1,tier:tierFor(i,n),subk};
  });
  {const owner=new Map();list.forEach((x,i)=>x.keys.forEach(k=>owner.set(k,i)));list.forEach((x,i)=>{if(x.subk&&!owner.has(x.subk)){x.keys.add(x.subk);owner.set(x.subk,i);}});}
  if(Qd.surname){
    const cnt={},all=new Map();
    list.forEach((x,i)=>{x.keys.forEach(k=>all.set(k,i));const w=norm(x.name.replace(/\s*\([^)]*\)/g,"")).split(" ").filter(t=>!/^(jr|sr|ii|iii|iv)$/.test(t));x._s=w.length>1?w[w.length-1]:null;if(x._s)cnt[x._s]=(cnt[x._s]||0)+1;});
    const given=new Set();list.forEach((x,i)=>{if(x._s&&x._s.length>=3&&!given.has(x._s)&&(!all.has(x._s)||all.get(x._s)===i)){x.keys.add(x._s);given.add(x._s);}});
  }
  list.forEach(x=>{x.compact=new Set([...x.keys].map(k=>k.replace(/ /g,"")));});
  return Object.assign({},Qd,{list,n});
}
function matchQ(P,raw){
  const s=norm(raw);if(!s)return -1;const s2=sing(s),sc=s.replace(/ /g,""),sc2=s2.replace(/ /g,"");
  const extra=/ves$/.test(s)?[s.replace(/ves$/,"f"),s.replace(/ves$/,"fe")]:[];
  for(let i=0;i<P.list.length;i++){const k=P.list[i].keys;if(k.has(s)||k.has(s2)||extra.some(e=>k.has(e)))return i;}
  for(let i=0;i<P.list.length;i++){const c=P.list[i].compact;if(c.has(sc)||c.has(sc2))return i;}
  const tol=s.length>=11?2:s.length>=5?1:0;if(!tol)return -1;
  let best=-1,bd=9,tie=false;
  P.list.forEach((it,i)=>it.keys.forEach(k=>{if(k.length<4)return;const d=lev(s,k);if(d<bd){bd=d;best=i;tie=false;}else if(d===bd&&i!==best)tie=true;}));
  return bd<=tol&&!tie?best:-1;
}

/* ---------- selection: no repeats across plays, one prompt per family per hole ---------- */
const SEEN_KEY="borehole-seen-v2";
function loadSeen(){try{return new Set(JSON.parse(localStorage.getItem(SEEN_KEY)||"[]"));}catch(e){return new Set();}}
function saveSeen(){try{localStorage.setItem(SEEN_KEY,JSON.stringify([...SEEN].slice(-3000)));}catch(e){}}
let SEEN=loadSeen();const SESSION_SEEN=new Set();
function pickNext(pick){
  let pool=BANK.filter(b=>!SEEN.has(b.id)&&!SESSION_SEEN.has(b.id));
  if(pool.length<60){SEEN=new Set();saveSeen();pool=BANK.filter(b=>!SESSION_SEEN.has(b.id));if(pool.length<20){SESSION_SEEN.clear();pool=BANK.slice();}}
  const fams=new Set(pick.fams),recent=pick.grps.slice(-2);
  let c=pool.filter(b=>!fams.has(b.fam)&&!recent.includes(b.grp));
  if(!c.length)c=pool.filter(b=>!fams.has(b.fam));
  if(!c.length)c=pool;
  const byG={};c.forEach(b=>(byG[b.grp]=byG[b.grp]||[]).push(b));
  const gs=Object.keys(byG);const g=gs[Math.floor(Math.random()*gs.length)];
  const byF={};byG[g].forEach(b=>(byF[b.fam]=byF[b.fam]||[]).push(b));
  const fs=Object.keys(byF);const f=fs[Math.floor(Math.random()*fs.length)];
  const pickQ=byF[f][Math.floor(Math.random()*byF[f].length)];
  pick.fams.push(pickQ.fam);pick.grps.push(pickQ.grp);
  SEEN.add(pickQ.id);SESSION_SEEN.add(pickQ.id);saveSeen();
  return pickQ;
}
