/* ================= WORLD: strata, textures, buried things, sky, rig, lighting, particles ================= */
let W=innerWidth,H=innerHeight,DPR=1;
const cv=$("cv"),cx=cv.getContext("2d");
const lc=document.createElement("canvas"),lx=lc.getContext("2d");
const SAFE={l:0,r:0};

const STRATA=[
  {n:"Topsoil",top:0,c:"#4b3324",d:"#36251a",tex:"soil"},
  {n:"Clay",top:80,c:"#7d4b2f",d:"#5f3822",tex:"clay"},
  {n:"Sandstone",top:450,c:"#a97c4b",d:"#8a6239",tex:"sand"},
  {n:"Shale",top:1300,c:"#5a5661",d:"#45424b",tex:"shale"},
  {n:"Limestone",top:2400,c:"#a19b88",d:"#857f6e",tex:"lime"},
  {n:"Granite",top:3800,c:"#8d7478",d:"#725d61",tex:"granite"},
  {n:"Gneiss",top:5800,c:"#625d73",d:"#4c4859",tex:"gneiss"},
  {n:"Basalt",top:8000,c:"#383c44",d:"#2b2e34",tex:"basalt"},
  {n:"Hot rock",top:10400,c:"#53302a",d:"#3f231e",tex:"hot"},
  {n:"Uncharted",top:12262,c:"#5e2419",d:"#481a12",tex:"magma"},
  {n:"Deep crust",top:20000,c:"#4a1f1b",d:"#381614",tex:"hot"},
  {n:"Mantle",top:35000,c:"#7e2c12",d:"#62210c",tex:"magma"}
];
function stratumIdx(m){let i=STRATA.length-1;while(i>0&&STRATA[i].top>m)i--;return i;}
const LANDMARKS=[
  {m:105.5,s:"Deepest metro station",t:"Arsenalna, Kyiv: the deepest metro station"},
  {m:330,s:"Eiffel Tower",t:"Eiffel Tower, upside down"},
  {m:828,s:"Burj Khalifa",t:"Burj Khalifa, upside down"},
  {m:979,s:"Angel Falls",t:"Angel Falls, top to bottom"},
  {m:1642,s:"Lake Baikal",t:"Lake Baikal: the deepest lake"},
  {m:1800,s:"Grand Canyon",t:"Grand Canyon: about 1.8 km deep"},
  {m:2212,s:"Deepest cave",t:"Veryovkina: the deepest known cave, about 2.2 km"},
  {m:2400,s:"Jinping lab",t:"Jinping lab: about 2.4 km of rock overhead"},
  {m:3688,s:"Average ocean depth",t:"Average depth of the ocean"},
  {m:4000,s:"Deepest mine",t:"Mponeng: the deepest mine, about 4 km"},
  {m:5895,s:"Kilimanjaro",t:"Kilimanjaro, upside down"},
  {m:6961,s:"Aconcagua",t:"Aconcagua, upside down"},
  {m:8849,s:"Mount Everest",t:"Mount Everest, upside down"},
  {m:10935,s:"Mariana Trench",t:"Challenger Deep: bottom of the Mariana Trench"},
  {m:12262,s:"Kola record",t:"Kola Superdeep Borehole: the deepest hole ever drilled",big:true},
  {m:35000,s:"The Moho",t:"The Moho: roughly where continental crust ends"}
];
const tempAt=m=>12+m*.0137;
const darkAt=m=>Math.min(.86,.22+.19*Math.log10(1+Math.max(0,m)/25));
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=amt<0?0:255,p=Math.abs(amt);r=Math.round((f-r)*p+r);g=Math.round((f-g)*p+g);b=Math.round((f-b)*p+b);return`rgb(${r},${g},${b})`;}
const dirtCol=m=>shade(STRATA[stratumIdx(m)].c,.14);

/* camera helpers: world meters ↔ screen px */
const Y=m=>R.cam.a+(m-R.cam.y)*R.cam.z;
const M=y=>R.cam.y+(y-R.cam.a)/R.cam.z;

/* ---------- rock textures: seamless tiles drawn once ---------- */
const TEXP={};
function makeTextures(){
  ["soil","clay","sand","shale","lime","granite","gneiss","basalt","hot","magma"].forEach(k=>{
    const s=320,c=document.createElement("canvas");c.width=c.height=s;const t=c.getContext("2d");const r=rng(hashStr(k)+11);
    const wrap=(x,y,rad,fn)=>{for(const dx of[-s,0,s])for(const dy of[-s,0,s]){const X=x+dx,Yy=y+dy;if(X<-rad||X>s+rad||Yy<-rad||Yy>s+rad)continue;fn(X,Yy);}};
    const speck=(n,a,b,cols)=>{for(let i=0;i<n;i++){const x=r()*s,y=r()*s,rad=a+r()*(b-a),col=cols[Math.floor(r()*cols.length)];t.fillStyle=col;wrap(x,y,rad,(X,Yy)=>{t.beginPath();t.arc(X,Yy,rad,0,7);t.fill();});}};
    const band=(n,a,b,cols,amp,pers)=>{for(let i=0;i<n;i++){const y0=r()*s,w=a+r()*(b-a),ph=r()*6.28,am=amp*r(),p=pers[Math.floor(r()*pers.length)];t.strokeStyle=cols[Math.floor(r()*cols.length)];t.lineWidth=w;for(const dy of[-s,0,s]){t.beginPath();for(let x=0;x<=s;x+=4){const y=y0+dy+Math.sin(x/s*6.2832*p+ph)*am;x?t.lineTo(x,y):t.moveTo(x,y);}t.stroke();}}};
    const DK="rgba(0,0,0,",LT="rgba(255,240,220,";
    if(k==="soil"){speck(1000,.5,1.5,[DK+".3)",LT+".10)",DK+".18)"]);speck(70,1.5,4.2,["rgba(125,98,72,.5)","rgba(68,48,33,.55)"]);}
    if(k==="clay"){band(28,2,9,[LT+".05)",DK+".10)",LT+".035)"],5,[1,2,3]);speck(280,.5,1.2,[DK+".2)",LT+".07)"]);}
    if(k==="sand"){speck(2600,.4,1,[LT+".12)",DK+".16)",LT+".07)"]);for(let b=0;b<5;b++){const y0=r()*s,hg=18+r()*30,dir=r()<.5?1:-1;t.strokeStyle=DK+".10)";t.lineWidth=1;for(let i=0;i<16;i++){const x0=i*s/16+r()*6;for(const dx of[-s,0,s])for(const dy of[-s,0,s]){t.beginPath();t.moveTo(x0+dx,y0+dy);t.lineTo(x0+dx+dir*hg*.9,y0+dy+hg);t.stroke();}}}band(6,1,2,[DK+".12)"],1,[1]);}
    if(k==="shale"){band(72,.6,2.2,[DK+".24)",LT+".06)",DK+".14)"],1.2,[1,2]);for(let i=0;i<170;i++){const x=r()*s,y=r()*s,l=3+r()*10;t.strokeStyle=r()<.5?LT+".08)":DK+".25)";t.lineWidth=1;wrap(x,y,l,(X,Yy)=>{t.beginPath();t.moveTo(X,Yy);t.lineTo(X+l,Yy);t.stroke();});}}
    if(k==="lime"){band(18,3,10,[LT+".06)",DK+".06)"],2,[1]);speck(400,.5,1.3,[DK+".16)",LT+".10)"]);for(let i=0;i<80;i++){const x=r()*s,y=r()*s,rad=1.5+r()*3.5,a=r()*6;t.strokeStyle=LT+".22)";t.lineWidth=1;wrap(x,y,rad,(X,Yy)=>{t.beginPath();t.arc(X,Yy,rad,a,a+2.4);t.stroke();});}}
    if(k==="granite"){const cols=["rgba(236,170,160,.4)","rgba(245,240,235,.36)","rgba(18,14,18,.5)","rgba(150,140,145,.3)"];for(let i=0;i<2300;i++){const x=r()*s,y=r()*s,z=.8+r()*3.6,a=r()*3,hh=z*(.6+r()*.6),col=cols[Math.floor(r()*cols.length)];t.fillStyle=col;wrap(x,y,z,(X,Yy)=>{t.save();t.translate(X,Yy);t.rotate(a);t.fillRect(-z/2,-hh/2,z,hh);t.restore();});}}
    if(k==="gneiss"){band(30,2,9,[LT+".09)",DK+".18)","rgba(230,190,205,.09)"],6,[1,2]);speck(650,.5,1.6,[DK+".25)",LT+".12)"]);}
    if(k==="basalt"){speck(900,.5,1.2,[LT+".06)",DK+".25)"]);for(let i=0;i<270;i++){const x=r()*s,y=r()*s,rad=1+r()*2.4;wrap(x,y,rad+1,(X,Yy)=>{t.fillStyle=DK+".5)";t.beginPath();t.arc(X,Yy,rad,0,7);t.fill();t.strokeStyle=LT+".09)";t.lineWidth=.8;t.beginPath();t.arc(X,Yy,rad,.3,2.8);t.stroke();});}for(let i=0;i<6;i++){const x0=i*s/6+r()*10;t.strokeStyle=DK+".12)";t.lineWidth=1.2;t.beginPath();t.moveTo(x0,0);t.lineTo(x0+(r()-.5)*8,s);t.stroke();}}
    if(k==="hot"||k==="magma"){
      speck(800,.5,1.2,[DK+".3)",LT+".05)"]);
      if(k==="magma")for(let i=0;i<46;i++){const x=r()*s,y=r()*s,rad=8+r()*20;wrap(x,y,rad,(X,Yy)=>{const gr=t.createRadialGradient(X,Yy,0,X,Yy,rad);gr.addColorStop(0,"rgba(255,120,30,.22)");gr.addColorStop(1,"rgba(255,120,30,0)");t.fillStyle=gr;t.beginPath();t.arc(X,Yy,rad,0,7);t.fill();});}
      for(let i=0;i<(k==="magma"?36:24);i++){let x=r()*s,y=r()*s,a=r()*6.28;t.strokeStyle=k==="magma"?"rgba(255,160,60,.42)":"rgba(255,110,40,.3)";t.lineWidth=1.2;t.beginPath();t.moveTo(x,y);for(let j=0;j<12;j++){a+=(r()-.5)*1.2;x+=Math.cos(a)*6;y+=Math.sin(a)*6;t.lineTo(x,y);}t.stroke();}
    }
    TEXP[k]=cx.createPattern(c,"repeat");
  });
}

