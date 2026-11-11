/* ================= GAME: flow, camera, HUD, sheets ================= */
const REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
const RUN=7,TIME=25;
const GRPNAME={geo:"Geography",us:"USA",sci:"Science",nature:"Nature",food:"Food & drink",sports:"Sports",screen:"Film & TV",music:"Music",words:"Words",hist:"History",life:"Everyday",lit:"Books",names:"Names",games:"Games",myth:"Myth & faith",misc:"Mixed"};
const R={bit:0,cam:{y:0,z:.2,a:300},mode:"idle",shake:0,spin:0,spinning:false,heat:0,lines:[],pins:[],t:0,idleA:300,idleZ:.2,diveZ:.5,diveA:400};
let S=null,P=null;
function freshS(){return{v:21,mode:"classic",round:0,depth:0,score:0,bits:3,results:[],pick:{fams:[],grps:[]},qid:null,phase:"play"};}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function tween(ms,fn,ease){ease=ease||(k=>k);return new Promise(res=>{const t0=performance.now();const f=now=>{const k=Math.min(1,(now-t0)/ms);fn(ease(k),k);if(k<1)requestAnimationFrame(f);else res();};requestAnimationFrame(f);});}
const easeIO=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
const store=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}};

/* ---------- layout & camera ---------- */
function readSafe(){const p=document.createElement("div");p.style.cssText="position:fixed;left:0;top:0;padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px);visibility:hidden";document.body.appendChild(p);const cs=getComputedStyle(p);SAFE.l=parseFloat(cs.paddingLeft)||0;SAFE.r=parseFloat(cs.paddingRight)||0;p.remove();}
let cardH=150;
function computeLayout(){
  const hud=$("hud").getBoundingClientRect();document.documentElement.style.setProperty("--cardTop",Math.round(hud.bottom+8)+"px");
  const card=$("card");if(!card.classList.contains("mini")&&card.offsetHeight)cardH=card.offsetHeight;
  const cb=hud.bottom+8+cardH,dockH=($("dock").offsetHeight||92);
  const a=Math.max(H*.38,cb+58);R.idleA=a;R.idleZ=Math.max(.07,(H-dockH-30-a)/2000);
  R.diveZ=clamp(R.idleZ*2.7,.3,.95);R.diveA=H*.47;
}
function resize(){
  W=innerWidth;H=innerHeight;DPR=Math.min(2,devicePixelRatio||1);
  cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);lc.width=cv.width;lc.height=cv.height;
  readSafe();computeLayout();
}
function camTargets(){
  if(R.mode==="dive")return[R.diveZ,R.diveA];
  if(R.mode==="reveal")return[R.idleZ*1.5,H*.25];
  if(R.mode==="end")return[R.idleZ*.9,H*.3];
  if(R.mode==="rewind")return[R.idleZ*.6,H*.45];
  return[R.idleZ,R.idleA];
}

/* ---------- main loop ---------- */
let lastT=performance.now(),hudT=0;
function loop(now){
  const dt=Math.min(.05,(now-lastT)/1000);lastT=now;R.t+=dt;
  const [tz,ta]=camTargets(),k=1-Math.exp(-dt*(R.mode==="dive"?3.4:2.6));
  R.cam.z+=(tz-R.cam.z)*k;R.cam.a+=(ta-R.cam.a)*k;R.cam.y=R.bit;
  R.shake*=Math.exp(-dt*6);if(R.spinning)R.spin+=dt*4;R.heat+=((R.spinning?1:0)-R.heat)*(1-Math.exp(-dt*3));
  updateParts(dt);Mole.update(dt);
  if(R.bit>10400&&Math.random()<dt*6)emit({kind:"spark",x:Math.random()*W,m:M(H+10),vx:(Math.random()-.5)*20,vy:-60-Math.random()*60,life:3,col:"rgba(255,140,60,.7)",grav:-.02});
  draw();
  hudT-=dt;if(hudT<=0){hudT=.08;updateHud();}
  requestAnimationFrame(loop);
}
function draw(){
  cx.setTransform(DPR,0,0,DPR,0,0);cx.globalCompositeOperation="source-over";cx.globalAlpha=1;
  cx.fillStyle="#120d0b";cx.fillRect(0,0,W,H);
  cx.save();const sh=REDUCED?0:R.shake;if(sh>.05)cx.translate((Math.random()-.5)*sh*2,(Math.random()-.5)*sh*2);
  drawSky();drawStrata();drawGround();drawFeatures();Mole.drawTrail();drawBore();drawRig();
  drawLight();drawEmissive();
  drawStrataLabels();drawLandmarks();drawRuler();drawPins();drawLines();drawBit();Mole.draw();drawParts();
  cx.restore();drawVignette();
}
function updateHud(){
  $("hDepth").textContent=fmt(R.bit);$("hTemp").textContent=`Rock ${Math.round(tempAt(R.bit))}°C`;
  const nl=LANDMARKS.find(l=>l.m>R.bit+.5);$("hNext").textContent=nl?`Next: ${nl.s} in ${fmt(nl.m-R.bit)} m`:"Deeper than anything";
}

