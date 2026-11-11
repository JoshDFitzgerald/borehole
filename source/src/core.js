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
  BANK.push({id:hashStr(q).toString(36),fam,grp:opts.grp||CUR_GRP,q,sub:sub||"",items,surname:!!opts.surname,ds:opts.ds||null});
}
/* standalone list */
function L(fam,q,sub,body,opts){addQ(fam,q,sub,parseItems(body),opts);}
/* tagged dataset, ordered most → least familiar */
function DS(name,body,opts){DATASETS[name]={items:parseItems(body),opts:opts||{}};}
/* derived prompt: filter a dataset by tag expression, e.g. "eu", "af&landlocked", "es|pt" */
function T(fam,ds,q,sub,filter,opts){const d=DATASETS[ds];if(!d)throw new Error("no dataset "+ds);let items=d.items.filter(tagf(filter));
  if(opts&&opts.demote){const dm=opts.demote.map(n=>n.toLowerCase());items=items.filter(it=>!dm.includes(it.name.toLowerCase())).concat(dm.map(n=>items.find(it=>it.name.toLowerCase()===n)).filter(Boolean));}
  addQ(fam,q,sub,items,Object.assign({},d.opts,opts||{},{ds}));}
function ALL(fam,ds,q,sub,opts){T(fam,ds,q,sub,()=>true,opts);}
/* one prompt per starting letter that has enough answers */
function LETTERS(fam,ds,qf,sub,filter,opts){
  const d=DATASETS[ds];if(!d)throw new Error("no dataset "+ds);
  const pool=filter?d.items.filter(tagf(filter)):d.items;const by={};const min=(opts&&opts.min)||8;
  pool.forEach(it=>{const c=norm(it.name).charAt(0).toUpperCase();if(/[A-Z]/.test(c))(by[c]=by[c]||[]).push(it);});
  Object.keys(by).sort().forEach(c=>{if(by[c].length>=min)addQ(fam,qf(c),typeof sub==="function"?sub(c):sub,by[c],Object.assign({},d.opts,opts||{},{min,ds}));});
}

/* ---------- matching ---------- */
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/\+/g," plus ").replace(/['’‘`".,!?“”:()\[\]]/g,"").replace(/[-_/–—]/g," ").replace(/\s+/g," ").trim().replace(/^(the|a|an) /,"");}
function sing(n){const w=n.split(" ");let l=w[w.length-1];if(l.length>3){if(/ies$/.test(l))l=l.slice(0,-3)+"y";else if(/(ch|sh|x|z|ss)es$/.test(l))l=l.slice(0,-2);else if(/[^s]s$/.test(l))l=l.slice(0,-1);}w[w.length-1]=l;return w.join(" ");}
/* bounded Levenshtein: returns max+1 as soon as the distance must exceed max */
function lev(a,b,max){max=max==null?2:max;if(a===b)return 0;const m=a.length,n=b.length;if(Math.abs(m-n)>max)return max+1;let prev=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const cur=[i];let lo=i;for(let j=1;j<=n;j++){cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));if(cur[j]<lo)lo=cur[j];}if(lo>max)return max+1;prev=cur;}return prev[n];}
function tierFor(i,n){if(i===n-1)return 4;const p=(i+1)/(n-1);if(i===0||p<=.10+1e-9)return 0;if(p<=.50+1e-9)return 1;if(p<=.80+1e-9)return 2;return 3;}

/* ---- canonical forms: the "essence" of an answer ----
   number words, ordinals and Roman numerals become digits ("Henry the Eighth" = "Henry VIII" = "henry 8"),
   common abbreviations expand (St = Saint, Mt = Mount), filler words drop out, every word is singular. */