/* ---------- buried things ---------- */
const CH=60,FCACHE=new Map();
const FT={
  soil:[["pebble",6],["worm",3],["bone",1],["cap",1],["coin",1]],
  clay:[["pebble",5],["worm",2],["boot",1],["coin",1],["pottery",1.2],["bone",1],["toydino",.6],["bottle",1]],
  sand:[["pebble",4],["water",2],["shell",2],["arrow",1],["rock",2]],
  shale:[["rock",3],["trilobite",2],["fishfossil",2],["oil",2],["pyrite",1.5]],
  lime:[["ammonite",3],["shell",2],["cave",1.2],["rock",2],["trilobite",1]],
  granite:[["rock",3],["crystal",2.5],["geode",1.2],["goldvein",1.4]],
  gneiss:[["rock",3],["garnet",2],["crystal",1.5],["goldvein",1]],
  basalt:[["rock",3],["gem",2],["obsidian",1.5],["crystal",1]],
  hot:[["magma",3],["rock",2],["steam",1.5],["gem",1]],
  magma:[["magma",4],["glowcrystal",2],["rock",1],["steam",1]]
};
const EMISSIVE=new Set(["coin","crystal","goldvein","gem","pyrite","magma","glowcrystal","garnet","geode"]);
function wpick(arr,r){let s=0;arr.forEach(a=>s+=a[1]);let x=r()*s;for(const a of arr){x-=a[1];if(x<=0)return a[0];}return arr[0][0];}
function chunk(i){
  let c=FCACHE.get(i);if(c)return c;
  const r=rng(Math.imul(i+7,2654435761)>>>0);const top=i*CH,st=STRATA[stratumIdx(top+CH/2)];const n=r()<.3?0:r()<.72?1:2;c=[];
  for(let k=0;k<n;k++){let x=.04+r()*.92;if(Math.abs(x-.5)<.09)x=x<.5?x-.13:x+.13;c.push({type:wpick(FT[st.tex],r),m:top+r()*CH,x,rot:r()*6.28,sz:.7+r()*.75,j:Array.from({length:8},()=>r()),hue:r(),st});}
  if(FCACHE.size>5000)FCACHE.clear();FCACHE.set(i,c);return c;
}
const SETS=[{m:230,type:"home",x:.72},{m:1150,type:"cart",x:.25},{m:3100,type:"skeleton",x:.7},{m:5000,type:"biggeode",x:.26},{m:9100,type:"pipe",x:.73},{m:13150,type:"dragons",x:.28}];
const EMIT=[],EMF=[];

function poly(pts){cx.beginPath();pts.forEach((p,i)=>i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]));cx.closePath();}
function blob(rad,j,sx,sy){sx=sx||1.3;sy=sy||.85;cx.beginPath();for(let k=0;k<8;k++){const a=k/8*6.2832,rr=rad*(.72+.28*j[k]);const px=Math.cos(a)*rr*sx,py=Math.sin(a)*rr*sy;k?cx.lineTo(px,py):cx.moveTo(px,py);}cx.closePath();}
function star(x,y,s,col){cx.fillStyle=col;cx.beginPath();cx.moveTo(x,y-s);cx.lineTo(x+s*.2,y-s*.2);cx.lineTo(x+s,y);cx.lineTo(x+s*.2,y+s*.2);cx.lineTo(x,y+s);cx.lineTo(x-s*.2,y+s*.2);cx.lineTo(x-s,y);cx.lineTo(x-s*.2,y-s*.2);cx.closePath();cx.fill();}
function magPath(f,r){cx.beginPath();cx.moveTo(-14*r,(f.j[0]-.5)*8*r);cx.bezierCurveTo(-5*r,(f.j[1]-.5)*16*r,5*r,(f.j[2]-.5)*16*r,14*r,(f.j[3]-.5)*8*r);}