/* ---------- HUD bits ---------- */
function renderPips(){
  let h="";const res=S.results;
  if(S.mode==="classic"){for(let i=0;i<RUN;i++){const r=res[i];h+=r?`<span class="pip done" style="--tc:${r.tier>=0?TIERS[r.tier].col:"var(--miss)"}"></span>`:`<span class="pip ${i===S.round&&S.phase!=="over"?"now":""}"></span>`;}}
  else{res.slice(-6).forEach(r=>h+=`<span class="pip done" style="--tc:${r.tier>=0?TIERS[r.tier].col:"var(--miss)"}"></span>`);if(S.phase!=="over")h+=`<span class="pip now"></span>`;}
  $("pips").innerHTML=h;
  $("progTxt").textContent=S.phase==="over"?"Hole complete":S.mode==="endless"?`Endless · ${S.bits} bit${S.bits===1?"":"s"}`:`Prompt ${S.round+1} of ${RUN}`;
}
let shownScore=0;
function countScore(){const from=shownScore,to=S.score;tween(REDUCED?1:800,e=>{shownScore=Math.round(from+(to-from)*e);$("hScore").textContent=fmt(shownScore);});}
function renderCard(){
  const c=$("card");
  c.innerHTML=`<div class="eb"><span>${S.mode==="endless"?"Endless · prompt "+(S.round+1):"Prompt "+(S.round+1)+" of "+RUN} · ${GRPNAME[P.grp]||"Mixed"}</span><span>${P.n} answers</span></div><h2>${esc(P.q)}</h2>${P.sub?`<p>${esc(P.sub)}</p>`:""}`;
  c.classList.remove("mini","enter");void c.offsetWidth;c.classList.add("enter");computeLayout();
}
function rebuildPins(){let i=0;R.pins=S.results.map(r=>{i++;return r.tier>=0?{m:r.from+r.pts*MPP,tier:r.tier,name:r.name,round:i}:null;}).filter(Boolean);}
function makeLines(){R.lines=TIERS.map((t,i)=>({tier:i,m:S.depth+t.pts*MPP,born:R.t+.15+i*.09,flash:0,hit:false,passed:false}));}

/* ---------- timer ---------- */
const RING=2*Math.PI*21;let tLeft=TIME,tId=0,lowFired=false;
function drawTimer(){$("ring").style.strokeDasharray=RING;$("ring").style.strokeDashoffset=RING*(1-tLeft/TIME);$("secs").textContent=Math.max(0,Math.ceil(tLeft));$("timer").classList.toggle("low",tLeft<=6);}
function resetTimer(){clearInterval(tId);tId=0;tLeft=TIME;lowFired=false;drawTimer();}
function startTimer(){if(tId||S.phase!=="play")return;let lastSec=Math.ceil(tLeft);tId=setInterval(()=>{if(!$("modal").hidden)return;tLeft-=.1;drawTimer();const sec=Math.ceil(tLeft);if(sec!==lastSec){lastSec=sec;if(sec<=5&&sec>0)Snd.tick(true);}if(tLeft<=6&&!lowFired){lowFired=true;Mole.onLow();}if(tLeft<=0){stopTimer();submit($("guess").value,true);}},100);}
function stopTimer(){clearInterval(tId);tId=0;}