const NUM_U={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19};
const NUM_T={twenty:20,thirty:30,forty:40,fourty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};
const NUM_O={first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,eigth:8,ninth:9,tenth:10,eleventh:11,twelfth:12,thirteenth:13,fourteenth:14,fifteenth:15,sixteenth:16,seventeenth:17,eighteenth:18,nineteenth:19,twentieth:20,thirtieth:30,fortieth:40,fiftieth:50,sixtieth:60,seventieth:70,eightieth:80,ninetieth:90,hundredth:100,thousandth:1000};
const ABBR={st:"saint",ste:"sainte",mt:"mount",mtn:"mountain",mtns:"mountain",ft:"fort",pt:"point",dr:"doctor",mr:"mister",jr:"junior",sr:"senior",pres:"president",gen:"general",capt:"captain",lt:"lieutenant",sgt:"sergeant",prof:"professor",bros:"brother",intl:"international",natl:"national",n:"and",vs:"versus",nr:"number",no:"number",isl:"island",is:"island",lk:"lake",r:"river",riv:"river"};
const STOPW=new Set(["the","a","an","of","and","von","van","der","de","da","del","du","le","la"]);
/* words that describe rather than name: dropped in the loosest comparison only
   (King Henry VIII, Mount Everest, the planet Mars, Mexico City) */
const TITLEW=new Set(["king","queen","prince","princess","saint","sainte","sir","dame","lord","lady","pope","emperor","empress","tsar","czar","president","general","doctor","mister","missus","miss","mrs","ms","captain","professor","chief","admiral","sultan","pharaoh","shah","kaiser","duke","duchess","baron","jr","junior","senior","mount","mountain","lake","river","island","city","planet","state","province","county","desert","volcano","ocean","sea"]);
function romanVal(w){if(w.length>6||!/^(xl|x{0,3})(ix|iv|v?i{0,3})$/.test(w)||!w)return -1;const v={i:1,v:5,x:10,l:50};let t=0;for(let i=0;i<w.length;i++){const a=v[w[i]],b=v[w[i+1]]||0;t+=a<b?-a:a;}return t;}
function isNumW(w){return w in NUM_U||w in NUM_T||w in NUM_O||w==="hundred"||w==="thousand";}
function numRun(t,i){
  let total=0,cur=0,prev="",j=i,used=0;
  for(;j<t.length;j++){
    const x=t[j];
    if(x==="and"){if(prev==="h"&&j+1<t.length&&isNumW(t[j+1])&&t[j+1]!=="hundred")continue;break;}
    if(x==="hundred"){cur=(cur||1)*100;prev="h";used++;continue;}
    if(x==="thousand"){total+=(cur||1)*1000;cur=0;prev="k";used++;continue;}
    let v,k;if(x in NUM_U){v=NUM_U[x];k=v>=10?"n":"u";}else if(x in NUM_T){v=NUM_T[x];k="t";}else if(x in NUM_O){v=NUM_O[x];k="o";}else break;
    const year=cur>=10&&cur<100&&(prev==="n"||prev==="t"||prev==="u"&&cur>20);
    if(k==="o"){if(!used)cur=v;else if((prev==="t"&&v<10)||prev==="h"||prev==="k")cur+=v;else if(year&&v>=10)cur=cur*100+v;else break;used++;j++;break;}
    if(!used||prev==="h"||prev==="k"){cur+=v;}
    else if(prev==="t"&&k==="u"){cur+=v;}
    else if((k==="n"||k==="t")&&year){cur=cur*100+v;}
    else break;
    prev=k;used++;
  }
  return used?{v:total+cur,j}:null;
}
function canonToks(n){/* n: a norm()'d string */
  const t=n.split(" ").filter(Boolean).map(w=>{if(ABBR[w])return ABBR[w];const o=/^(\d+)(st|nd|rd|th)$/.exec(w);return o?o[1]:w;});
  const out=[];
  for(let i=0;i<t.length;){
    if(isNumW(t[i])){const r=numRun(t,i);if(r){out.push(String(r.v));i=r.j;continue;}}
    const rv=i>0?romanVal(t[i]):-1;out.push(rv>0?String(rv):t[i]);i++;/* "Henry I" yes, "I, Robot" no */
  }
  const kept=out.filter(w=>!STOPW.has(w)).map(w=>w.length>3&&!/^\d+$/.test(w)?sing(w):w);
  return kept.length?kept:out;
}
function looseToks(ct){const k=ct.filter(w=>!TITLEW.has(w));return k.length?k:ct;}
/* rough sound-alike key: Ghandi = Gandhi, Filadelfia = Philadelphia, Chaikovsky = Tchaikovsky */
function phon(w){
  let s=w.replace(/[^a-z0-9]/g,"");if(/^\d+$/.test(s))return s;
  s=s.replace(/^(kn|gn|pn|wr|ps)/,m=>m[1]).replace(/tch/g,"ch").replace(/sch/g,"sh").replace(/ph/g,"f").replace(/gh/g,"g").replace(/ck/g,"k").replace(/q/g,"k").replace(/x/g,"ks").replace(/tz/g,"z").replace(/dg/g,"j")
   .replace(/c(?=[eiy])/g,"s").replace(/sh|ch/g,"X").replace(/c/g,"k").replace(/z/g,"s").replace(/h/g,"").replace(/w(?![aeiou])/g,"").replace(/y/g,"i").replace(/([a-zX])\1+/g,"$1").replace(/[aeiou]+/g,"a");
  return s;
}
const phonStr=toks=>toks.map(phon).join(" ");

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
/* forms used by the "did you mean" layer, built on first need */
function prepLoose(P){
  if(P._loose)return P._loose;
  const items=P.list.map(x=>{
    const forms=[...x.keys].map(k=>{const ct=canonToks(k),lt=looseToks(ct);return{ct,lt,c:ct.join(" "),l:lt.slice().sort().join(" "),cc:ct.join(""),p:phonStr(ct)};});
    return{forms};
  });
  return(P._loose=items);
}
/* every answer in this prompt's family and source dataset: a guess that exactly names some
   other real thing of the same kind is never "corrected" into a lookalike (Austria is not a
   typo of Australia), while an unrelated word elsewhere in the bank (chili) can still mean Chile */