function drawFeat(f,x,y,s,em){
  const T=f.type,r=f.sz*s;
  cx.save();cx.translate(x,y);
  if(em){glint(f,r);cx.restore();return;}
  switch(T){
    case"pebble":cx.rotate(f.rot);blob(6*r,f.j);cx.fillStyle=shade(f.st.c,(f.hue-.45)*.5);cx.fill();cx.strokeStyle="rgba(0,0,0,.3)";cx.lineWidth=1;cx.stroke();cx.fillStyle="rgba(255,255,255,.1)";cx.beginPath();cx.ellipse(-2*r,-2*r,3*r,1.4*r,-.3,0,7);cx.fill();break;
    case"rock":cx.rotate(f.rot);blob(15*r,f.j);cx.fillStyle=shade(f.st.c,(f.hue-.5)*.35+.06);cx.fill();cx.strokeStyle="rgba(0,0,0,.35)";cx.lineWidth=1.2;cx.stroke();cx.strokeStyle="rgba(0,0,0,.25)";cx.beginPath();cx.moveTo(-6*r,-2*r);cx.lineTo(-1*r,1*r);cx.lineTo(4*r,0);cx.stroke();cx.fillStyle="rgba(255,255,255,.08)";cx.beginPath();cx.ellipse(-5*r,-5*r,8*r,3*r,-.3,0,7);cx.fill();break;
    case"worm":{cx.rotate(f.rot*.3);cx.lineCap="round";const ph=R.t*3+f.hue*9,pt=k=>[(k-6)*2.6*r,Math.sin(k*.7+ph)*2.4*r];cx.strokeStyle="#df858c";cx.lineWidth=3.6*r;cx.beginPath();for(let k=0;k<=12;k++){const p=pt(k);k?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]);}cx.stroke();cx.strokeStyle="#bf6670";cx.lineWidth=3.9*r;cx.beginPath();const a=pt(4),b=pt(5);cx.moveTo(a[0],a[1]);cx.lineTo(b[0],b[1]);cx.stroke();cx.fillStyle="#2a1a1a";const hd=pt(12);cx.beginPath();cx.arc(hd[0]-.6*r,hd[1]-.6*r,.55*r,0,7);cx.fill();break;}
    case"bone":cx.rotate(f.rot);cx.fillStyle="#e6dac2";cx.fillRect(-9*r,-1.8*r,18*r,3.6*r);[[-9,-2],[-9,2],[9,-2],[9,2]].forEach(([a,b])=>{cx.beginPath();cx.arc(a*r,b*r,2.6*r,0,7);cx.fill();});break;
    case"cap":cx.rotate(f.rot);cx.fillStyle="#c9372f";cx.beginPath();for(let k=0;k<20;k++){const a=k/20*6.2832,rr=(k%2?4.2:5)*r;cx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr*.5);}cx.closePath();cx.fill();cx.fillStyle="rgba(255,255,255,.3)";cx.beginPath();cx.ellipse(0,0,2.6*r,1.1*r,0,0,7);cx.fill();break;
    case"coin":cx.rotate(f.rot*.2);cx.fillStyle="#d9a82e";cx.beginPath();cx.ellipse(0,0,5*r,4.2*r,0,0,7);cx.fill();cx.strokeStyle="#8a6614";cx.lineWidth=1;cx.beginPath();cx.ellipse(0,0,3.4*r,2.8*r,0,0,7);cx.stroke();break;
    case"boot":cx.rotate(f.rot*.3);cx.fillStyle="#4d3324";poly([[-6*r,-12*r],[3*r,-12*r],[3*r,-2*r],[11*r,0],[12*r,4*r],[-7*r,4*r]]);cx.fill();cx.fillStyle="#2a1b12";cx.fillRect(-7*r,3*r,19*r,2.2*r);cx.fillStyle="rgba(255,230,190,.25)";for(let k=0;k<4;k++){cx.beginPath();cx.arc(1*r,(-10+k*2.4)*r,.7*r,0,7);cx.fill();}break;
    case"pottery":cx.rotate(f.rot);cx.fillStyle="#b4643c";cx.beginPath();cx.arc(0,8*r,12*r,-2.6,-.5);cx.arc(0,8*r,8*r,-.5,-2.6,true);cx.closePath();cx.fill();cx.strokeStyle="#2b1a12";cx.lineWidth=1.3*r;cx.beginPath();cx.arc(0,8*r,10*r,-2.4,-.7);cx.stroke();break;
    case"toydino":cx.scale(f.hue<.5?1:-1,1);cx.fillStyle="#62b25c";poly([[-10*r,2*r],[-4*r,-2*r],[2*r,-3*r],[6*r,-9*r],[11*r,-9*r],[11*r,-6*r],[7*r,-5*r],[6*r,1*r],[4*r,5*r],[2*r,5*r],[1*r,2*r],[-3*r,2*r],[-4*r,5*r],[-6*r,5*r],[-6*r,2*r]]);cx.fill();cx.fillStyle="#1d1d1d";cx.beginPath();cx.arc(9*r,-7.5*r,.8*r,0,7);cx.fill();break;
    case"bottle":cx.rotate(f.rot);cx.fillStyle="rgba(70,160,110,.75)";cx.beginPath();cx.roundRect(-8*r,-3*r,13*r,6*r,2*r);cx.fill();cx.fillRect(5*r,-1.5*r,5*r,3*r);cx.fillStyle="rgba(255,255,255,.35)";cx.fillRect(-6*r,-2*r,9*r,1*r);break;
    case"shell":cx.rotate(f.rot);cx.fillStyle="#e7d5bb";cx.beginPath();cx.moveTo(0,4*r);cx.arc(0,4*r,9*r,-2.6,-.54);cx.closePath();cx.fill();cx.strokeStyle="rgba(120,90,60,.5)";cx.lineWidth=.8;for(let k=0;k<6;k++){const a=-2.6+k*(2.06/5);cx.beginPath();cx.moveTo(0,4*r);cx.lineTo(Math.cos(a)*9*r,4*r+Math.sin(a)*9*r);cx.stroke();}break;
    case"arrow":cx.rotate(f.rot);cx.fillStyle="#7c7f88";poly([[0,-9*r],[5*r,4*r],[1.5*r,3*r],[1.5*r,6*r],[-1.5*r,6*r],[-1.5*r,3*r],[-5*r,4*r]]);cx.fill();cx.strokeStyle="rgba(255,255,255,.2)";cx.stroke();break;
    case"water":{const w=26*r,h=11*r;const gr=cx.createLinearGradient(0,-h,0,h);gr.addColorStop(0,"#3d86b8");gr.addColorStop(1,"#173b5a");cx.fillStyle=gr;blob(w/1.3,f.j,1.3,.45);cx.fill();cx.strokeStyle="rgba(170,220,255,.35)";cx.lineWidth=1;for(let k=0;k<3;k++){const yy=-h*.3+k*h*.3;cx.beginPath();for(let xx=-w*.7;xx<=w*.7;xx+=3){const py=yy+Math.sin(xx*.25+R.t*2+k)*1.1;xx===-w*.7?cx.moveTo(xx,py):cx.lineTo(xx,py);}cx.stroke();}break;}
    case"trilobite":cx.rotate(f.rot);cx.fillStyle=shade(f.st.c,.28);cx.beginPath();cx.ellipse(0,0,6*r,9*r,0,0,7);cx.fill();cx.strokeStyle="rgba(0,0,0,.3)";cx.lineWidth=.9;for(let k=-3;k<=4;k++){cx.beginPath();cx.moveTo(-5.5*r,k*1.9*r);cx.lineTo(5.5*r,k*1.9*r);cx.stroke();}cx.beginPath();cx.moveTo(-2*r,-8*r);cx.lineTo(-2*r,8*r);cx.moveTo(2*r,-8*r);cx.lineTo(2*r,8*r);cx.stroke();cx.fillStyle=shade(f.st.c,.36);cx.beginPath();cx.ellipse(0,-7*r,6*r,3*r,0,Math.PI,0);cx.fill();break;
    case"fishfossil":cx.rotate(f.rot*.3);cx.strokeStyle="rgba(236,226,206,.6)";cx.lineWidth=1.1;cx.beginPath();cx.moveTo(-12*r,0);cx.lineTo(10*r,0);cx.stroke();for(let k=-4;k<=4;k++){cx.beginPath();cx.moveTo(k*2.2*r,-5*r+Math.abs(k)*.5*r);cx.lineTo(k*2.2*r,5*r-Math.abs(k)*.5*r);cx.stroke();}poly([[10*r,0],[16*r,-4*r],[17*r,3*r]]);cx.stroke();poly([[-12*r,0],[-17*r,-5*r],[-17*r,5*r]]);cx.stroke();break;
    case"oil":{cx.fillStyle="#0c0b10";blob(16*r,f.j,1.4,.6);cx.fill();cx.fillStyle="rgba(140,120,200,.18)";cx.beginPath();cx.ellipse(-4*r,-3*r,9*r,2*r,-.1,0,7);cx.fill();cx.fillStyle="rgba(255,255,255,.15)";for(let k=0;k<3;k++){const ph=(R.t*.6+k/3+f.hue)%1;cx.beginPath();cx.arc((k-1)*6*r,6*r-ph*12*r,1.2*r,0,7);cx.fill();}break;}
    case"pyrite":cx.rotate(f.rot);for(let k=0;k<4;k++){const ox=(f.j[k]-.5)*10*r,oy=(f.j[k+4]-.5)*8*r,z=(2.5+f.j[k]*3)*r;cx.fillStyle="#b8952a";cx.fillRect(ox-z/2,oy-z/2,z,z);cx.fillStyle="#e7c75a";cx.fillRect(ox-z/2,oy-z/2,z,z*.35);}break;
    case"ammonite":{cx.rotate(f.rot);cx.strokeStyle="#d8ccb0";cx.lineWidth=Math.max(1,1.4*Math.min(r,1.8));cx.beginPath();for(let a=0;a<4.5*Math.PI;a+=.2){const rr=1.05*r*Math.exp(a*.18);const px=Math.cos(a)*rr,py=Math.sin(a)*rr;a?cx.lineTo(px,py):cx.moveTo(px,py);}cx.stroke();cx.lineWidth=.8;for(let a=2.2*Math.PI;a<4.5*Math.PI;a+=.45){const r1=1.05*r*Math.exp(a*.18),r0=1.05*r*Math.exp((a-2*Math.PI)*.18);cx.beginPath();cx.moveTo(Math.cos(a)*r0,Math.sin(a)*r0);cx.lineTo(Math.cos(a)*r1,Math.sin(a)*r1);cx.stroke();}break;}
    case"cave":{const w=34*r,h=16*r;cx.fillStyle="#120d0c";blob(w/1.3,f.j,1.3,.5);cx.fill();cx.fillStyle=shade(f.st.c,-.15);for(let k=0;k<7;k++){const px=-w*.7+k*w*.23,len=(3+f.j[k]*6)*r;poly([[px-2*r,-h*.35],[px+2*r,-h*.35],[px,-h*.35+len]]);cx.fill();}for(let k=0;k<5;k++){const px=-w*.55+k*w*.27,len=(2+f.j[k+3]*4)*r;poly([[px-2*r,h*.35],[px+2*r,h*.35],[px,h*.35-len]]);cx.fill();}cx.fillStyle="rgba(60,130,170,.45)";cx.beginPath();cx.ellipse(0,h*.3,w*.4,2*r,0,0,7);cx.fill();break;}
    case"crystal":case"glowcrystal":{cx.rotate(f.rot*.4-.3);const cols=T==="crystal"?(f.hue<.5?["#f1f4ff","#aab6dc"]:["#dcbcff","#8d61c9"]):(f.hue<.5?["#a8faff","#2fb6c9"]:["#ffa6f2","#b13fa1"]);for(let k=0;k<4;k++){const a=(k-1.5)*.38,Lh=(8+f.j[k]*9)*r,w=(2.2+f.j[k+4]*1.6)*r;cx.save();cx.rotate(a);const gr=cx.createLinearGradient(-w,0,w,0);gr.addColorStop(0,cols[1]);gr.addColorStop(.5,cols[0]);gr.addColorStop(1,cols[1]);cx.fillStyle=gr;poly([[-w,0],[-w,-Lh],[0,-Lh-w*1.4],[w,-Lh],[w,0]]);cx.fill();cx.restore();}break;}
    case"geode":{const R1=13*r;cx.fillStyle=shade(f.st.c,-.1);cx.beginPath();cx.ellipse(0,0,R1*1.2,R1,0,0,7);cx.fill();cx.fillStyle="#3b245a";cx.beginPath();cx.ellipse(0,0,R1*.9,R1*.72,0,0,7);cx.fill();cx.fillStyle="#a77be0";for(let k=0;k<16;k++){const a=k/16*6.2832,ox=Math.cos(a)*R1*.9,oy=Math.sin(a)*R1*.72;poly([[ox,oy],[ox-Math.cos(a+.25)*4*r,oy-Math.sin(a+.25)*4*r],[ox-Math.cos(a-.25)*4*r,oy-Math.sin(a-.25)*4*r]]);cx.fill();}cx.fillStyle="#1a0f2b";cx.beginPath();cx.ellipse(0,0,R1*.45,R1*.32,0,0,7);cx.fill();break;}
    case"goldvein":{cx.rotate(f.rot*.5);cx.lineCap="round";cx.lineJoin="round";cx.strokeStyle="#8a6810";cx.lineWidth=4*r;cx.beginPath();for(let k=0;k<7;k++){const px=(k-3)*6*r,py=(f.j[k]-.5)*8*r;k?cx.lineTo(px,py):cx.moveTo(px,py);}cx.stroke();cx.strokeStyle="#e8bf42";cx.lineWidth=2*r;cx.stroke();break;}
    case"garnet":for(let k=0;k<3;k++){const ox=(f.j[k]-.5)*14*r,oy=(f.j[k+3]-.5)*10*r,z=(2.4+f.j[k+5]*2)*r;cx.fillStyle="#7d1a2a";cx.beginPath();for(let q=0;q<6;q++){const a=q/6*6.2832;cx.lineTo(ox+Math.cos(a)*z,oy+Math.sin(a)*z);}cx.closePath();cx.fill();cx.fillStyle="#d24a5e";cx.beginPath();cx.arc(ox-z*.3,oy-z*.3,z*.35,0,7);cx.fill();}break;
    case"gem":{cx.rotate(f.rot*.2);const z=5*r;cx.fillStyle="#7fe3ff";poly([[0,-z*1.2],[z,0],[0,z*1.3],[-z,0]]);cx.fill();cx.fillStyle="#d9f9ff";poly([[0,-z*1.2],[z*.35,-z*.1],[0,0],[-z*.35,-z*.1]]);cx.fill();cx.fillStyle="#3aa6c8";poly([[0,z*1.3],[z,0],[0,0]]);cx.fill();break;}
    case"obsidian":cx.rotate(f.rot);cx.fillStyle="#0f0f14";poly([[-9*r,-3*r],[2*r,-8*r],[10*r,-1*r],[4*r,6*r],[-6*r,5*r]]);cx.fill();cx.strokeStyle="rgba(170,170,220,.3)";cx.lineWidth=1;cx.beginPath();cx.moveTo(-5*r,-3*r);cx.lineTo(3*r,-6*r);cx.stroke();break;
    case"magma":{cx.rotate(f.rot*.6);cx.lineCap="round";const pulse=.6+.4*Math.sin(R.t*2+f.hue*6);cx.strokeStyle="#5a1a0a";cx.lineWidth=7*r;magPath(f,r);cx.stroke();cx.strokeStyle=`rgb(255,${90+60*pulse|0},20)`;cx.lineWidth=3.2*r;magPath(f,r);cx.stroke();break;}
    case"steam":{cx.strokeStyle="rgba(0,0,0,.5)";cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-6*r,4*r);cx.lineTo(-1*r,0);cx.lineTo(3*r,3*r);cx.lineTo(7*r,-1*r);cx.stroke();for(let k=0;k<4;k++){const ph=(R.t*.5+k/4+f.hue)%1;cx.fillStyle=`rgba(230,220,210,${.18*(1-ph)})`;cx.beginPath();cx.arc(Math.sin(ph*6+k)*3*r,-ph*22*r,(2+ph*6)*r,0,7);cx.fill();}break;}
  }
  cx.restore();
  if(EMISSIVE.has(T)){EMIT.push({x,y,r:(T==="magma"?38:22)*f.sz*s,a:T==="magma"?.75:.42});EMF.push([f,x,y,s]);}
}
function glint(f,r){
  cx.globalCompositeOperation="lighter";const T=f.type,tw=.5+.5*Math.sin(R.t*3+f.hue*20);
  if(T==="magma"){cx.rotate(f.rot*.6);cx.lineCap="round";cx.strokeStyle=`rgba(255,120,40,${.22+.18*tw})`;cx.lineWidth=12*r;magPath(f,r);cx.stroke();}
  else if(T==="glowcrystal"||T==="geode"){const col=T==="geode"?"rgba(170,120,255,":(f.hue<.5?"rgba(120,250,255,":"rgba(255,140,240,");const gr=cx.createRadialGradient(0,0,0,0,0,24*r);gr.addColorStop(0,col+(.32*tw+.1)+")");gr.addColorStop(1,col+"0)");cx.fillStyle=gr;cx.beginPath();cx.arc(0,0,24*r,0,7);cx.fill();}
  else star(0,T==="crystal"?-10*r:0,(3+5*tw)*Math.min(r,2),T==="gem"?"rgba(170,245,255,.9)":T==="garnet"?"rgba(255,120,140,.7)":"rgba(255,235,170,.85)");
}