/* ---------- rounds ---------- */
function startHole(){
  S=freshS();R.bit=0;R.pins=[];R.lines=[];shownScore=0;$("hScore").textContent="0";PART.length=0;Mole.trail=[];Mole.m=0;
  startRound(false);Mole.onHole();
}
function startRound(auto,keep){
  const q=keep||pickNext(S.pick);S.qid=q.id;P=prepQ(q);S.phase="play";R.mode="idle";
  renderCard();renderPips();makeLines();
  const d=$("dock");d.classList.remove("away");$("guess").value="";$("guess").disabled=false;resetGuess();
  resetTimer();if(auto){startTimer();setTimeout(()=>$("guess").focus({preventScroll:true}),50);}
  Mole.onPrompt(S.round===0&&S.mode==="classic");
}
/* ---------- guessing: as many tries as the clock allows ----------
   A guess on the list drills. A near miss asks "Did you mean …?". Anything else says try again,
   and the timer keeps running. Only running out of time (or giving up) makes a dry hole. */
let G={misses:[],pend:null};
function resetGuess(){G={misses:[],pend:null};renderFb("");const g=$("guess");g.classList.remove("bad");g.placeholder="Type an answer";}
function renderFb(msg){
  let h=msg||"";
  if(G.misses.length){const show=G.misses.slice(-5);h+=`<div class="tried"><span>Tried</span>${show.map(m=>`<s>${esc(m)}</s>`).join("")}${G.misses.length>5?`<span>+${G.misses.length-5}</span>`:""}<button type="button" class="giveup" id="giveUp">Give up</button></div>`;}
  $("fb").innerHTML=h;
  const keep=e=>e.preventDefault();/* keep the keyboard up while tapping these */
  const y=$("fbYes"),n=$("fbNo"),gu=$("giveUp");
  if(y){y.onmousedown=keep;y.onclick=acceptPend;}
  if(n){n.onmousedown=keep;n.onclick=rejectPend;}
  if(gu){gu.onmousedown=keep;gu.onclick=()=>{if(S.phase!=="play")return;Snd.click();finish(-1,"",{gaveUp:true});};}
}
function submit(raw,timeUp){
  if(S.phase!=="play")return;raw=(raw||"").trim();
  if(timeUp)return timeUpFinish(raw);
  if(G.pend&&(!raw||norm(raw)===norm(G.pend.raw)))return acceptPend();
  if(!raw){const i=$("guess");i.classList.remove("nudge");void i.offsetWidth;i.classList.add("nudge");return;}
  Snd.init();startTimer();
  if(G.misses.some(m=>norm(m)===norm(raw)))return miss(raw,"dup");
  const j=judge(P,raw);
  if(j.i>=0&&j.sure)return finish(j.i,raw);
  if(j.i>=0)return ask(j.i,raw);
  miss(raw,j.vague?"vague":j.known?"known":"miss");
}
function ask(i,raw){
  G.pend={i,raw};Snd.ask();Mole.onSuggest();
  renderFb(`<div class="fbm ask" role="alert"><span class="msg">Did you mean <b>${esc(P.list[i].name)}</b>?</span><button type="button" class="mini" id="fbYes">Yes</button><button type="button" class="mini alt" id="fbNo">No</button></div>`);
  const g=$("guess");g.classList.remove("bad");g.focus({preventScroll:true});g.select();
}
function acceptPend(){const p=G.pend;if(!p||S.phase!=="play")return;Snd.click();finish(p.i,p.raw,{asked:true});}
function rejectPend(){const p=G.pend;if(!p||S.phase!=="play")return;G.pend=null;miss(p.raw,"miss");}
function miss(raw,kind){
  G.pend=null;
  if(kind==="miss"||kind==="known")G.misses.push(raw);
  const q=`<q>${esc(raw)}</q>`;
  const txt=kind==="vague"?`${q} could be more than one answer. <b>Be more specific.</b>`
    :kind==="known"?`${q} is real, but it isn't on this list. <b>Try again.</b>`
    :kind==="dup"?`You already tried ${q}. <b>Try something else.</b>`
    :`${q} isn't on the list. <b>Try again.</b>`;
  renderFb(`<div class="fbm miss" role="alert"><span class="ic" aria-hidden="true">✕</span><span class="msg">${txt}</span></div>`);
  Snd.nope();Mole.onMiss(G.misses.length,kind==="dup"?"miss":kind);R.shake=Math.max(R.shake,1.4);
  const g=$("guess");g.value="";g.placeholder="Try another answer";g.classList.remove("nudge");void g.offsetWidth;g.classList.add("nudge","bad");g.focus({preventScroll:true});
}
function timeUpFinish(raw){
  let i=-1,r="";
  if(raw){const j=judge(P,raw);if(j.i>=0){i=j.i;r=raw;}}
  if(i<0&&G.pend){i=G.pend.i;r=G.pend.raw;}/* the clock beat the Yes button: count it */
  if(i<0&&raw&&!G.misses.some(m=>norm(m)===norm(raw)))G.misses.push(raw);
  finish(i,r,{asked:i>=0});
}
function finish(i,raw,o){
  o=o||{};const it=i>=0?P.list[i]:null;const misses=G.misses.slice();G.pend=null;
  const res={q:P.q,grp:P.grp,raw,idx:i,tier:it?it.tier:-1,name:it?it.name:null,rank:it?it.rank:0,n:P.n,pts:it?TIERS[it.tier].pts:0,timeUp:!it&&!o.gaveUp,gaveUp:!!o.gaveUp,asked:!!(o.asked&&it&&norm(raw)!==norm(it.name)),misses,from:S.depth};
  dive(res);
}
async function dive(res){
  S.phase="dive";stopTimer();$("guess").blur();$("guess").disabled=true;$("dock").classList.add("away");$("card").classList.add("mini");
  R.mode="dive";R.spinning=true;Snd.drillStart();Mole.onDive();
  const from=res.from,to=from+res.pts*MPP;
  await tween(REDUCED?80:720,k=>{R.shake=Math.max(R.shake,1+k*1.6);if(Math.random()<.7)debris(2,170,dirtCol(from));if(Math.random()<.3)dust(from);Snd.drillSpeed(.08+.18*k);});
  if(to>from){
    const dur=REDUCED?500:1500+(to-from)*.9;let prevM=from,prevSt=stratumIdx(from),lt=performance.now(),lastCrunch=0;
    await tween(dur,(e)=>{
      const now=performance.now(),dts=Math.max(.001,(now-lt)/1000);lt=now;const m=from+(to-from)*e;R.bit=m;
      const v=(m-prevM)/dts,vn=Math.min(1,v/1100);Snd.drillSpeed(.25+.75*vn);R.shake=Math.max(R.shake,.8+vn*3.4);
      debris(1+Math.round(vn*4),150+vn*320,dirtCol(m));if(Math.random()<.22)dust(m);if(stratumIdx(m)>=5&&Math.random()<.55)sparks(2);
      if(now-lastCrunch>110+Math.random()*120){lastCrunch=now;Snd.crunch();}
      R.lines.forEach(Ln=>{if(!Ln.passed&&Ln.tier!==res.tier&&m>=Ln.m){Ln.passed=true;Ln.flash=1;Snd.pass(Ln.tier);Mole.onPass(Ln.tier);}});
      const si=stratumIdx(m);if(si!==prevSt){prevSt=si;breach(si,m);}
      LANDMARKS.forEach(l=>{if(prevM<l.m&&m>=l.m)passLandmark(l);});
      prevM=m;
    },easeIO);
    R.bit=to;
  }else{
    await tween(REDUCED?150:1400,k=>{R.shake=Math.max(R.shake,1.4);if(Math.random()<.5)debris(1,110,"#8a8580");if(Math.random()<.35)emit({kind:"smoke",x:W/2+(Math.random()-.5)*20,m:R.bit-10/R.cam.z,vx:(Math.random()-.5)*30,vy:-50,life:1.4,size:5,col:"rgba(120,115,110,",grav:-.03});Snd.drillSpeed(.18+.12*Math.sin(k*40));});
  }
  R.spinning=false;Snd.drillStop();
  if(res.tier>=0){
    const Ln=R.lines.find(l=>l.tier===res.tier);if(Ln){Ln.hit=true;Ln.flash=1;}
    const col=TIERS[res.tier].col;burst(to,col,res.tier===4?70:18+res.tier*10,res.tier===4?320:150+res.tier*30);
    if(res.tier>=2)debris(20,300,dirtCol(to));R.shake=3+res.tier*2.2;Snd.thunk();setTimeout(()=>Snd.chime(res.tier),120);
    if(res.tier===4)flashScreen(col);
  }else{R.shake=2;Snd.dry();for(let i=0;i<10;i++)emit({kind:"smoke",x:W/2+(Math.random()-.5)*30,m:R.bit-8/R.cam.z,vx:(Math.random()-.5)*60,vy:-40-Math.random()*40,life:1.8,size:6,col:"rgba(140,130,120,",grav:-.03});}
  S.depth=to;S.score+=res.pts;S.results.push(res);if(S.mode==="endless"&&res.tier<0)S.bits--;
  rebuildPins();renderPips();countScore();Mole.onLand(res);
  await wait(REDUCED?250:1300);
  S.phase="reveal";R.mode="reveal";showReveal(res);
}
function breach(si,m){
  const st=STRATA[si];showBanner("Entering",st.n);Snd.breach();R.shake=Math.max(R.shake,6);
  debris(26,380,shade(st.c,.2),m);for(let i=0;i<4;i++)dust(m,"200,170,140");emit({kind:"ring",x:W/2,m,vx:220,size:6,life:.6,col:"rgba(255,230,200,.7)",grav:0});
  Mole.onBreach(si);
}
function passLandmark(l){
  showToast(`Passed: ${l.t}`);Snd.landmark();
  if(l.big){showBanner("New world record","Past Kola");Snd.fanfare();burst(l.m,"#ff8a8a",60,280);flashScreen("#ff7070");}
  const qs={105.5:"Deeper than any subway on Earth!",330:"That's one Eiffel Tower. Upside down.",828:"A whole Burj Khalifa down!",979:"Taller than the tallest waterfall.",1642:"Deeper than Lake Baikal!",1800:"The Grand Canyon? Shallow.",2212:"No known cave goes this deep!",2400:"Physicists work down here. Hi, physicists!",3688:"Average ocean depth. Fish would be impressed.",4000:"Deeper than the deepest mine!",5895:"Kilimanjaro, flipped. Easy.",6961:"Tallest peak in the Americas, upside down!",8849:"That's EVEREST. Upside down!",10935:"Deeper than the Mariana Trench!!",12262:"WE BEAT KOLA! Deepest hole in history!",35000:"The Moho! The mantle is right there!"};
  Mole.onLandmark({q:qs[l.m],s:l.s});
}
let bannerT=0;function showBanner(sub,txt){const b=$("banner");$("bannerSub").textContent=sub;$("bannerTxt").textContent=txt;b.classList.remove("go");void b.offsetWidth;b.classList.add("go");}
let toastT=0;function showToast(t){const el=$("toast");el.textContent=t;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove("show"),2600);}
function flashScreen(col){const f=$("flash");f.style.background=col;f.classList.remove("go");void f.offsetWidth;f.classList.add("go");}

