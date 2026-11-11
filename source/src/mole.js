/* ================= DIGBY: the mole who digs along ================= */
const LINES={
  hello:["Hi! I'm Digby. Rarer answers dig deeper.","Hard hat on. Let's go down.","Morning! Ready to make a really big hole?","Digby, reporting for digging."],
  prompt:["Ooh. I know this one. I think.","Go weird. Weird goes deep.","Common answers barely scratch the surface.","Think of the answer nobody else would say.","My whiskers say there's a good one down there.","Take your time. Well, 25 seconds of it.","I'd say something, but I'm a mole."],
  idle:["Psst. The single rarest answer is a Diamond.","I dug a tunnel to my house once. Took ages.","Do you hear that? That's rocks. Being rocks.","I'm not blind, I'm just mostly looking at dirt.","Fun fact: moles can dig about 18 feet an hour. I can do more with a drill.","Hmm hmm hmm. Mole song."],
  low:["Tick tock!","Any answer! Anything!","Hurry, my claws are getting cold!","Five seconds! Panic gracefully!"],
  go:["Drilling!","Here we go!","Hold my hard hat!","Dig dig dig!","Down we go!"],
  pass:["Past {t}!","Still going!","Deeper!","Keep going!","Wheee!"],
  land0:["Everyone says that one.","Gravel. Classic.","We barely got our boots dirty.","That's what my aunt would say.","Safe pick. Shallow, but safe."],
  land1:["Solid. Like coal.","Respectable.","Not bad at all.","Decent dig.","Good honest coal."],
  land2:["Ooh, copper! Shiny.","Now that's a pick!","Good one. I didn't think of it.","Deeper than most people go!"],
  land3:["GOLD! Who even knows that?","Now we're tunneling!","You've done this before.","My whiskers are tingling!"],
  land4:["DIAMOND!! Nobody says that!","THE one! The only one!","I'm framing this answer.","Sparkle sparkle!!","Rarest answer on the list! WOW!"],
  miss:["Nope, not on my list. Try again!","Bonk. Just rock. Try another!","Not that one. Keep guessing!","Nothing down there. Another?","Clock's running! Try again!","Hmm, no. But you've got time!","Shake it off. Next guess!"],
  missmany:["Keep swinging!","Think sideways!","Any of the obvious ones? Even Gravel beats nothing!","Try the first thing that pops into your head!"],
  vague:["Which one, though? Be specific!","Narrow it down for me!","Close! Which one do you mean?"],
  known:["That's real! Just not on this list.","True, but not on my list. Try another!"],
  suggest:["Ooh, I think I know what you mean.","Is that what you meant?","Close enough to ask!"],
  dry:["Hmm. Nothing down there.","Dry hole. Happens to the best moles.","That's not on my list…","Rocks. Just rocks.","Bonk. That's not it."],
  timeup:["zzz… oh! Did we dig?","Time flew. We didn't.","The drill fell asleep. So did I."],
  poke:["Hey! I'm working.","That tickles!","Petting the mole: +0 points.","Have you tried a weirder answer?","Squeak.","I'm a professional.","Careful, I bite. I don't bite.","My hat is load-bearing."],
  endless:["Endless mode! Three drill bits. Don't waste them.","No floor now. Let's see how deep this goes."],
  rewind:["Wheee! Back to the top!","Going up! Hold on to something!"],
  end:["What a hole. I'll be shaking dirt out of my fur for weeks.","Good digging, partner.","That's a hole to be proud of."],
  bit:["Ouch. One drill bit down.","Bit's toast. Careful now."],
  strata:{1:"Clay! Squishy.",2:"Sandstone. Crumbly.",3:"Shale. Flaky, like me.",4:"Limestone! Fossils everywhere!",5:"Granite. Hard hat time.",6:"Gneiss. Nice.",7:"Basalt. Volcanic, baby!",8:"Hot rock. It's getting toasty.",9:"Nobody's ever been here. Not even Kola.",10:"Deep crust. My hat is melting a little.",11:"THE MANTLE?! Okay, now I'm impressed."}
};
const lastLine={};
function pickLine(key){const arr=LINES[key];if(!arr)return"";let i=Math.floor(Math.random()*arr.length);if(arr.length>1&&i===lastLine[key])i=(i+1)%arr.length;lastLine[key]=i;return arr[i];}

