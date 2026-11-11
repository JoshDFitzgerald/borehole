// Load the bank in node and report on it.
const fs=require("fs"),path=require("path");
global.document={getElementById:()=>null};
const code=fs.readFileSync(path.join(__dirname,"bank.js"),"utf8")+"\n;module.exports={BANK,SKIPPED,DUPQ,prepQ,matchQ,judge,norm,canonToks};";
const m={exports:{}};new Function("module","document",code)(m,global.document);
const {BANK,SKIPPED,DUPQ,prepQ,matchQ,judge,canonToks}=m.exports;
const byG={},byF={};let tot=0,minN=1e9,small=[];
const collisions=[];
BANK.forEach(b=>{byG[b.grp]=(byG[b.grp]||0)+1;byF[b.fam]=(byF[b.fam]||0)+1;tot+=b.items.length;minN=Math.min(minN,b.items.length);if(b.items.length<8)small.push(b.q+" ("+b.items.length+")");
  const P=prepQ(b);const seen=new Map();P.list.forEach((it,i)=>it.keys.forEach(k=>{if(seen.has(k)&&seen.get(k)!==i)collisions.push(`${b.q}: "${k}" → ${P.list[seen.get(k)].name} / ${it.name}`);else seen.set(k,i);}));
  const names=new Map();b.items.forEach(it=>{const n=it.name.toLowerCase();if(names.has(n))collisions.push(`${b.q}: duplicate item ${it.name}`);names.set(n,1);});
});
const ids=new Set();BANK.forEach(b=>{if(ids.has(b.id))console.log("ID COLLISION",b.q);ids.add(b.id);});
console.log("PROMPTS:",BANK.length,"  answers:",tot,"  avg:",(tot/BANK.length).toFixed(1),"  min:",minN);
console.log("BY GROUP:",JSON.stringify(byG));
console.log("FAMILIES:",Object.keys(byF).length);
if(process.argv.includes("-v")){console.log("FAM COUNTS:",JSON.stringify(byF));}
if(SKIPPED.length)console.log("SKIPPED ("+SKIPPED.length+"):\n  "+SKIPPED.join("\n  "));
if(DUPQ.length)console.log("DUPLICATE PROMPTS:\n  "+DUPQ.join("\n  "));
if(collisions.length)console.log("KEY COLLISIONS ("+collisions.length+"):\n  "+collisions.slice(0,200).join("\n  "));
if(small.length&&process.argv.includes("-s"))console.log("SMALL LISTS:\n  "+small.join("\n  "));
const qi=process.argv.indexOf("-q");if(qi>0){const re=new RegExp(process.argv[qi+1],"i");BANK.filter(b=>re.test(b.q)).forEach(b=>{const P=prepQ(b);console.log("\n"+b.q+" ["+b.fam+"/"+b.grp+"]");[0,1,2,3,4].forEach(t=>console.log("  T"+t+": "+P.list.filter(x=>x.tier===t).map(x=>x.name).join(", ")));});}
/* -t "promptRegex::guess" [more…]: how a guess is judged (exact hit, did-you-mean, vague, miss) */
const ti=process.argv.indexOf("-t");if(ti>0){process.argv.slice(ti+1).filter(a=>a.includes("::")).forEach(a=>{const [qre,guess]=a.split("::");const b=BANK.find(b=>new RegExp(qre,"i").test(b.q));if(!b)return console.log("no prompt",qre);const P=prepQ(b);const j=judge(P,guess);
  console.log((b.q+" ").padEnd(46).slice(0,46),"|",guess.padEnd(24),"→",j.i>=0?(j.sure?"HIT  ":"ASK  ")+P.list[j.i].name+(j.how?" ("+j.how+")":""):j.vague?"VAGUE":j.known?"MISS (real, off-list)":"MISS");});}