/* ---------- reveal & end sheets ---------- */
function ordinal(n){const s=["th","st","nd","rd"],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0]);}
function showReveal(res){
  const col=res.tier>=0?TIERS[res.tier].col:"var(--miss)";
  const stamp=res.tier>=0?TIERS[res.tier].name:"Dry hole";
  const ms=res.misses||[],tries=ms.length?` · on try ${ms.length+1}`:"";
  const tried=ms.length?`Tried ${ms.map(m=>"“"+esc(m)+"”").join(", ")}. ${ms.length===1?"It wasn't":"None of them were"} on the list.`:"";
  const head=res.tier>=0
    ?`<b>${esc(res.name)}</b><small><strong>+${res.pts} pts · drilled ${fmt(res.pts*MPP)} m${tries}</strong></small>${res.asked?`<small>You typed “${esc(res.raw)}”. Close enough.</small>`:""}<small>${res.tier===4?`The only Diamond on this list of ${res.n}`:`${ordinal(res.rank)} most common of ${res.n} answers`}</small>`
    :`<b>${res.gaveUp?"Gave up":"Time's up"}</b><small>${tried||"No answer, so the drill didn't move."}${tried?" The drill didn't move.":""}${S.mode==="endless"?` ${S.bits} bit${S.bits===1?"":"s"} left.`:""}</small>`;
  const chip=x=>`<span class="chip${x.rank-1===res.idx?" mine":""}">${esc(x.name)}</span>`;
  const rows=TIERS.map((t,ti)=>{const items=P.list.filter(x=>x.tier===ti);const CAP=36;
    let body=items.map(chip).join("");
    if(items.length>CAP+6){const head=items.slice(0,CAP),rest=items.slice(CAP);const mine=rest.find(x=>x.rank-1===res.idx);
      body=head.concat(mine?[mine]:[]).map(chip).join("")+`<details class="more"><summary>+${rest.length-(mine?1:0)} more</summary><div class="chips">${rest.filter(x=>x!==mine).map(chip).join("")}</div></details>`;}
    return`<div class="trow" style="--tc:${t.col}"><span>◆ ${t.name} · ${t.pts} pts · ${items.length===1?"1 answer":items.length+" answers"}</span><div class="chips">${body}</div></div>`;}).join("");
  const last=S.mode==="classic"&&S.round+1>=RUN,out=S.mode==="endless"&&S.bits<=0;
  $("sheetIn").innerHTML=`<div class="res" style="--tc:${col}"><span class="stamp">${stamp}</span><div class="rinfo">${head}</div></div>
    <div class="rowx"><span class="eb2">The full list · most common to rarest</span><span class="eb2">${fmt(S.depth)} m · ${fmt(S.score)} pts</span></div>
    <div class="board">${rows}</div>
    <div class="rowx sticky"><span class="eb2">${esc(P.q)}</span><button class="btn" id="nextBtn" type="button">${last||out?"See the hole":"Next prompt"}</button></div>`;
  $("sheet").classList.add("up");$("sheetIn").scrollTop=0;
  $("nextBtn").onclick=nextRound;setTimeout(()=>{const b=$("nextBtn");if(b)b.focus({preventScroll:true});},350);
}
async function nextRound(){
  $("sheet").classList.remove("up");Snd.click();
  S.round++;
  if((S.mode==="classic"&&S.round>=RUN)||(S.mode==="endless"&&S.bits<=0)){await wait(300);return showEnd();}
  await wait(200);startRound(true);
}
function showEnd(){
  S.phase="over";R.mode="end";R.lines=[];renderPips();$("dock").classList.add("away");$("card").classList.add("mini");
  const best=+(store("bh-best-depth")||0),bestS=+(store("bh-best-score")||0);const newBest=S.depth>best;
  if(newBest)store("bh-best-depth",String(S.depth));if(S.mode==="classic"&&S.score>bestS)store("bh-best-score",String(S.score));
  const passed=LANDMARKS.filter(l=>l.m<=S.depth);const deepest=passed[passed.length-1];const nextL=LANDMARKS.find(l=>l.m>S.depth);
  const glyph=["▁","▃","▅","▇","◆"];
  const share=`Borehole · ${fmt(S.depth)} m · ${fmt(S.score)} pts\n${S.results.map(r=>r.tier>=0?glyph[r.tier]:"·").join(" ")}${deepest?`\nDeeper than ${deepest.s}`:""}`;
  const rec=S.results.map((r,i)=>`<div style="--tc:${r.tier>=0?TIERS[r.tier].col:"var(--miss)"}"><span>${i+1}. ${esc(r.q)}<small>${r.tier>=0?`${esc(r.name)} · ${TIERS[r.tier].name}`:`Dry hole · ${r.gaveUp?"gave up":"time ran out"}`}</small></span><span>+${r.pts}</span></div>`).join("");
  $("sheetIn").innerHTML=`<div class="rowx"><span class="eb2">${S.mode==="endless"?"Out of drill bits":"Hole complete"}</span><span class="eb2">${newBest?"New deepest hole on this device":"Deepest on this device: "+fmt(Math.max(best,S.depth))+" m"}</span></div>
    <p class="big">${fmt(S.depth)}<small> m down</small></p>
    <div class="stats"><div><span>Score</span><b>${fmt(S.score)}</b></div><div><span>Rock temp</span><b>${Math.round(tempAt(S.depth))}°C</b></div><div><span>Layer</span><b>${STRATA[stratumIdx(S.depth)].n}</b></div><div><span>Diamonds</span><b>${S.results.filter(r=>r.tier===4).length}</b></div></div>
    ${deepest?`<p class="verdict">Deeper than <b>${esc(deepest.t)}</b>.${nextL?` ${fmt(nextL.m-S.depth)} m short of ${esc(nextL.s)}.`:""}</p>`:`<p class="verdict">${nextL?`${fmt(nextL.m-S.depth)} m short of ${esc(nextL.s)}.`:""}</p>`}
    <div class="recap">${rec}</div>
    <pre class="share" id="share">${esc(share)}</pre>
    <div class="rowx"><button class="btn ghost" id="copyBtn" type="button">Copy result</button><div class="btns">${S.mode==="classic"?`<button class="btn ghost" id="endlessBtn" type="button">Keep drilling</button>`:""}<button class="btn" id="newBtn" type="button">New hole</button></div></div>`;
  $("sheet").classList.add("up");$("sheetIn").scrollTop=0;Mole.onEnd();Snd.fanfare();
  $("newBtn").onclick=newHole;
  if($("endlessBtn"))$("endlessBtn").onclick=()=>{$("sheet").classList.remove("up");S.mode="endless";S.bits=3;S.phase="play";Mole.say(pickLine("endless"),4);startRound(true);};
  $("copyBtn").onclick=e=>{const b=e.currentTarget;const sel=()=>{const rg=document.createRange();rg.selectNodeContents($("share"));const s=getSelection();s.removeAllRanges();s.addRange(rg);b.textContent="Selected. Copy it now";};try{navigator.clipboard.writeText(share).then(()=>b.textContent="Copied",sel);}catch(err){sel();}};
  setTimeout(()=>$("newBtn").focus({preventScroll:true}),400);
}
async function newHole(){
  $("sheet").classList.remove("up");S.phase="rewind";R.mode="rewind";Snd.init();Snd.whoosh();Mole.say(pickLine("rewind"),4);
  const from=R.bit;await tween(REDUCED?100:Math.min(2600,900+from*.12),e=>{R.bit=from*(1-e);},easeIO);
  startHole();
}