const BUB=$("bubble"),BUBT=$("bubbleTxt");
const Mole={
  m:0,surf:1,dig:0,paw:0,hop:0,hv:0,sq:0,mood:"idle",moodUntil:0,blink:0,nextBlink:2,lookX:-1,lookY:0,wave:0,sniff:0,hat:0,fx:[],trail:[],sayUntil:0,sayPri:0,tw:0,hideT:0,nextIdle:7,lastType:-9,
  pos(){const s=moleScale();const xu=W/2+50*s,xs=W/2+96*s,x=xu+(xs-xu)*this.surf;const yu=Y(this.m)-4*s,ys=Y(0)-18*s;return{x,y:yu+(ys-yu)*this.surf+this.hop*s,s};},
  setMood(m,sec){this.mood=m;this.moodUntil=R.t+(sec||2.6);},
  hopUp(v){if(this.hop>=0)this.hv=-(v||260);},
  emote(kind,n){for(let i=0;i<(n||1);i++)this.fx.push({kind,x:-10+(Math.random()-.5)*36,y:-34-Math.random()*8,vx:(Math.random()-.5)*36,vy:-26-Math.random()*30,life:1.5,age:-i*.1,rot:Math.random()*6});},
  say(text,pri,ms){
    pri=pri||1;if(R.t<this.sayUntil&&pri<this.sayPri)return;
    this.sayPri=pri;const dur=ms||(1.8+text.length*.05);this.sayUntil=R.t+dur;
    clearInterval(this.tw);clearTimeout(this.hideT);BUBT.textContent="";BUB.classList.add("show");
    let i=0;const step=()=>{i++;BUBT.textContent=text.slice(0,i);if(i%2===0&&/[a-z]/i.test(text[i-1]))Snd.blip();if(i>=text.length)clearInterval(this.tw);};
    if(REDUCED){BUBT.textContent=text;}else this.tw=setInterval(step,22);
    this.hideT=setTimeout(()=>BUB.classList.remove("show"),dur*1000);
  },
  update(dt){
    const surfT=(R.bit<=.5&&S.phase!=="dive")?1:0;this.surf+=(surfT-this.surf)*(1-Math.exp(-dt*5));
    const prev=this.m,tgt=Math.max(0,R.bit-14/R.cam.z);
    this.m+=(tgt-this.m)*(1-Math.exp(-dt*(S.phase==="dive"?4.2:7)));
    const v=(this.m-prev)/Math.max(dt,1e-4)*R.cam.z;
    const digT=Math.min(1,Math.abs(v)/150)*(1-this.surf);this.dig+=(digT-this.dig)*(1-Math.exp(-dt*6));
    this.paw+=dt*(4+this.dig*22);
    if(this.hop<0||this.hv<0){this.hv+=1150*dt;this.hop+=this.hv*dt;if(this.hop>=0){this.sq=Math.min(.28,this.hv/1500);this.hop=0;this.hv=0;}}
    this.sq*=Math.exp(-dt*9);this.wave=Math.max(0,this.wave-dt);this.sniff=Math.max(0,this.sniff-dt);this.hat=Math.max(0,this.hat-dt);
    this.nextBlink-=dt;if(this.nextBlink<=0){this.blink=.13;this.nextBlink=1.8+Math.random()*3.6;}if(this.blink>0)this.blink-=dt;
    if(this.mood!=="idle"&&R.t>this.moodUntil)this.mood="idle";
    const lx=S.phase==="play"?-.4:-1,ly=S.phase==="play"?-.9:(S.phase==="dive"?.6:0);this.lookX+=(lx-this.lookX)*.08;this.lookY+=(ly-this.lookY)*.08;
    if(this.surf<.5){const last=this.trail[this.trail.length-1],step=5/R.cam.z;if(!last||this.m-last.m>step)this.trail.push({m:this.m,dx:Math.sin(this.m*.011+this.trail.length*.9)*4});if(this.trail.length>4000)this.trail.splice(0,1000);}
    this.fx.forEach(f=>{f.age+=dt;if(f.age>0){f.x+=f.vx*dt;f.y+=f.vy*dt;f.vy*=Math.exp(-dt*1.4);}});this.fx=this.fx.filter(f=>f.age<f.life);
    if(S.phase==="play"&&R.t-this.lastType>4){this.nextIdle-=dt;if(this.nextIdle<=0){this.nextIdle=6+Math.random()*7;this.idleAct();}}
    if(this.dig>.35&&Math.random()<dt*24){const p=this.pos();emit({kind:"chip",x:p.x+(Math.random()-.5)*14,m:M(p.y-10*p.s),vx:(Math.random()-.5)*90,vy:-70-Math.random()*90,life:.45,size:1.4+Math.random()*2,col:dirtCol(this.m),grav:1});}
    this.placeBubble();
  },
  idleAct(){
    const r=Math.random();
    if(r<.22){this.wave=1.4;}else if(r<.42){this.sniff=1.1;}else if(r<.58){this.hat=1;}else if(r<.72){this.setMood("yawn",1.3);}else if(r<.84){this.hopUp(200);}else{this.setMood("happy",1.5);}
    if(Math.random()<.28)this.say(pickLine("idle"),0);
  },
  placeBubble(){
    if(!BUB.classList.contains("show"))return;const p=this.pos(),bw=BUB.offsetWidth,bh=BUB.offsetHeight;
    let left=clamp(p.x-bw*.32,12,W-bw-12),top=p.y-40*p.s-bh;let below=false;
    if(top<64){top=p.y+30*p.s;below=true;}
    BUB.style.left=left+"px";BUB.style.top=top+"px";BUB.style.setProperty("--tx",clamp(p.x-left-6*p.s,16,bw-16)+"px");BUB.classList.toggle("below",below);
  },
  hit(x,y){const p=this.pos();return Math.hypot(x-p.x,y-p.y)<36*p.s;},
  /* ---- reactions ---- */
  onHole(){this.trail=[];this.say(pickLine("hello"),2);this.hopUp(240);this.setMood("happy",2);},
  onPrompt(first){if(first)return;if(Math.random()<.45)this.say(pickLine("prompt"),0);},
  onType(){this.lastType=R.t;if(this.mood==="idle"||this.mood==="think")this.setMood("think",1.2);},
  onMiss(n,kind){
    this.lastType=R.t;this.setMood(n>=3?"nervous":"meh",1.4);if(n>=2)this.emote("sweat",1);
    const key=kind==="vague"?"vague":kind==="known"?"known":n>=4?"missmany":"miss";
    if(n===1||kind!=="miss"||Math.random()<.45)this.say(pickLine(key),2);
  },
  onSuggest(){this.lastType=R.t;this.setMood("think",2.4);this.sniff=1;if(Math.random()<.5)this.say(pickLine("suggest"),1);},
  onLow(){this.setMood("nervous",4);this.emote("sweat",2);this.say(pickLine("low"),2);},
  onDive(){this.setMood("focus",30);this.say(pickLine("go"),2,1.2);},
  onPass(t){if(Math.random()<.5)this.say(pickLine("pass").replace("{t}",TIERS[t].name),1,1);},
  onBreach(i){if(LINES.strata[i]&&Math.random()<.75)this.say(LINES.strata[i],2);},
  onLandmark(l){this.say(l.q||("Passed "+l.s+"!"),3);this.emote("spark",3);},
  onLand(res){
    if(res.tier<0){if(!(res.misses&&res.misses.length)){this.setMood("sleep",3.5);this.emote("zzz",3);this.say(pickLine("timeup"),4);}else{this.setMood("dizzy",3);this.say(pickLine("dry"),4);}if(S.mode==="endless")setTimeout(()=>this.say(pickLine("bit"),4),1600);return;}
    const t=res.tier;this.say(pickLine("land"+t),4);
    if(t===0){this.setMood("meh",2.8);}
    else if(t===1){this.setMood("happy",2.5);}
    else if(t===2){this.setMood("happy",3);this.hopUp(220);this.emote("spark",3);}
    else if(t===3){this.setMood("wow",3.4);this.hopUp(300);this.emote("spark",6);}
    else{this.setMood("star",4.5);this.hopUp(380);setTimeout(()=>this.hopUp(300),520);this.emote("heart",4);this.emote("spark",10);}
  },
  onEnd(){this.setMood("happy",4);this.hopUp(260);this.say(pickLine("end"),4,4);},
  onPoke(){Snd.squeak();this.hopUp(240);this.setMood(Math.random()<.5?"wow":"happy",1.4);this.say(pickLine("poke"),3);if(Math.random()<.4)this.emote("heart",2);},
  /* ---- drawing ---- */
  drawTrail(){
    if(this.trail.length<2)return;const s=moleScale(),x0=W/2+50*s;cx.save();cx.lineCap="round";cx.lineJoin="round";
    const pts=this.trail.filter(p=>{const y=Y(p.m);return y>-60&&y<H+60;});if(pts.length<2){cx.restore();return;}
    const path=()=>{cx.beginPath();pts.forEach((p,i)=>{const y=Y(p.m)-4*s,x=x0+p.dx*s;i?cx.lineTo(x,y):cx.moveTo(x,y);});const yb=Y(this.m)-4*s;cx.lineTo(x0,yb);};
    path();cx.strokeStyle="rgba(10,6,4,.78)";cx.lineWidth=26*s;cx.stroke();path();cx.strokeStyle="rgba(255,225,190,.05)";cx.lineWidth=2;cx.stroke();cx.restore();
  },
  draw(){
    const p=this.pos(),s=p.s,t=R.t,mood=this.mood;
    cx.save();cx.translate(p.x,p.y);
    if(this.surf<.5){cx.save();cx.globalCompositeOperation="lighter";const ang=-Math.PI/2*this.dig*.8;cx.rotate(ang);const bx=-15*s,by=-22*s;const g=cx.createRadialGradient(bx,by,0,bx-60*s,by+20*s,110*s);g.addColorStop(0,"rgba(255,235,170,.16)");g.addColorStop(1,"rgba(255,235,170,0)");cx.fillStyle=g;cx.beginPath();cx.moveTo(bx,by);cx.lineTo(bx-130*s,by-34*s);cx.lineTo(bx-110*s,by+70*s);cx.closePath();cx.fill();cx.restore();}
    cx.rotate(-Math.PI/2*this.dig*.8);cx.scale(s*(1+this.sq),s*(1-this.sq*1.2));
    // back foot + tail
    cx.fillStyle="#e7a3a8";cx.beginPath();cx.ellipse(15,15,5.5,3,0,0,7);cx.fill();cx.beginPath();cx.ellipse(25,5,3.4,2,.5,0,7);cx.fill();
    // body
    const bg=cx.createRadialGradient(-6,-9,3,0,0,28);bg.addColorStop(0,"#8b7b88");bg.addColorStop(.62,"#554751");bg.addColorStop(1,"#2e252d");cx.fillStyle=bg;cx.beginPath();cx.ellipse(0,0,24,18.5,0,0,7);cx.fill();
    cx.strokeStyle="rgba(255,255,255,.09)";cx.lineWidth=1.2;for(let k=0;k<7;k++){const a=-2.7+k*.36;cx.beginPath();cx.moveTo(Math.cos(a)*17,Math.sin(a)*13);cx.lineTo(Math.cos(a)*22,Math.sin(a)*17);cx.stroke();}
    cx.fillStyle="#71616c";cx.beginPath();cx.ellipse(-3,8,14,8,0,0,7);cx.fill();
    // snout + nose
    cx.fillStyle="#7e6e79";cx.beginPath();cx.ellipse(-21,-1,12,8.6,-.08,0,7);cx.fill();
    const sn=this.sniff>0?Math.sin(t*42)*.16:0;cx.save();cx.translate(-33,-2);cx.scale(1+sn,1-sn);cx.fillStyle="#ff8ea4";cx.beginPath();cx.arc(0,0,5.5,0,7);cx.fill();cx.fillStyle="rgba(255,255,255,.75)";cx.beginPath();cx.arc(-1.7,-1.9,1.6,0,7);cx.fill();cx.fillStyle="#c25b70";cx.beginPath();cx.arc(-1.6,1.5,.9,0,7);cx.arc(1.5,1.5,.9,0,7);cx.fill();cx.restore();
    cx.strokeStyle="rgba(255,240,230,.55)";cx.lineWidth=.8;[[-2,-.3],[1,0],[4,.3]].forEach(([dy,a])=>{cx.beginPath();cx.moveTo(-28,dy);cx.lineTo(-45,dy+a*14-1+Math.sin(t*2.2+dy)*.7);cx.stroke();});
    // mouth
    cx.strokeStyle="#2a1b22";cx.fillStyle="#2a1b22";cx.lineWidth=1.3;cx.lineCap="round";
    if(["happy","wow","star"].includes(mood)){cx.beginPath();cx.ellipse(-25,5.2,3.2,mood==="happy"?1.8:2.8,0,0,Math.PI);cx.fill();cx.fillStyle="#f37f97";cx.beginPath();cx.ellipse(-25,6.6,1.8,1,0,0,7);cx.fill();}
    else if(mood==="yawn"){cx.beginPath();cx.ellipse(-25,5.5,2.6,3.4,0,0,7);cx.fill();}
    else if(mood==="meh"||mood==="focus"){cx.beginPath();cx.moveTo(-28,5);cx.lineTo(-22,5);cx.stroke();}
    else if(mood==="dizzy"||mood==="sad"){cx.beginPath();cx.arc(-25,7.5,3,Math.PI*1.15,Math.PI*1.85);cx.stroke();}
    else if(mood==="nervous"){cx.beginPath();cx.moveTo(-29,5.5);for(let k=1;k<=4;k++)cx.lineTo(-29+k*1.8,5.5+(k%2?-1:1));cx.stroke();}
    else if(mood==="sleep"){cx.beginPath();cx.arc(-25,5.5,1.2,0,7);cx.stroke();}
    else{cx.beginPath();cx.arc(-25,3,2.6,Math.PI*.2,Math.PI*.8);cx.stroke();}
    if(["happy","wow","star"].includes(mood)){cx.fillStyle="rgba(255,120,150,.45)";cx.beginPath();cx.ellipse(-16,3,3.6,2.3,0,0,7);cx.fill();}
    // eye
    const ex=-14+this.lookX*1.1,ey=-7.5+this.lookY*1.2;
    if(mood==="star"){cx.save();cx.translate(-14,-7.5);cx.rotate(t*2);star(0,0,4.6,"#ffd75a");cx.restore();}
    else if(mood==="happy"&&this.blink<=0){cx.lineWidth=1.6;cx.strokeStyle="#140c10";cx.beginPath();cx.arc(-14,-6,2.6,Math.PI*1.1,Math.PI*1.9);cx.stroke();}
    else if(mood==="dizzy"){cx.strokeStyle="#140c10";cx.lineWidth=1;cx.beginPath();for(let a=0;a<12;a+=.4){const rr=a*.28;cx.lineTo(-14+Math.cos(a+t*6)*rr,-7.5+Math.sin(a+t*6)*rr);}cx.stroke();}
    else if(this.blink>0||mood==="sleep"||mood==="yawn"){cx.strokeStyle="#140c10";cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-16.5,-7);cx.lineTo(-11.5,-7);cx.stroke();}
    else{const big=mood==="wow"?1.35:1;cx.fillStyle="#140c10";cx.beginPath();cx.ellipse(ex,ey,2.6*big,3.1*big,0,0,7);cx.fill();cx.fillStyle="#fff";cx.beginPath();cx.arc(ex-.9,ey-1.2,.95*big,0,7);cx.fill();
      if(mood==="meh"){cx.fillStyle="#7e6e79";cx.fillRect(ex-3.2,ey-3.6,6.4,3);cx.strokeStyle="#140c10";cx.lineWidth=1;cx.beginPath();cx.moveTo(ex-3,ey-.6);cx.lineTo(ex+3,ey-.6);cx.stroke();}
      if(mood==="nervous"||mood==="focus"){cx.strokeStyle="#140c10";cx.lineWidth=1.2;cx.beginPath();cx.moveTo(ex-3.5,ey-5.5+(mood==="focus"?1:0));cx.lineTo(ex+2.5,ey-4+(mood==="focus"?-1:0));cx.stroke();}}
    // paws
    const paw=(px,py,a)=>{cx.save();cx.translate(px,py);cx.rotate(a);cx.fillStyle="#f2a9ae";cx.beginPath();cx.ellipse(0,0,6.5,4.8,0,0,7);cx.fill();cx.fillStyle="#fbf3ea";for(let k=0;k<4;k++){cx.beginPath();cx.ellipse(-7,-3.3+k*2.2,2.8,1.05,-.15+k*.1,0,7);cx.fill();}cx.restore();};
    const dg=this.dig;
    if(this.wave>0){paw(-8,14,.3);paw(-14+Math.sin(t*14)*2,-8,-2.1+Math.sin(t*14)*.4);}
    else{paw(-15+Math.sin(this.paw)*3*dg,12-Math.cos(this.paw)*2*dg,Math.sin(this.paw)*.8*dg);paw(-7+Math.sin(this.paw+Math.PI)*3*dg,14-Math.cos(this.paw+Math.PI)*2*dg,Math.sin(this.paw+Math.PI)*.8*dg);}
    // hard hat
    cx.save();if(this.hat>0)cx.rotate(Math.sin(this.hat*14)*.12);
    cx.fillStyle="#f6bd3f";cx.beginPath();cx.arc(-3,-14.5,14,Math.PI*1.02,Math.PI*1.98);cx.closePath();cx.fill();
    cx.fillStyle="rgba(255,255,255,.28)";cx.beginPath();cx.ellipse(-8,-23,4,2,-.5,0,7);cx.fill();
    cx.strokeStyle="#d48f22";cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-3,-28);cx.lineTo(-3,-15);cx.stroke();
    cx.fillStyle="#d79524";cx.beginPath();cx.ellipse(-5,-15,18.5,3.3,-.05,0,7);cx.fill();
    cx.fillStyle="#fff4cf";cx.beginPath();cx.arc(-15,-21,3.8,0,7);cx.fill();cx.strokeStyle="#8a6a20";cx.lineWidth=1;cx.stroke();
    cx.restore();
    cx.restore();
    // emotes
    this.fx.forEach(f=>{if(f.age<0)return;const k=f.age/f.life,a=k>.6?1-(k-.6)/.4:1,fx=p.x+f.x*s,fy=p.y+f.y*s;cx.save();cx.globalAlpha=a;
      if(f.kind==="heart"){cx.fillStyle="#ff6b8a";cx.translate(fx,fy);cx.scale(s,s);cx.beginPath();cx.moveTo(0,3);cx.bezierCurveTo(-7,-3,-3,-8,0,-4);cx.bezierCurveTo(3,-8,7,-3,0,3);cx.fill();}
      else if(f.kind==="spark"){cx.globalCompositeOperation="lighter";star(fx,fy,(3+2*Math.sin(f.age*20))*s,"rgba(255,230,140,.95)");}
      else if(f.kind==="sweat"){cx.fillStyle="#8fd3ff";cx.translate(fx+12*s,fy+12*s);cx.scale(s,s);cx.beginPath();cx.moveTo(0,-5);cx.quadraticCurveTo(4,1,0,3);cx.quadraticCurveTo(-4,1,0,-5);cx.fill();}
      else if(f.kind==="zzz"){cx.fillStyle="#e9e2ff";cx.font=`800 ${(11+k*6)*s}px ${FD}`;cx.fillText("z",fx+10*s,fy);}
      cx.restore();});
  }
};