const KNOWN={};
function knownKeys(P){
  const id=(P.fam||"")+"|"+(P.ds||"");if(KNOWN[id])return KNOWN[id];const K=KNOWN[id]=new Set();
  const add=s=>{const k=norm(s);if(k){K.add(k);K.add(sing(k));}};
  const fromItems=items=>items.forEach(it=>{add(it.name);it.alias.forEach(add);});
  BANK.forEach(b=>{if(b.fam===P.fam)fromItems(b.items);});
  if(P.ds&&DATASETS[P.ds])fromItems(DATASETS[P.ds].items);
  return K;
}
/* exact layer: aliases, plurals, spacing, and plain typos. Returns {i, how} with i=-1 on a miss */
function matchQx(P,raw){
  const s=norm(raw);if(!s)return{i:-1};const s2=sing(s),sc=s.replace(/ /g,""),sc2=s2.replace(/ /g,"");
  const extra=/ves$/.test(s)?[s.replace(/ves$/,"f"),s.replace(/ves$/,"fe")]:[];
  for(let i=0;i<P.list.length;i++){const k=P.list[i].keys;if(k.has(s)||k.has(s2)||extra.some(e=>k.has(e)))return{i,how:"exact"};}
  for(let i=0;i<P.list.length;i++){const c=P.list[i].compact;if(c.has(sc)||c.has(sc2))return{i,how:"exact"};}
  const tol=s.length>=11?2:s.length>=5?1:0;if(!tol)return{i:-1};
  const kn=knownKeys(P);if(kn.has(s)||kn.has(s2))return{i:-1};
  let best=-1,bd=9,tie=false;
  P.list.forEach((it,i)=>it.keys.forEach(k=>{if(k.length<4)return;const d=lev(s,k,tol);if(d<bd){bd=d;best=i;tie=false;}else if(d===bd&&i!==best)tie=true;}));
  return bd<=tol&&!tie?{i:best,how:"typo"}:{i:-1};
}
function matchQ(P,raw){return matchQx(P,raw).i;}
/* every answer anywhere in the bank, for "is this guess already a real word in its own right?" */
let ANYKEY=null;
function anyKeys(){
  if(ANYKEY)return ANYKEY;ANYKEY=new Set();
  const add=s=>{const k=norm(s);if(k){ANYKEY.add(k);ANYKEY.add(sing(k));}};
  BANK.forEach(b=>b.items.forEach(it=>{add(it.name);it.alias.forEach(add);}));
  Object.values(DATASETS).forEach(d=>d.items.forEach(it=>{add(it.name);it.alias.forEach(add);}));
  return ANYKEY;
}
/* intent layer. Returns {i, how} for a likely intended answer, {vague:true} when several
   answers fit equally well ("Henry" on a list of Henrys), or {i:-1}. */