/* ---------- wiring ---------- */
$("f").addEventListener("submit",e=>{e.preventDefault();submit($("guess").value,false);});
$("guess").addEventListener("focus",()=>{Snd.init();startTimer();});
$("guess").addEventListener("input",()=>{startTimer();Mole.onType();$("guess").classList.remove("bad");});
$("helpBtn").onclick=()=>{$("modal").hidden=false;$("closeHelp").focus();};
$("closeHelp").onclick=()=>{$("modal").hidden=true;};
$("modal").addEventListener("click",e=>{if(e.target===$("modal"))$("modal").hidden=true;});
addEventListener("keydown",e=>{if(e.key!=="Escape")return;if(!$("modal").hidden){$("modal").hidden=true;return;}if(G.pend)rejectPend();});
function setSound(on){Snd.setOn(on);store("bh-sound",on?"1":"0");$("sndBtn").setAttribute("aria-pressed",String(on));$("sndBtn").setAttribute("aria-label",on?"Sound on":"Sound off");$("sndOn").style.display=on?"":"none";$("sndOff").style.display=on?"none":"";}
$("sndBtn").onclick=()=>{Snd.init();setSound(!Snd.on);};
cv.addEventListener("pointerdown",e=>{if(Mole.hit(e.clientX,e.clientY)){Snd.init();Mole.onPoke();}});
addEventListener("resize",resize);
document.fonts&&document.fonts.ready.then(()=>computeLayout());