/* ---------- set pieces: one of each, at fixed depths ---------- */
function drawSet(sp,x,y,s,em){
  const k=s;cx.save();cx.translate(x,y);
  if(sp.type==="home"){
    if(em){lampGlow(22*k,-6*k,40*k,"255,200,120");cx.restore();return;}
    cx.fillStyle="#1b120c";cx.beginPath();cx.ellipse(0,0,60*k,30*k,0,0,7);cx.fill();
    {/* the burrow's tunnel climbs to the surface and stops there, however far up that is on screen */
      const sy=Y(0)-y,tx=-62*k;if(sy<-10*k){cx.strokeStyle="#1b120c";cx.lineWidth=16*k;cx.lineCap="round";cx.beginPath();cx.moveTo(-50*k,-10*k);cx.quadraticCurveTo(-84*k,(sy-10*k)/2,tx,sy);cx.stroke();}}
    cx.fillStyle="#2a1c13";cx.fillRect(-52*k,14*k,104*k,8*k);
    cx.fillStyle="#6d4a32";cx.fillRect(-42*k,6*k,36*k,8*k);cx.fillStyle="#4f7fbf";cx.fillRect(-36*k,1*k,30*k,6*k);cx.fillStyle="#efe6d8";cx.fillRect(-42*k,0,8*k,5*k);
    cx.fillStyle="#c9a24a";cx.fillRect(-6*k,-18*k,15*k,12*k);cx.fillStyle="#7fb2d9";cx.fillRect(-4.5*k,-16.5*k,12*k,9*k);cx.fillStyle="#5a4b52";cx.beginPath();cx.arc(1.5*k,-11*k,2.6*k,0,7);cx.fill();cx.fillStyle="#f6c76a";cx.beginPath();cx.arc(.3*k,-12*k,1.8*k,Math.PI,0);cx.fill();
    cx.fillStyle="#3a2a20";cx.fillRect(21*k,-2*k,2*k,16*k);cx.fillStyle="#f6c76a";poly([[16*k,-2*k],[28*k,-2*k],[25*k,-9*k],[19*k,-9*k]]);cx.fill();
    cx.fillStyle="#8a6a45";cx.fillRect(32*k,-15*k,24*k,10*k);cx.fillStyle="#2a1a10";cx.font=`700 ${Math.max(5,6*k)}px ${FM}`;cx.textAlign="center";cx.fillText("HOME",44*k,-8*k);
    cx.restore();EMIT.push({x:x+22*k,y:y-6*k,r:56*k,a:.85});EMF.push([sp,x,y,s,true]);return;
  }
  if(sp.type==="cart"){
    if(em){lampGlow(52*k,-26*k,34*k,"255,190,110");cx.restore();return;}
    cx.fillStyle="#130e0c";cx.beginPath();cx.roundRect(-110*k,-34*k,220*k,48*k,20*k);cx.fill();
    cx.strokeStyle="#5b4636";cx.lineWidth=2*k;for(let i=-100;i<=100;i+=14){cx.beginPath();cx.moveTo(i*k,10*k);cx.lineTo((i+6)*k,10*k);cx.stroke();}
    cx.strokeStyle="#8d8d93";cx.lineWidth=1.6*k;cx.beginPath();cx.moveTo(-108*k,8*k);cx.lineTo(108*k,8*k);cx.stroke();
    cx.fillStyle="#6b5a4c";poly([[-30*k,-18*k],[18*k,-18*k],[12*k,2*k],[-24*k,2*k]]);cx.fill();cx.strokeStyle="#3b3029";cx.lineWidth=1.4*k;cx.stroke();
    cx.fillStyle="#2b2522";[-16,6].forEach(w=>{cx.beginPath();cx.arc(w*k,4*k,4*k,0,7);cx.fill();});
    cx.fillStyle="#e3b43b";for(let i=0;i<7;i++){cx.beginPath();cx.arc((-22+i*6)*k,(-20-((i*7)%4))*k,3.4*k,0,7);cx.fill();}
    cx.fillStyle="#4a3a2c";cx.fillRect(50*k,-28*k,3*k,38*k);cx.fillStyle="#ffcf7a";cx.beginPath();cx.roundRect(46*k,-34*k,11*k,9*k,2*k);cx.fill();
    cx.restore();EMIT.push({x:x+52*k,y:y-28*k,r:46*k,a:.8});EMF.push([sp,x,y,s,true]);return;
  }
  if(sp.type==="skeleton"){
    if(em){cx.restore();return;}
    const kk=k*1.25;cx.strokeStyle="rgba(232,222,198,.85)";cx.fillStyle="rgba(232,222,198,.85)";cx.lineCap="round";cx.lineJoin="round";
    const sp0=[-110,6],cp=[-10,-40],sp1=[64,-14];const B=t=>[(1-t)*(1-t)*sp0[0]+2*(1-t)*t*cp[0]+t*t*sp1[0],(1-t)*(1-t)*sp0[1]+2*(1-t)*t*cp[1]+t*t*sp1[1]];
    cx.lineWidth=2.6*kk;cx.beginPath();for(let i=0;i<=30;i++){const p=B(i/30);i?cx.lineTo(p[0]*kk,p[1]*kk):cx.moveTo(p[0]*kk,p[1]*kk);}cx.stroke();
    for(let i=2;i<=29;i++){const p=B(i/30);cx.beginPath();cx.arc(p[0]*kk,p[1]*kk,(1.4+(i>12&&i<24?1.1:0))*kk,0,7);cx.fill();}
    cx.lineWidth=1.6*kk;for(let i=14;i<=23;i++){const p=B(i/30);const L=(16-Math.abs(i-18.5)*1.6);cx.beginPath();cx.moveTo(p[0]*kk,p[1]*kk);cx.quadraticCurveTo((p[0]+8)*kk,(p[1]+L*.6)*kk,(p[0]+2)*kk,(p[1]+L)*kk);cx.stroke();}
    cx.save();cx.translate(64*kk,-14*kk);cx.rotate(.12);poly([[0,-4*kk],[22*kk,-10*kk],[38*kk,-6*kk],[42*kk,2*kk],[36*kk,6*kk],[8*kk,8*kk],[-2*kk,4*kk]]);cx.fill();cx.fillStyle="#1a1210";cx.beginPath();cx.arc(16*kk,-4*kk,3*kk,0,7);cx.fill();cx.beginPath();cx.ellipse(28*kk,-2*kk,4*kk,2*kk,0,0,7);cx.fill();cx.fillStyle="rgba(232,222,198,.85)";poly([[4*kk,10*kk],[36*kk,8*kk],[32*kk,14*kk],[8*kk,15*kk]]);cx.fill();for(let i=0;i<6;i++){poly([[(12+i*4)*kk,7*kk],[(14+i*4)*kk,7*kk],[(13+i*4)*kk,10*kk]]);cx.fillStyle="#1a1210";cx.fill();cx.fillStyle="rgba(232,222,198,.85)";}cx.restore();
    cx.lineWidth=3*kk;[[-34,-24,-30,4,-40,26,-30,30],[-20,-26,-12,4,-22,26,-12,30]].forEach(l=>{cx.beginPath();cx.moveTo(l[0]*kk,l[1]*kk);cx.lineTo(l[2]*kk,l[3]*kk);cx.lineTo(l[4]*kk,l[5]*kk);cx.lineTo(l[6]*kk,l[7]*kk);cx.stroke();});
    cx.lineWidth=1.6*kk;cx.beginPath();cx.moveTo(44*kk,-16*kk);cx.lineTo(50*kk,-6*kk);cx.lineTo(54*kk,-8*kk);cx.stroke();
    cx.restore();return;
  }
  if(sp.type==="biggeode"){cx.restore();drawFeat({type:"geode",sz:4,st:STRATA[5],j:[.5,.5,.5,.5,.5,.5,.5,.5],hue:.3,rot:0},x,y,s,em);return;}
  if(sp.type==="pipe"){
    const r=rng(77);const gems=[];for(let i=0;i<22;i++){const t=r();gems.push([(r()-.5)*(60-46*t)*k,t*170*k-80*k,r()]);}
    if(em){cx.globalCompositeOperation="lighter";gems.forEach(g=>star(g[0],g[1],(2+3*(.5+.5*Math.sin(R.t*4+g[2]*20)))*Math.min(k,2),"rgba(170,245,255,.9)"));cx.restore();return;}
    cx.fillStyle="#1d3436";poly([[-36*k,-84*k],[36*k,-84*k],[8*k,96*k],[-8*k,96*k]]);cx.fill();cx.strokeStyle="rgba(120,200,210,.25)";cx.lineWidth=1.5;cx.stroke();
    gems.forEach(g=>{cx.fillStyle="#7fe3ff";cx.save();cx.translate(g[0],g[1]);poly([[0,-3.5*k],[2.8*k,0],[0,3.8*k],[-2.8*k,0]]);cx.fill();cx.restore();});
    cx.fillStyle="rgba(200,240,245,.7)";cx.font=`600 ${Math.max(8,9*k)}px ${FM}`;cx.textAlign="center";cx.fillText("KIMBERLITE PIPE",0,-92*k);
    cx.restore();EMIT.push({x,y,r:90*k,a:.5});EMF.push([sp,x,y,s,true]);return;
  }
  if(sp.type==="dragons"){
    if(em){cx.restore();return;}
    cx.fillStyle="#5b3d24";cx.fillRect(-3*k,-10*k,6*k,46*k);cx.fillStyle="#8a6239";cx.beginPath();cx.roundRect(-58*k,-30*k,116*k,26*k,4*k);cx.fill();cx.strokeStyle="#3d2816";cx.lineWidth=2*k;cx.stroke();
    cx.fillStyle="#2a1708";cx.font=`700 ${Math.max(7,11*k)}px ${FM}`;cx.textAlign="center";cx.fillText("HERE BE DRAGONS",0,-13*k);
    cx.restore();return;
  }
  cx.restore();
}
function lampGlow(x,y,r,rgb){cx.globalCompositeOperation="lighter";const gr=cx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,`rgba(${rgb},.45)`);gr.addColorStop(1,`rgba(${rgb},0)`);cx.fillStyle=gr;cx.beginPath();cx.arc(x,y,r,0,7);cx.fill();}