function suggestQ(P,raw){
  const s=norm(raw);if(!s)return{i:-1};
  const L=prepLoose(P),ct=canonToks(s),lt=looseToks(ct);
  const c=ct.join(" "),cc=ct.join(""),l=lt.slice().sort().join(" "),p=phonStr(ct);
  const kn=knownKeys(P),known=kn.has(s)||kn.has(sing(s));
  const ak=anyKeys(),real=known||ak.has(s)||ak.has(sing(s));/* the guess is itself a real answer somewhere */
  const uniq=(test)=>{const hit=new Set();L.forEach((it,i)=>{if(it.forms.some(test))hit.add(i);});return hit;};
  const pick=(hit,how)=>hit.size===1?{i:[...hit][0],how}:hit.size>1?{vague:true,n:hit.size}:null;
  let r;
  /* 1. same essence: number words, numerals, abbreviations, filler words, plurals */
  if((r=pick(uniq(f=>f.c===c||f.cc===cc),"same")))return r;
  /* 2. same words in any order, titles and descriptors dropped (King Henry 8th, Everest mountain) */
  if(!(real&&lt.length<ct.length)&&(r=pick(uniq(f=>f.l===l),"order")))return r;
  /* 3. containment: the guess is part of an answer (Einstein → Albert Einstein) or wraps one (the planet Mars) */
  const big=(real&&lt.length<ct.length?ct:lt).filter(w=>w.length>=3||/^\d+$/.test(w));
  if(big.join("").length>=4){
    const sub=uniq(f=>f.lt.length>big.length&&big.every(w=>f.lt.includes(w)));
    if(sub.size===1)return{i:[...sub][0],how:"part"};
    if(sub.size>1)return{vague:true,n:sub.size};
  }
  if(!real&&lt.length>1){
    let best=-1,bl=0,tie=false;
    L.forEach((it,i)=>it.forms.forEach(f=>{const fl=f.lt.join("").length;if(f.lt.length<lt.length&&fl>=3&&f.lt.every(w=>lt.includes(w))){if(fl>bl){bl=fl;best=i;tie=false;}else if(fl===bl&&i!==best)tie=true;}}));
    if(best>=0&&!tie)return{i:best,how:"wrap"};
  }
  if(known)return{i:-1,known:true};
  if(real)return{i:-1};
  /* 4. looser spelling: wider typo band on the canonical form */
  const tol=cc.length>=11?3:cc.length>=7?2:cc.length>=4?1:0;
  if(tol){
    let best=-1,bd=9,tie=false;
    L.forEach((it,i)=>it.forms.forEach(f=>{if(f.cc.length<4)return;const d=lev(cc,f.cc,tol);if(d<bd){bd=d;best=i;tie=false;}else if(d===bd&&i!==best)tie=true;}));
    if(bd<=tol&&!tie&&bd/Math.max(cc.length,1)<=.34)return{i:best,how:"spell"};
  }
  /* 5. sounds the same, and is spelled at least roughly the same */
  if(cc.length>=5){
    const pp=p.replace(/ /g,"");
    const hit=uniq(f=>{if(f.p.replace(/ /g,"")!==pp)return false;const d=lev(cc,f.cc,5),r=d/Math.max(cc.length,f.cc.length);return r<=.34||(pp.length>=6&&r<=.45);});
    if(hit.size===1)return{i:[...hit][0],how:"sound"};
  }
  /* 6. a confident start of a longer answer (Mississ… → Mississippi) */
  if(cc.length>=4){
    const hit=uniq(f=>f.cc.length>cc.length&&f.cc.startsWith(cc)&&cc.length>=f.cc.length*.55);
    if(hit.size===1)return{i:[...hit][0],how:"start"};
  }
  return{i:-1};
}
/* one call for the game: exact hit, suggestion, vague, or miss.
   A plain typo fix whose input is itself some other real answer becomes a question instead (Chili → Chile?) */
function judge(P,raw){
  const m=matchQx(P,raw);
  if(m.i>=0){if(m.how==="typo"){const s=norm(raw),ak=anyKeys();if(ak.has(s)||ak.has(sing(s)))return{i:m.i,sure:false,how:"typo"};}return{i:m.i,sure:true};}
  const g=suggestQ(P,raw);
  return g.i>=0?{i:g.i,sure:false,how:g.how}:{i:-1,vague:!!g.vague,known:!!g.known};
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