function boot(data){
  resize();makeTextures();setSound(store("bh-sound")!=="0");
  $("ladder").innerHTML=TIERS.map(t=>`<div class="rung" style="--tc:${t.col}"><b>${t.name}</b><span>${t.pts} pts · ${fmt(t.pts*MPP)} m</span><i>${t.share}</i></div>`).join("");
  $("bankN").textContent=fmt(BANK.length);
  const P0=data&&data.S;
  if(P0&&P0.v===21&&P0.phase!=="rewind"){
    S=P0;R.bit=S.depth;rebuildPins();shownScore=S.score;$("hScore").textContent=fmt(S.score);Mole.m=R.bit;
    const q=BANK.find(b=>b.id===S.qid);
    if(S.phase==="over"){P=q?prepQ(q):null;showEnd();}
    else if(S.phase==="reveal"&&q){P=prepQ(q);renderCard();renderPips();$("card").classList.add("mini");$("dock").classList.add("away");R.mode="reveal";showReveal(S.results[S.results.length-1]);}
    else if(q){S.phase="play";startRound(false,q);}
    else startHole();
  }else startHole();
  requestAnimationFrame(t=>{lastT=t;loop(t);});
  (window.requestIdleCallback||(f=>setTimeout(f,1200)))(()=>anyKeys());
}
window.claude?.hot?.snapshot?.(()=>({S}));
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data??{});