/* ---------- sky, rig, surface ---------- */
const SKY={stars:[],clouds:[],m1:[],m2:[]};
(function(){const r=rng(42);for(let i=0;i<110;i++)SKY.stars.push([r(),r(),r()*1.3+.4,r()*6]);for(let i=0;i<7;i++)SKY.clouds.push([r(),.18+r()*.45,70+r()*130,3+r()*7,.07+r()*.11]);for(let i=0;i<=48;i++){SKY.m1.push(.4+r()*.45);SKY.m2.push(.2+r()*.35);}})();
function drawSky(){
  const sy=Y(0);if(sy<=0)return;const hh=Math.max(H,760);
  const gr=cx.createLinearGradient(0,sy-hh,0,sy);gr.addColorStop(0,"#0f0c22");gr.addColorStop(.45,"#2b2050");gr.addColorStop(.78,"#8b4566");gr.addColorStop(.93,"#e1875b");gr.addColorStop(1,"#f6b56b");
  cx.fillStyle=gr;cx.fillRect(0,0,W,sy);
  SKY.stars.forEach(s=>{const y=sy-hh*(.42+s[1]*.58);if(y<0||y>sy-140)return;cx.globalAlpha=.35+.35*Math.sin(R.t*1.4+s[3]);cx.fillStyle="#fff";cx.fillRect(s[0]*W,y,s[2],s[2]);});cx.globalAlpha=1;
  const sx=W*.2,su=sy-62;let g2=cx.createRadialGradient(sx,su,0,sx,su,200);g2.addColorStop(0,"rgba(255,200,130,.45)");g2.addColorStop(1,"rgba(255,200,130,0)");cx.fillStyle=g2;cx.fillRect(sx-200,su-200,400,400);
  cx.fillStyle="#ffdba0";cx.beginPath();cx.arc(sx,su,32,0,7);cx.fill();
  SKY.clouds.forEach(c=>{const span=W+360,x=((c[0]*span+R.t*c[3])%span)-180,y=sy-c[1]*Math.min(hh*.8,560),w=c[2];cx.fillStyle=`rgba(255,196,178,${c[4]})`;for(let k=0;k<5;k++){cx.beginPath();cx.ellipse(x+k*w*.19,y+Math.sin(k*1.7)*5,w*.22,w*.1,0,0,7);cx.fill();}});
  const mtn=(arr,h,col)=>{cx.fillStyle=col;cx.beginPath();cx.moveTo(0,sy);for(let i=0;i<arr.length;i++){const x=i/(arr.length-1)*W;cx.lineTo(x,sy-arr[i]*h-(i%2?0:h*.12));}cx.lineTo(W,sy);cx.closePath();cx.fill();};
  mtn(SKY.m1,110,"#3b2b53");mtn(SKY.m2,64,"#271c35");
  if(Math.sin(R.t*.07)>.6){const bx=((R.t*28)%(W+200))-100,by=sy-hh*.3;cx.strokeStyle="rgba(30,20,40,.7)";cx.lineWidth=1.4;for(let i=0;i<3;i++){const fx=bx-i*18,fy=by+i*9,fl=Math.sin(R.t*9+i)*3;cx.beginPath();cx.moveTo(fx-6,fy-fl);cx.lineTo(fx,fy);cx.lineTo(fx+6,fy-fl);cx.stroke();}}
}
function drawGround(){
  const sy=Y(0);if(sy<-30||sy>H+30)return;
  cx.fillStyle="#3c5530";cx.fillRect(0,sy-4,W,7);cx.strokeStyle="#55773f";cx.lineWidth=1.2;cx.beginPath();for(let x=0;x<W;x+=4){const h=3+((x*37)%7);cx.moveTo(x,sy-2);cx.lineTo(x+Math.sin(R.t*1.5+x)*1.2,sy-2-h);}cx.stroke();
  cx.strokeStyle="rgba(28,16,10,.7)";cx.lineWidth=1.3;const r=rng(9);for(let i=0;i<18;i++){const x=r()*W,l=14+r()*40;cx.beginPath();cx.moveTo(x,sy+2);cx.bezierCurveTo(x+(r()-.5)*20,sy+l*.4,x+(r()-.5)*30,sy+l*.7,x+(r()-.5)*20,sy+l);cx.stroke();}
  const mx=W/2+96*moleScale();cx.fillStyle="#4b3324";cx.beginPath();cx.ellipse(mx+4,sy,26*moleScale(),11*moleScale(),0,Math.PI,0);cx.fill();
}
function drawRig(){
  const sy=Y(0);if(sy<-20||sy>H+260)return;const x=W/2,k=clamp(H/820,.72,1.15);
  cx.save();cx.translate(x,sy);cx.scale(k,k);const D="#17110e";cx.fillStyle=D;cx.strokeStyle=D;cx.lineCap="round";cx.lineJoin="round";
  // sign
  cx.fillRect(-176,-30,3,30);cx.fillStyle="#7b5634";cx.fillRect(-200,-46,52,18);cx.fillStyle="#f3dfc0";cx.font=`700 8px ${FM}`;cx.textAlign="center";cx.fillText("BOREHOLE",-174,-34);cx.fillStyle=D;
  // doghouse
  cx.fillRect(48,-46,66,46);poly([[44,-46],[118,-46],[110,-56],[52,-56]]);cx.fill();
  cx.fillStyle="#f7c46c";cx.fillRect(58,-36,12,10);cx.fillRect(78,-36,12,10);cx.fillStyle="#0c0807";cx.fillRect(98,-30,10,30);
  cx.strokeStyle=D;cx.lineWidth=2;cx.beginPath();cx.moveTo(60,-56);cx.lineTo(60,-80);cx.stroke();cx.fillStyle="#e2584a";const fl=Math.sin(R.t*4)*2;poly([[61,-80],[78,-76+fl],[61,-71]]);cx.fill();cx.fillStyle=D;
  // engine + stack
  cx.fillRect(-118,-30,52,30);cx.lineWidth=5;cx.beginPath();cx.moveTo(-108,-30);cx.lineTo(-108,-60);cx.stroke();
  // pipe rack
  cx.strokeStyle="#2c2420";cx.lineWidth=1.6;for(let i=0;i<6;i++){cx.beginPath();cx.arc(-60+i*6.5,-5-(i%2)*5,3,0,7);cx.stroke();}
  // platform + derrick
  cx.fillStyle=D;cx.fillRect(-46,-14,92,14);cx.strokeStyle=D;cx.lineWidth=4;cx.beginPath();cx.moveTo(-38,-14);cx.lineTo(-8,-176);cx.moveTo(38,-14);cx.lineTo(8,-176);cx.stroke();
  const xl=y=>-38+30*((-14-y)/162);const lv=[-40,-70,-100,-128,-154];cx.lineWidth=2.2;cx.beginPath();lv.forEach((y,i)=>{cx.moveTo(xl(y),y);cx.lineTo(-xl(y),y);if(i){const yp=lv[i-1];cx.moveTo(xl(yp),yp);cx.lineTo(-xl(y),y);cx.moveTo(-xl(yp),yp);cx.lineTo(xl(y),y);}});cx.stroke();
  cx.fillRect(-13,-188,26,13);cx.fillStyle=Math.sin(R.t*3)>0?"#ff4d4d":"#4a1414";cx.beginPath();cx.arc(0,-192,3,0,7);cx.fill();
  const ty=-118+(R.spinning?Math.sin(R.t*24)*1.2:0);cx.strokeStyle="#2a2522";cx.lineWidth=1;cx.beginPath();cx.moveTo(-3,-175);cx.lineTo(-3,ty);cx.moveTo(3,-175);cx.lineTo(3,ty);cx.stroke();
  cx.fillStyle=D;cx.fillRect(-9,ty,18,24);if(R.spinning){cx.fillStyle="rgba(245,185,65,.8)";const ph=(R.spin*3)%1;cx.fillRect(-9+ph*14,ty+4,4,16);}
  cx.fillStyle="#5d6168";cx.fillRect(-2.5,ty+24,5,-14-(ty+24));
  cx.restore();
  if(R.spinning&&Math.random()<.35)emit({kind:"smoke",x:x-108*k,m:M(sy-60*k),vx:6+Math.random()*10,vy:-30,life:2.2,size:5,col:"rgba(60,55,60,",grav:-.05});
}
function moleScale(){return clamp(Math.min(W,H)/760,.82,1.25);}

