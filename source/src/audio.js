/* ================= AUDIO: everything is synthesized, nothing is loaded ================= */
const Snd={
  ctx:null,on:true,master:null,noise:null,drill:null,
  init(){
    if(this.ctx){if(this.ctx.state==="suspended")this.ctx.resume();return;}
    try{
      const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
      this.ctx=new C();this.master=this.ctx.createGain();this.master.gain.value=this.on?.6:0;
      const comp=this.ctx.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=4;
      this.master.connect(comp).connect(this.ctx.destination);
      const len=this.ctx.sampleRate*2,b=this.ctx.createBuffer(1,len,this.ctx.sampleRate),d=b.getChannelData(0);
      for(let i=0;i<len;i++)d[i]=Math.random()*2-1;this.noise=b;
    }catch(e){this.ctx=null;}
  },
  setOn(v){this.on=v;if(this.master)this.master.gain.setTargetAtTime(v?.6:0,this.ctx.currentTime,.05);if(!v)this.drillStop();},
  tone(f,dur,o){
    if(!this.ctx||!this.on)return;o=o||{};const c=this.ctx,t=c.currentTime+(o.delay||0);
    const osc=c.createOscillator(),g=c.createGain();osc.type=o.type||"sine";osc.frequency.setValueAtTime(f,t);
    if(o.f2)osc.frequency.exponentialRampToValueAtTime(o.f2,t+dur);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(o.vol||.2,t+(o.att||.006));g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    osc.connect(g).connect(this.master);osc.start(t);osc.stop(t+dur+.05);
  },
  burst(dur,o){
    if(!this.ctx||!this.on)return;o=o||{};const c=this.ctx,t=c.currentTime+(o.delay||0);
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();
    s.buffer=this.noise;f.type=o.type||"lowpass";f.frequency.setValueAtTime(o.freq||800,t);if(o.f2)f.frequency.exponentialRampToValueAtTime(o.f2,t+dur);f.Q.value=o.q||1;
    g.gain.setValueAtTime(o.vol||.3,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    s.connect(f).connect(g).connect(this.master);s.start(t,Math.random()*1.5);s.stop(t+dur+.05);
  },
  drillStart(){
    if(!this.ctx||!this.on||this.drill)return;const c=this.ctx,t=c.currentTime;
    const o1=c.createOscillator(),o2=c.createOscillator(),lfo=c.createOscillator(),lg=c.createGain(),f=c.createBiquadFilter(),g=c.createGain();
    const ns=c.createBufferSource(),nf=c.createBiquadFilter(),ng=c.createGain();
    o1.type="sawtooth";o1.frequency.value=46;o2.type="square";o2.frequency.value=93;
    lfo.type="square";lfo.frequency.value=18;lg.gain.value=.08;
    f.type="lowpass";f.frequency.value=360;f.Q.value=5;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.16,t+.35);
    lfo.connect(lg).connect(g.gain);o1.connect(f);o2.connect(f);f.connect(g).connect(this.master);
    ns.buffer=this.noise;ns.loop=true;nf.type="bandpass";nf.frequency.value=1100;nf.Q.value=.9;
    ng.gain.setValueAtTime(0,t);ng.gain.linearRampToValueAtTime(.05,t+.35);ns.connect(nf).connect(ng).connect(this.master);
    [o1,o2,lfo,ns].forEach(n=>n.start());
    this.drill={o1,o2,f,g,ng,nf,lfo,nodes:[o1,o2,lfo,ns]};
  },
  drillSpeed(v){
    const d=this.drill;if(!d)return;const t=this.ctx.currentTime;v=clamp(v,0,1);
    d.o1.frequency.setTargetAtTime(42+v*78,t,.06);d.o2.frequency.setTargetAtTime(86+v*150,t,.06);
    d.f.frequency.setTargetAtTime(280+v*1500,t,.06);d.nf.frequency.setTargetAtTime(800+v*2600,t,.06);
    d.ng.gain.setTargetAtTime(.03+v*.11,t,.08);d.lfo.frequency.setTargetAtTime(14+v*34,t,.08);
  },
  drillStop(){
    const d=this.drill;if(!d)return;const t=this.ctx.currentTime;
    d.g.gain.cancelScheduledValues(t);d.g.gain.setTargetAtTime(0,t,.07);d.ng.gain.cancelScheduledValues(t);d.ng.gain.setTargetAtTime(0,t,.07);
    d.nodes.forEach(n=>{try{n.stop(t+.6);}catch(e){}});this.drill=null;
  },
  crunch(){this.burst(.12,{freq:400+Math.random()*500,vol:.18});},
  pass(tier){this.tone(520+tier*110,.16,{type:"triangle",vol:.08});this.tone(780+tier*160,.12,{type:"sine",vol:.05,delay:.05});},
  breach(){this.tone(78,.8,{vol:.45,f2:32});this.burst(.6,{freq:500,f2:120,vol:.32});this.burst(.25,{type:"highpass",freq:2500,vol:.08,delay:.02});},
  thunk(){this.tone(150,.4,{vol:.45,f2:42});this.burst(.22,{freq:900,vol:.22});},
  chime(tier){
    const sets=[[392,523],[440,554,659],[523,659,784,1047],[587,740,880,1175,1480],[659,830,988,1319,1661,1976,2637]];
    sets[tier].forEach((f,i)=>{this.tone(f,.55+i*.04,{type:"triangle",vol:.11,delay:i*.075});this.tone(f*2,.3,{type:"sine",vol:.035,delay:i*.075+.01});});
    if(tier===4){for(let i=0;i<10;i++)this.tone(2400+Math.random()*2400,.18,{vol:.03,delay:.45+i*.05});}
  },
  dry(){this.tone(320,.42,{type:"triangle",vol:.2,f2:120});this.tone(210,.6,{type:"triangle",vol:.18,f2:70,delay:.2});this.burst(.5,{freq:300,vol:.12,delay:.1});},
  blip(){if(!this.ctx||!this.on)return;this.tone(560+Math.random()*520,.045,{type:"square",vol:.025});},
  squeak(){this.tone(1100,.12,{vol:.12,f2:1900});this.tone(1500,.1,{vol:.08,f2:2300,delay:.1});},
  tick(low){this.tone(low?1500:1100,.035,{type:"square",vol:.04});},
  landmark(){this.tone(660,.25,{type:"triangle",vol:.1});this.tone(990,.35,{type:"triangle",vol:.1,delay:.1});},
  fanfare(){[523,659,784,1047,784,1047,1319].forEach((f,i)=>this.tone(f,.32,{type:"triangle",vol:.12,delay:i*.11}));},
  whoosh(){this.burst(1.6,{type:"bandpass",freq:300,f2:2400,q:.8,vol:.28});},
  click(){this.tone(900,.03,{type:"square",vol:.03});}
};