/* ---------- strata ---------- */
function wav(x,i){return Math.sin(x*.012+i*1.7)*.6+Math.sin(x*.031+i*3.1)*.3+Math.sin(x*.07+i)*.1;}
function drawStrata(){
  const mTop=M(0),mBot=M(H);if(mBot<0)return;
  const s=R.cam.z/.35,amp=clamp(R.cam.z*28,3,16),off=Y(0);
  for(let i=0;i<STRATA.length;i++){
    const st=STRATA[i],nt=i+1<STRATA.length?STRATA[i+1].top:1e9;
    if(nt<mTop-400||st.top>mBot+400)continue;
    const yT=Y(st.top),yB=Math.min(H+60,Y(nt)+amp+6);if(yB<-20)continue;
    cx.beginPath();
    if(i===0){cx.moveTo(0,yT);cx.lineTo(W,yT);}else for(let x=0;x<=W+16;x+=16){const y=yT+wav(x,i)*amp;x?cx.lineTo(x,y):cx.moveTo(x,y);}
    cx.lineTo(W,yB);cx.lineTo(0,yB);cx.closePath();
    const gr=cx.createLinearGradient(0,yT,0,Math.max(yT+1,Y(nt)));gr.addColorStop(0,st.c);gr.addColorStop(1,st.d);cx.fillStyle=gr;cx.fill();
    const p=TEXP[st.tex];if(p){p.setTransform(new DOMMatrix([s,0,0,s,0,off]));cx.fillStyle=p;cx.fill();}
    if(i>0){cx.beginPath();for(let x=0;x<=W+16;x+=16){const y=yT+wav(x,i)*amp;x?cx.lineTo(x,y):cx.moveTo(x,y);}cx.strokeStyle="rgba(0,0,0,.4)";cx.lineWidth=2.5;cx.stroke();cx.strokeStyle="rgba(255,235,210,.07)";cx.lineWidth=1;cx.translate(0,3);cx.stroke();cx.translate(0,-3);}
  }
}
function drawFeatures(){
  EMIT.length=0;EMF.length=0;
  const mT=Math.max(0,M(-80)),mB=M(H+80);if(mB<0)return;const fz=clamp(R.cam.z/.22,.5,3.2);
  underground();/* nothing buried may poke up into the sky */
  const i0=Math.floor(mT/CH),i1=Math.floor(mB/CH);const step=Math.max(1,Math.ceil((i1-i0)/240));
  for(let i=i0;i<=i1;i+=step)chunk(i).forEach(f=>drawFeat(f,f.x*W,Y(f.m),fz,false));
  SETS.forEach(sp=>{const y=Y(sp.m);if(y>-500&&y<H+500)drawSet(sp,sp.x*W,y,fz,false);});
  cx.restore();
  /* Digby's front door: a little molehill where the burrow tunnel reaches the surface */
  const home=SETS[0],sy=Y(0);if(sy>-40&&sy<H+40&&Y(home.m)-sy>10*fz)molehill(home.x*W-62*fz,sy,fz);
}
function underground(){cx.save();cx.beginPath();cx.rect(-50,Y(0),W+100,H+100);cx.clip();}
function molehill(x,y,k){
  cx.save();cx.translate(x,y);
  cx.fillStyle="#5b3d28";cx.beginPath();cx.moveTo(-17*k,1);cx.quadraticCurveTo(-11*k,-11*k,0,-11.5*k);cx.quadraticCurveTo(11*k,-11*k,17*k,1);cx.closePath();cx.fill();
  cx.fillStyle="rgba(255,220,180,.12)";cx.beginPath();cx.moveTo(-12*k,-3*k);cx.quadraticCurveTo(-7*k,-10*k,1*k,-10.5*k);cx.quadraticCurveTo(-5*k,-7*k,-8*k,-2*k);cx.closePath();cx.fill();
  cx.fillStyle="#1b120c";cx.beginPath();cx.ellipse(1*k,-1.2*k,6.5*k,3.2*k,0,Math.PI,0);cx.fill();
  cx.fillStyle="#6e4a30";[[-19,0,2.2],[19,-.5,1.8],[-14,-1,1.4],[23,0,1.3]].forEach(([dx,dy,r])=>{cx.beginPath();cx.arc(dx*k,dy*k,r*k,0,7);cx.fill();});
  cx.restore();
}
function drawEmissive(){underground();EMF.forEach(e=>{if(e[4])drawSet(e[0],e[1],e[2],e[3],true);else drawFeat(e[0],e[1],e[2],e[3],true);});cx.restore();}

/* ---------- bore, pipe, bit ---------- */
function drawBore(){
  const x=W/2,sy=Y(0),by=Y(R.bit);if(R.bit<=.01)return;
  const top=Math.max(sy,-20),bot=Math.min(by-6,H+40);if(bot<=top)return;const bw=17;
  cx.fillStyle="#0a0807";cx.fillRect(x-bw/2,top,bw,bot-top);
  cx.fillStyle="rgba(255,225,190,.07)";cx.fillRect(x-bw/2,top,2,bot-top);cx.fillRect(x+bw/2-2,top,2,bot-top);
  const want=30/R.cam.z;const stp=[5,10,20,25,50,100,200,250,500,1000].find(v=>v>=want)||1000;
  cx.fillStyle="rgba(180,170,160,.22)";for(let m=Math.ceil(Math.max(0,M(top))/stp)*stp;m<R.bit;m+=stp){const y=Y(m);if(y>bot)break;cx.fillRect(x-bw/2,y-1,bw,2);}
  const pg=cx.createLinearGradient(x-4,0,x+4,0);pg.addColorStop(0,"#34373c");pg.addColorStop(.45,"#b9bec6");pg.addColorStop(1,"#26292d");cx.fillStyle=pg;cx.fillRect(x-3.5,top,7,bot-top);
  cx.fillStyle="#7d828a";const jstep=stp*2;for(let m=Math.ceil(Math.max(0,M(top))/jstep)*jstep;m<R.bit;m+=jstep){const y=Y(m);if(y>bot)break;cx.fillRect(x-5,y-3,10,6);}
  if(R.spinning){cx.fillStyle="rgba(255,255,255,.18)";const ph=(R.spin*40)%24;for(let y=top-ph;y<bot;y+=24)cx.fillRect(x-3,y,6,3);}
}
function drawBit(){
  const x=W/2,y=Y(R.bit);if(y<-80||y>H+80)return;const s=clamp(Math.min(W,H)/760,.9,1.25),sp=R.spin*6;
  cx.save();cx.translate(x+(R.spinning?(Math.random()-.5)*1.4:0),y);cx.scale(s,s);
  if(R.heat>.02){const g=cx.createRadialGradient(0,-4,0,0,-4,30);g.addColorStop(0,`rgba(255,170,70,${.55*R.heat})`);g.addColorStop(1,"rgba(255,120,40,0)");cx.globalCompositeOperation="lighter";cx.fillStyle=g;cx.beginPath();cx.arc(0,-4,30,0,7);cx.fill();cx.globalCompositeOperation="source-over";}
  const mg=cx.createLinearGradient(-14,0,14,0);mg.addColorStop(0,"#3e4248");mg.addColorStop(.4,"#d4d8de");mg.addColorStop(.6,"#a7adb5");mg.addColorStop(1,"#30343a");
  cx.fillStyle=mg;cx.fillRect(-6.5,-50,13,20);cx.fillStyle="#7d838b";cx.fillRect(-8,-34,16,4);
  cx.fillStyle=mg;poly([[-13,-31],[13,-31],[15,-16],[-15,-16]]);cx.fill();cx.strokeStyle="rgba(0,0,0,.4)";cx.lineWidth=1;cx.stroke();
  cx.fillStyle="#f5b941";cx.fillRect(-15,-19,30,2.2);
  const cone=(cxp,cyp,r,ph)=>{const g=cx.createRadialGradient(cxp-2,cyp-2,1,cxp,cyp,r);g.addColorStop(0,"#9aa0a8");g.addColorStop(1,"#2e3237");cx.fillStyle=g;cx.beginPath();cx.arc(cxp,cyp,r,0,7);cx.fill();for(let k=0;k<10;k++){const a=ph+k*.628;const front=Math.sin(a);if(front<-.3)continue;const tx=cxp+Math.cos(a)*r,ty=cyp+Math.sin(a)*r*.75+r*.2;cx.fillStyle=front>.4?"#eef1f4":"#a9afb7";cx.beginPath();cx.moveTo(tx-1.6,ty-1);cx.lineTo(tx+1.6,ty-1);cx.lineTo(tx+Math.cos(a)*3,ty+2.6);cx.closePath();cx.fill();}};
  cone(-7,-10,7.5,sp);cone(7,-10,7.5,-sp+1);cone(0,-5,6.4,sp*1.3+2);
  cx.restore();
}

/* ---------- lines, pins, landmarks, labels, ruler ---------- */
function wrapLines(text,maxW){const words=text.split(" ");const out=[];let cur="";words.forEach(w=>{const t=cur?cur+" "+w:w;if(cx.measureText(t).width>maxW&&cur){out.push(cur);cur=w;}else cur=t;});if(cur)out.push(cur);return out;}
function drawLandmarks(){
  const pad=Math.max(16,SAFE.l)+2;
  LANDMARKS.forEach(l=>{
    const y=Y(l.m);if(y<-60||y>H+60)return;const passed=R.bit>=l.m-.01;
    if(l.big){cx.save();cx.strokeStyle="rgba(255,96,96,.85)";cx.setLineDash([12,6]);cx.lineWidth=2;cx.shadowColor="#ff5050";cx.shadowBlur=10;cx.beginPath();cx.moveTo(0,y);cx.lineTo(W,y);cx.stroke();cx.restore();
      cx.fillStyle="#ff8a8a";cx.font=`700 12px ${FM}`;cx.textAlign="left";cx.fillText("KOLA SUPERDEEP BOREHOLE · 12,262 m",pad,y-20);cx.font=`500 10.5px ${FM}`;cx.fillStyle="rgba(255,190,190,.85)";cx.fillText("the deepest hole humans have ever drilled",pad,y-7);return;}
    const x2=Math.min(W*.34,W/2-70);cx.strokeStyle=passed?"rgba(255,214,140,.55)":"rgba(244,236,226,.32)";cx.setLineDash([2,4]);cx.lineWidth=1;cx.beginPath();cx.moveTo(pad,y);cx.lineTo(x2,y);cx.stroke();cx.setLineDash([]);
    const narrow=W<640;cx.font=`500 ${narrow?9.5:10.5}px ${FM}`;cx.textAlign="left";cx.fillStyle=passed?"rgba(255,214,140,.92)":"rgba(244,236,226,.66)";
    const lines=wrapLines(narrow?`${l.s} · ${fmt(l.m)} m`:`${l.t} · ${fmt(l.m)} m`,narrow?W/2-pad-26:Math.max(110,W/2-pad-74));lines.forEach((ln,i)=>cx.fillText(ln,pad,y-6-(lines.length-1-i)*13));
  });
}
function drawStrataLabels(){
  const pad=Math.max(16,SAFE.l)+2;cx.textAlign="left";
  STRATA.forEach((st,i)=>{if(!i)return;const y=Y(st.top);if(y<-20||y>H+20)return;if(LANDMARKS.some(l=>{const ly=Y(l.m);return ly>y-6&&ly<y+56;}))return;cx.font=`800 13px ${FD}`;cx.fillStyle="rgba(255,240,222,.5)";cx.fillText(st.n.toUpperCase(),pad,y+20);cx.font=`500 9.5px ${FM}`;cx.fillStyle="rgba(255,240,222,.38)";cx.fillText(fmt(st.top)+" m",pad,y+32);});
}
function drawRuler(){
  const mT=Math.max(0,M(0)),mB=M(H);if(mB<0)return;const want=64/R.cam.z;
  const st=[10,20,25,50,100,200,250,500,1000,2000,2500,5000,10000].find(s=>s>=want)||10000;const x=W-Math.max(10,SAFE.r);
  cx.font=`500 10px ${FM}`;cx.textAlign="right";cx.strokeStyle="rgba(244,236,226,.32)";cx.fillStyle="rgba(244,236,226,.5)";cx.lineWidth=1;
  cx.beginPath();cx.moveTo(x,Math.max(0,Y(0)));cx.lineTo(x,H);cx.stroke();
  const busy=R.lines.map(Ln=>Y(Ln.m));for(let m=Math.floor(mT/st)*st;m<=mB;m+=st){const y=Y(m);cx.beginPath();cx.moveTo(x-12,y);cx.lineTo(x,y);cx.stroke();if(m>0&&!busy.some(b=>Math.abs(b-y)<18))cx.fillText(fmt(m)+" m",x-16,y+3.5);for(let j=1;j<5;j++){const ym=Y(m+st*j/5);cx.beginPath();cx.moveTo(x-5,ym);cx.lineTo(x,ym);cx.stroke();}}
}
function drawLines(){
  const right=W-Math.max(10,SAFE.r)-78;
  R.lines.forEach(Ln=>{
    const age=R.t-Ln.born;if(age<0)return;const y=Y(Ln.m);if(y<-30||y>H+30)return;
    const col=TIERS[Ln.tier].col,a=Math.min(1,age/.45),half=W/2*(1-Math.pow(1-Math.min(1,age/.7),3));
    cx.save();cx.globalAlpha=a*(Ln.hit?1:.62+.38*Ln.flash);cx.strokeStyle=col;cx.lineWidth=Ln.hit?3:1.6;cx.setLineDash(Ln.hit?[]:[9,7]);cx.lineDashOffset=-R.t*14;cx.shadowColor=col;cx.shadowBlur=Ln.hit?20:4+14*Ln.flash;
    cx.beginPath();cx.moveTo(W/2-half,y);cx.lineTo(W/2+half,y);cx.stroke();cx.setLineDash([]);cx.shadowBlur=0;
    cx.textAlign="right";cx.font=`700 ${Ln.hit?14:12}px ${FM}`;cx.fillStyle=col;cx.fillText(`◆ ${TIERS[Ln.tier].name.toUpperCase()}  ${TIERS[Ln.tier].pts}`,right,y-6);
    cx.font=`500 10px ${FM}`;cx.fillStyle="rgba(244,236,226,.6)";cx.fillText(`+${fmt(TIERS[Ln.tier].pts*MPP)} m`,right,y+14);
    cx.restore();Ln.flash*=.93;
  });
}
function drawPins(){
  const x=W/2-16;cx.textAlign="right";
  R.pins.forEach(p=>{const y=Y(p.m);if(y<-20||y>H+20)return;const col=TIERS[p.tier].col;
    cx.fillStyle=col;cx.save();cx.translate(W/2,y);cx.rotate(Math.PI/4);cx.fillRect(-4,-4,8,8);cx.restore();
    cx.strokeStyle=col;cx.globalAlpha=.7;cx.lineWidth=1.5;cx.beginPath();cx.moveTo(W/2-10,y);cx.lineTo(W/2-24,y);cx.stroke();cx.globalAlpha=1;
    cx.font=`600 11px ${FM}`;const label=`${p.round}. ${p.name}`;const maxW=W/2-60;let t=label;while(cx.measureText(t).width>maxW&&t.length>4)t=t.slice(0,-2);if(t!==label)t=t.slice(0,-1)+"…";
    const w=cx.measureText(t).width;cx.fillStyle="rgba(10,8,7,.55)";cx.fillRect(x-14-w-6,y-9,w+12,17);cx.fillStyle=col;cx.fillText(t,x-14,y+4);});
}

/* ---------- light ---------- */
function hole(x,y,r,a){const g=lx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(0,0,0,${a})`);g.addColorStop(.5,`rgba(0,0,0,${a*.6})`);g.addColorStop(1,"rgba(0,0,0,0)");lx.fillStyle=g;lx.beginPath();lx.arc(x,y,r,0,7);lx.fill();}
function drawLight(){
  const sy=Y(0);if(sy>=H)return;
  lx.setTransform(DPR,0,0,DPR,0,0);lx.globalCompositeOperation="source-over";lx.clearRect(0,0,W,H);
  const y0=Math.max(0,sy),m0=Math.max(0,M(y0)),m1=M(H);
  const gr=lx.createLinearGradient(0,y0,0,H);gr.addColorStop(0,`rgba(6,4,8,${darkAt(m0)})`);gr.addColorStop(1,`rgba(6,4,8,${darkAt(m1)})`);lx.fillStyle=gr;lx.fillRect(0,y0,W,H-y0);
  lx.globalCompositeOperation="destination-out";
  const by=Y(R.bit);hole(W/2,by-10,Math.min(W,H)*(R.mode==="dive"?.36:.48),1);
  const mp=Mole.pos();if(Mole.surf<.6)hole(mp.x-26*mp.s,mp.y-4*mp.s,80*mp.s,.6);
  EMIT.forEach(e=>hole(e.x,e.y,e.r,e.a));
  cx.drawImage(lc,0,0,W,H);
  const warm=cx.createRadialGradient(W/2,by-10,0,W/2,by-10,Math.min(W,H)*.35);warm.addColorStop(0,"rgba(255,170,80,.10)");warm.addColorStop(1,"rgba(255,170,80,0)");cx.globalCompositeOperation="lighter";cx.fillStyle=warm;cx.fillRect(0,0,W,H);cx.globalCompositeOperation="source-over";
  if(R.bit>10400){const a=clamp((R.bit-10400)/6000,0,.16);cx.fillStyle=`rgba(255,70,20,${a})`;cx.fillRect(0,y0,W,H-y0);}
}
function drawVignette(){const g=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.75);g.addColorStop(0,"rgba(0,0,0,0)");g.addColorStop(1,"rgba(0,0,0,.42)");cx.fillStyle=g;cx.fillRect(0,0,W,H);}

/* ---------- particles ---------- */
const PART=[];
function emit(o){if(PART.length>1100)return;PART.push(Object.assign({x:0,m:0,vx:0,vy:0,life:1,age:0,size:3,col:"#fff",kind:"chip",rot:0,vr:0,grav:1},o));}
function updateParts(dt){for(let i=PART.length-1;i>=0;i--){const p=PART[i];p.age+=dt;if(p.age>p.life){PART.splice(i,1);continue;}p.vy+=p.grav*600*dt;const drag=p.kind==="dust"||p.kind==="smoke"?2.5:1.2;p.vx*=Math.exp(-dt*drag);if(p.kind==="dust"||p.kind==="smoke")p.vy*=Math.exp(-dt*drag);p.x+=p.vx*dt;p.m+=p.vy*dt/R.cam.z;p.rot+=p.vr*dt;}}
function drawParts(){
  PART.forEach(p=>{const y=Y(p.m);if(y<-40||y>H+40)return;const k=p.age/p.life,fade=k>.65?1-(k-.65)/.35:1;
    if(p.kind==="chip"){cx.save();cx.globalAlpha=fade;cx.translate(p.x,y);cx.rotate(p.rot);cx.fillStyle=p.col;cx.beginPath();cx.moveTo(-p.size,-p.size*.6);cx.lineTo(p.size,-p.size*.3);cx.lineTo(p.size*.2,p.size*.8);cx.closePath();cx.fill();cx.restore();}
    else if(p.kind==="dust"){cx.fillStyle=`rgba(${p.col},${.22*(1-k)})`;cx.beginPath();cx.arc(p.x,y,p.size*(1+k*2.4),0,7);cx.fill();}
    else if(p.kind==="smoke"){cx.fillStyle=p.col+(.32*(1-k))+")";cx.beginPath();cx.arc(p.x,y,p.size*(1+k*3),0,7);cx.fill();}
    else if(p.kind==="spark"){cx.save();cx.globalCompositeOperation="lighter";cx.strokeStyle=p.col;cx.globalAlpha=fade;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(p.x,y);cx.lineTo(p.x-p.vx*.025,y-p.vy*.025);cx.stroke();cx.restore();}
    else if(p.kind==="glitter"){cx.save();cx.globalCompositeOperation="lighter";cx.globalAlpha=fade*(.6+.4*Math.sin(p.age*30+p.rot));star(p.x,y,p.size,p.col);cx.restore();}
    else if(p.kind==="ring"){cx.save();cx.globalCompositeOperation="lighter";cx.strokeStyle=p.col;cx.globalAlpha=(1-k)*.8;cx.lineWidth=3*(1-k)+.5;cx.beginPath();cx.ellipse(p.x,y,p.size+k*p.vx,(p.size+k*p.vx)*.42,0,0,7);cx.stroke();cx.restore();}
  });
}
function debris(n,speed,col,m){m=m===undefined?R.bit:m;for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*2.7,sp=speed*(.4+Math.random());emit({kind:"chip",x:W/2+(Math.random()-.5)*16,m:m-3/R.cam.z,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:.45+Math.random()*.6,size:1.4+Math.random()*3,col,rot:Math.random()*6,vr:(Math.random()-.5)*24});}}
function dust(m,rgb){emit({kind:"dust",x:W/2+(Math.random()-.5)*30,m:(m===undefined?R.bit:m)-6/R.cam.z,vx:(Math.random()-.5)*90,vy:-40-Math.random()*60,life:1+Math.random(),size:6+Math.random()*8,col:rgb||"190,160,130",grav:.02});}
function sparks(n,col){for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*3,sp=250+Math.random()*350;emit({kind:"spark",x:W/2+(Math.random()-.5)*10,m:R.bit-4/R.cam.z,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:.25+Math.random()*.3,col:col||"#ffd27a",grav:.6});}}
function burst(m,col,n,spread){for(let i=0;i<n;i++){const a=Math.random()*6.283,sp=spread*(.3+Math.random());emit({kind:"glitter",x:W/2+Math.cos(a)*6,m,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-spread*.4,life:.8+Math.random()*.9,size:2+Math.random()*4,col,grav:.35,rot:Math.random()*9});}emit({kind:"ring",x:W/2,m,vx:spread*1.1,size:8,life:.7,col,grav:0});}
