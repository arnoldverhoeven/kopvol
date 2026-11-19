/* KOPVOL, website-concept v4 (sober). Demo: data in localStorage; in productie Supabase. */
const MPA=true;
/* Online reserveren is een instelling in het beheer (DB.settings.reserveOnline, standaard aan). Uit = de pagina Reserveren toont enkel de belknop. */
/* Elke pagina heeft een eigen URL en bevat enkel haar eigen deel. Opzoekingen naar elementen van andere pagina's doen stilletjes niets. */
const NIL=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>"":(k==="value"||k==="textContent"||k==="innerHTML")?"":k==="length"?0:NIL,set:()=>true,apply:()=>NIL,construct:()=>NIL});
const $=(s,r=document)=>r.querySelector(s)||NIL,$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const eur=n=>"€ "+(Number.isInteger(n)?n:n.toFixed(2).replace(".",","));
const DAYS=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],MON=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const hhmm=h=>String(Math.floor(h)).padStart(2,"0")+":"+(h%1?"30":"00");
const uur=h=>Math.floor(h)+"u"+(h%1?"30":"");
const isoOf=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const todayIso=()=>isoOf(new Date());
const dOf=iso=>new Date(iso+"T12:00:00");
function fmtDate(iso){const d=dOf(iso);return DAYS[d.getDay()]+" "+d.getDate()+" "+MON[d.getMonth()]}
function fmtShort(iso){const d=dOf(iso);return d.getDate()+" "+MON[d.getMonth()]}
const uid=()=>Math.random().toString(36).slice(2,9);
const SW=(c="")=>`<svg class="sw ${c}" aria-hidden="true"><use href="#sw"/></svg>`;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),2400)}

/* ============ DATA (demo) ============ */
const PH={draai:"/v4/img/draai.jpg",latte:"/v4/img/latte.jpg",coupe:"/v4/img/coupe.jpg",iced:"/v4/img/iced.jpg",bekers:"/v4/img/bekers.jpg",popup:"/v4/img/popup.jpg"};
const imgOf=e=>e.img?(PH[e.img]||e.img):"";
/* standaard de Google-openingsuren; de eigenaars passen ze aan in het beheer */
const DEFAULT_SETTINGS={hours:{0:[9,16],1:[8,16],2:null,3:[8,16],4:[8,16],5:[8,16],6:[9,16]},closed:[{id:"c1",from:"2026-12-24",to:"2027-01-02",reason:"Kerstvakantie"}],tables:{binnen:4,buiten:4},dur:2,minP:6,maxP:14,reserveOnline:true};
function nextIso(days,wd){const d=new Date();d.setDate(d.getDate()+days);if(wd!=null)while(d.getDay()!==wd)d.setDate(d.getDate()+1);else while(d.getDay()===2)d.setDate(d.getDate()+1);return isoOf(d)}
const SEED_EVENTS=[
 {id:"e1",type:"workshop",img:"draai",title:"Draai je eigen kopje",date:"2026-11-28",time:"10u – 13u",price:65,cap:8,pub:true,desc:"Ilona neemt je mee achter de draaitafel. Je draait twee kopjes, kiest je glazuur en haalt ze drie weken later gebakken op in de bar. Geen ervaring nodig."},
 {id:"e2",type:"workshop",img:"latte",title:"Latte art voor beginners",date:"2026-12-13",time:"16u30 – 18u",price:35,cap:6,pub:true,desc:"Robin leert je melk stomen en een hartje gieten. Veel oefenen, en je drinkt je eigen werk op."},
 {id:"e3",type:"event",img:"coupe",title:"Coupevol: cava na de uren",date:"2026-12-18",time:"18u – 22u",price:25,cap:24,pub:true,desc:"Na vieren ruilen we de koffie voor bubbels. Muziek op de achtergrond en de buurt aan tafel. Je eerste glas zit in je inschrijving."},
 {id:"e4",type:"event",img:"iced",title:"Gastchef aan de bar",date:"2026-12-04",time:"18u30 – 22u",price:55,cap:20,pub:true,desc:"Elke maand nodigt Robin een gastchef uit. Voorbeeldtekst: hier komt wie er kookt en wat er op het menu staat."},
 {id:"e5",type:"event",img:"bekers",title:"Gastchefavond",date:"2026-10-23",time:"18u30 – 22u",price:55,cap:20,pub:true,desc:"Voorbeeldtekst: voorbije events blijven hier staan, met een korte terugblik."}
];
const SEED_REGS=[
 {id:"r1",ev:"e1",name:"Sofie Van den Broeck",email:"sofie.vdb@example.be",n:2,note:"",at:"2026-11-04T19:22:00"},
 {id:"r2",ev:"e1",name:"Thomas Peeters",email:"thomas.p@example.be",n:1,note:"Linkshandig, is dat een probleem?",at:"2026-11-06T08:05:00"},
 {id:"r3",ev:"e3",name:"Nathalie De Wit",email:"nathalie@example.be",n:4,note:"",at:"2026-11-08T21:40:00"},
 {id:"r4",ev:"e2",name:"Karen Maes",email:"karen.maes@example.be",n:2,note:"",at:"2026-11-09T12:12:00"},
 {id:"r5",ev:"e1",name:"Lotte Jacobs",email:"lotte.j@example.be",n:2,note:"",at:"2026-11-10T09:48:00"}
];
const SEED_BOOKINGS=[
 {id:"b1",name:"Familie Janssens",email:"janssens@example.be",phone:"0470 12 34 56",date:nextIso(3),time:"10:00",n:8,area:"binnen",note:"Verjaardag, 2 kinderstoelen",status:"bevestigd",at:"2026-11-10T10:12:00"},
 {id:"b2",name:"Team Studio Noor",email:"hallo@example.be",phone:"0486 65 43 21",date:nextIso(3),time:"12:00",n:6,area:"buiten",note:"",status:"nieuw",at:"2026-11-14T17:40:00"},
 {id:"b3",name:"Els Vermeulen",email:"els.v@example.be",phone:"0495 11 22 33",date:nextIso(6),time:"09:30",n:7,area:"binnen",note:"Ontbijt met collega's",status:"bevestigd",at:"2026-11-15T08:03:00"}
];
const DEFAULT_POPUP={on:false,img:"popup",alt:"Kerstvakantie: KOPVOL is gesloten van 24 december tot en met 2 januari en opent opnieuw op zondag 3 januari om 9u.",from:"2026-11-20",to:"2027-01-02"};
const KEY="kopvol_v9";
let DB=load();
function fresh(){return {events:structuredClone(SEED_EVENTS),regs:structuredClone(SEED_REGS),bookings:structuredClone(SEED_BOOKINGS),settings:structuredClone(DEFAULT_SETTINGS),popup:structuredClone(DEFAULT_POPUP)}}
function load(){try{const d=JSON.parse(localStorage.getItem(KEY));if(d&&d.events&&d.settings&&d.bookings){if(!d.popup)d.popup=structuredClone(DEFAULT_POPUP);return d}}catch(e){}return fresh()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
const S=()=>DB.settings;
const online=()=>S().reserveOnline!==false; /* ontbreekt de instelling (oudere demo-data), dan staat online reserveren aan */

/* ============ NAVIGATIE ============ */
const PAGES={home:"KOPVOL | Koffiebar in Berchem",menu:"Menu | KOPVOL",reserveren:"Reserveren | KOPVOL",workshops:"Workshops | KOPVOL",events:"Events | KOPVOL",contact:"Contact | KOPVOL"};
const ALIAS={bezoek:"contact"}; /* oude links naar /bezoek blijven werken */
const root=document.documentElement,drawer=$("#drawer"),burger=$("#burger");
const applyReserve=()=>{root.dataset.rv=online()?"on":"off"}; /* CSS toont formulier (on) of enkel de belknop (off) */
applyReserve();
function setDrawer(on){drawer.classList.toggle("on",on);burger.setAttribute("aria-expanded",on);root.classList.toggle("nav-open",on);if(on)$("[data-drawer-close]").focus()}
burger.addEventListener("click",()=>setDrawer(true));
drawer.addEventListener("click",e=>{if(e.target.closest("a,[data-drawer-close]"))setDrawer(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(drawer.classList.contains("on")){setDrawer(false);burger.focus()}else if(!$("#adm").hidden&&!$("#dlg").open&&!$("#pop").open)closeAdmin()}});
function route(){
 if(MPA&&root.dataset.page==="home"){const m=/^#\/(menu|reserveren|workshops|events|contact|bezoek)\/?$/.exec(location.hash);if(m){location.replace(location.pathname+(ALIAS[m[1]]||m[1])+"/");return}} /* oude #/pagina-links blijven werken */
 let hp=location.hash.replace(/^#\/?/,"");hp=ALIAS[hp]||hp;
 let p=MPA?(root.dataset.page||"home"):(hp||"home");
 if(hp==="beheer"){openAdmin();if(!MPA)p="home"}
 if(!MPA&&!PAGES[p])p="home";
 if(!MPA)$$(".page").forEach(s=>s.classList.toggle("on",s.dataset.page===p));
 $$("[data-nav]").forEach(a=>{if(a.dataset.nav===p)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
 if(!MPA){root.dataset.page=p;document.title=PAGES[p];scrollTo({top:0,left:0,behavior:"instant"})}
 setDrawer(false);
}
addEventListener("hashchange",route);
/* ============ OPENINGSUREN & SLUITINGEN ============ */
function closureFor(iso){return S().closed.find(c=>c.from<=iso&&iso<=c.to)||null}
function hoursFor(iso){if(closureFor(iso))return null;return S().hours[dOf(iso).getDay()]||null}
function nextOpenDay(fromIso){const d=dOf(fromIso);for(let i=1;i<90;i++){d.setDate(d.getDate()+1);const iso=isoOf(d);if(hoursFor(iso))return iso}return null}
/* tijd in Brussel, ook als de bezoeker in een andere tijdzone zit */
function nowBE(){
 const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Brussels",hour:"numeric",minute:"numeric",year:"numeric",month:"2-digit",day:"2-digit",hour12:false}).formatToParts(new Date()),o={};p.forEach(x=>o[x.type]=x.value);
 const iso=o.year+"-"+o.month+"-"+o.day;return {iso,h:(+o.hour%24)+(+o.minute)/60,dow:dOf(iso).getDay()};
}
function renderHours(){
 const H=S().hours;
 $("#hours").innerHTML=[1,2,3,4,5,6,0].map(d=>`<li><span>${cap(DAYS[d])}</span><b>${H[d]?uur(H[d][0])+" – "+uur(H[d][1]):"Rustdag"}</b></li>`).join("");
 const cl=$("#closures"),t=todayIso(),up=S().closed.filter(c=>c.to>=t).sort((x,y)=>x.from.localeCompare(y.from));
 cl.innerHTML=up.map(c=>`<span>${c.from===c.to?"Gesloten op "+fmtDate(c.from):"Gesloten van "+fmtShort(c.from)+" t.e.m. "+fmtShort(c.to)}${c.reason?" · "+esc(c.reason):""}</span>`).join("");cl.hidden=!up.length;
 renderOpenNow();
}
/* indicator: "Open nu · tot 16u" / "Gesloten · opent morgen om 8u" */
function openState(){
 const n=nowBE(),t=hoursFor(n.iso),c=closureFor(n.iso);
 if(t&&n.h>=t[0]&&n.h<t[1])return {open:true,txt:"Open nu · tot "+uur(t[1])};
 if(t&&n.h<t[0])return {open:false,txt:"Gesloten · opent vandaag om "+uur(t[0])};
 const nx=nextOpenDay(n.iso);
 if(!nx)return {open:false,txt:"Tijdelijk gesloten"};
 const k=Math.round((dOf(nx)-dOf(n.iso))/864e5),when=k===1?"morgen":(c||k>=7)?fmtDate(nx):DAYS[dOf(nx).getDay()];
 return {open:false,txt:"Gesloten · opent "+when+" om "+uur(hoursFor(nx)[0])};
}
function renderOpenNow(){
 let html="";
 try{const s=openState();html=`<span class="ons${s.open?" on":""}"><i aria-hidden="true"></i>${esc(s.txt)}</span>`}catch(e){}
 $$("[data-opennow]").forEach(el=>el.innerHTML=html);
}
setInterval(renderOpenNow,60000);

/* ============ DIALOOG ============ */
const dlg=$("#dlg"),dbox=$("#dlgbox");
const XBTN=`<button class="rb xx x" type="button" data-close aria-label="Sluiten"><i></i><i></i></button>`;
function openDlg(html){dbox.innerHTML=XBTN+html;if(!dlg.open)dlg.showModal();dlg.scrollTop=0}
dlg.addEventListener("click",e=>{if(e.target===dlg||e.target.closest("[data-close]"))dlg.close()});

/* ============ WORKSHOPS ============ */
const taken=id=>DB.regs.filter(r=>r.ev===id).reduce((a,r)=>a+r.n,0);
const typeOf=e=>e.type==="event"?"event":"workshop";
function upcoming(type){const t=todayIso();return DB.events.filter(e=>e.pub&&e.date>=t&&(!type||typeOf(e)===type)).sort((a,b)=>a.date.localeCompare(b.date))}
function pastEvents(type){const t=todayIso();return DB.events.filter(e=>e.pub&&e.date<t&&typeOf(e)===type).sort((a,b)=>b.date.localeCompare(a.date))}
const spots=left=>left<=0?"volzet":left===1?"nog 1 plaats":"nog "+left+" plaatsen";
/* titel, afbeelding, de details van de workshop, dan (met meer witruimte) de datum met daaronder de prijs */
function evCard(e){const left=e.cap-taken(e.id);
 return `<article class="ev rv"><h2>${esc(e.title)}</h2>${imgOf(e)?`<figure class="pic"><img src="${imgOf(e)}" alt="${esc("Affiche: "+e.title+", "+fmtDate(e.date))}" loading="lazy"></figure>`:""}<div class="evb"><p>${esc(e.desc)}</p><p class="when">${esc(fmtDate(e.date))} · ${esc(e.time)}</p><p class="meta">${eur(e.price)} per persoon · ${spots(left)}</p><button class="btn o" type="button" data-signup="${e.id}">${left<=0?"Wachtlijst":"Inschrijven"}</button></div></article>`}
function pastCard(e){return `<article class="pe rv"><span class="tag">Afgelopen</span>${imgOf(e)?`<figure class="pic"><img src="${imgOf(e)}" alt="${esc(e.title)}" loading="lazy"></figure>`:""}<h3>${esc(e.title)}</h3><p class="when">${esc(fmtDate(e.date))} · ${esc(e.time)}</p><p>${esc(e.desc)}</p></article>`}
const emptyMsg=what=>`<p class="empty">Nog even aan het fijnmalen. Nieuwe ${what} verschijnen hier en op <a href="https://www.instagram.com/kopvol.koffiebar/" target="_blank" rel="noopener">@kopvol.koffiebar</a>.</p>`;
function renderEvents(){
 const sep=`<div class="evsep" aria-hidden="true">${SW("spin")}</div>`,ws=upcoming("workshop"),es=upcoming("event"),ps=pastEvents("event");
 $("#evlist").innerHTML=ws.length?ws.map(evCard).join(sep):emptyMsg("workshops");
 $("#evup").innerHTML=es.length?es.map(evCard).join(sep):emptyMsg("events");
 const pp=$("#evpast");pp.innerHTML=ps.length?(es.length?sep:"")+`<h2 id="pasth">Afgelopen events</h2><div class="pg">${ps.map(pastCard).join("")}</div>`:"";pp.hidden=!ps.length;
 watchReveal();
}
function signupDlg(id){
 const e=DB.events.find(x=>x.id===id);if(!e)return;const left=e.cap-taken(id);
 openDlg(`<p class="when">${esc(fmtDate(e.date))} · ${esc(e.time)}</p><h2>${esc(e.title)}</h2><p class="d">${eur(e.price)} per persoon · ${spots(left)}</p>
 <form class="form" id="sform" novalidate>
  <label>Naam<input name="name" autocomplete="name" required></label>
  <label>E-mail<input name="email" type="email" autocomplete="email" required></label>
  <label>Aantal personen<select name="n">${[1,2,3,4].map(n=>`<option value="${n}">${n}</option>`).join("")}</select></label>
  <label>Opmerking (optioneel)<input name="note"></label>
  <p class="err" id="serr" role="alert"></p>
  <button class="btn" type="submit">${left<=0?"Zet me op de wachtlijst":"Inschrijven"}</button>
 </form>`);
 $("#sform").addEventListener("submit",ev=>{ev.preventDefault();const f=ev.target,name=f.name.value.trim(),email=f.email.value.trim(),n=+f.n.value;
  if(name.length<2||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){$("#serr").textContent="Vul je naam en een geldig e-mailadres in.";return}
  const now=e.cap-taken(id);
  if(now>0&&n>now){$("#serr").textContent=now===1?"Er is nog maar 1 plaats vrij.":"Er zijn nog maar "+now+" plaatsen vrij.";return}
  DB.regs.push({id:uid(),ev:id,name,email,n,note:f.note.value.trim(),at:new Date().toISOString(),wait:now<=0});save();renderEvents();
  openDlg(`<div class="ok">${SW()}<h2>${now<=0?"Je staat op de wachtlijst":"Ingeschreven"}</h2><p>${esc(name)}, ${n} ${n===1?"plaats":"plaatsen"} voor ${esc(e.title)} op ${esc(fmtDate(e.date))}. De bevestiging volgt op ${esc(email)}.</p><button class="btn" type="button" data-close>Tot dan</button></div>`)});
}
document.addEventListener("click",e=>{const s=e.target.closest("[data-signup]");if(s)signupDlg(s.dataset.signup)});

/* ============ RESERVEREN ============ */
const hOf=t=>+t.slice(0,2)+(+t.slice(3))/60;
function slotsFor(iso){const t=hoursFor(iso);if(!t)return[];const out=[];for(let h=t[0];h<=t[1]-S().dur+1e-9;h+=.5)out.push(hhmm(h));return out}
function overlaps(b,iso,time){if(b.date!==iso)return false;const d=S().dur,a=hOf(b.time),c=hOf(time);return a<c+d&&a+d>c}
function freeTables(iso,time,area){return S().tables[area]-DB.bookings.filter(b=>b.area===area&&b.status!=="geannuleerd"&&overlaps(b,iso,time)).length}
const bf=$("#bform"),av=$("#avail"),berr=$("#berr");
function fillPersons(){const s=S(),n=bf.n,cur=n.value;n.innerHTML="";for(let i=s.minP;i<=s.maxP;i++)n.add(new Option(i+" personen",i));if(cur&&+cur>=s.minP&&+cur<=s.maxP)n.value=cur;$("#minp").textContent=s.minP}
function fillTimes(){const iso=bf.date.value,time=bf.time,c=iso&&closureFor(iso),sl=iso?slotsFor(iso):[];time.innerHTML="";
 if(!iso){time.add(new Option("Eerst een datum",""));time.disabled=true}
 else if(!sl.length){time.add(new Option(c?"Gesloten: "+c.reason:"Gesloten op deze dag",""));time.disabled=true}
 else{time.disabled=false;sl.forEach(s=>time.add(new Option(uur(hOf(s)),s)))}
 updateAvail()}
function updateAvail(){const iso=bf.date.value,t=bf.time.value,bi=bf.querySelector('[value="binnen"]'),bu=bf.querySelector('[value="buiten"]');
 if(!iso||!t){av.textContent="";bi.disabled=bu.disabled=false;return}
 const fb=freeTables(iso,t,"binnen"),fu=freeTables(iso,t,"buiten"),lab=(x,k)=>x<=0?k+" volzet":k+": nog "+x+(x===1?" tafel":" tafels");
 av.textContent=fb<=0&&fu<=0?"Dit uur is volzet. Kies een ander uur.":lab(fb,"Binnen")+" · "+lab(fu,"Terras");
 bi.disabled=fb<=0;bu.disabled=fu<=0;
 if(fb<=0&&fu>0)bu.checked=true;if(fu<=0&&fb>0)bi.checked=true}
function refreshBooking(){bf.date.min=todayIso();fillPersons();fillTimes();dpSync()}
bf.date.addEventListener("change",fillTimes);bf.time.addEventListener("change",updateAvail);

/* ============ DATEPICKER IN THEMAKLEUR ============ */
const MS=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
const dpSrc=bf.date,dpBtn=$("#dpbtn"),dpTxt=$("#dptxt"),dpPop=$("#dpop"),CHEV='<svg class="ic" aria-hidden="true"><use href="#i-chev"/></svg>';
let dpView=null,dpFocus=null;
const dpMax=()=>{const d=new Date();d.setFullYear(d.getFullYear()+1);return isoOf(d)};
const dpOk=iso=>iso>=todayIso()&&iso<=dpMax()&&!!hoursFor(iso);
function dpSync(){const v=dpSrc.value;let t="Kies een datum";if(v){const d=dOf(v);t=DAYS[d.getDay()].slice(0,2)+" "+d.getDate()+" "+MS[d.getMonth()]+(d.getFullYear()!==new Date().getFullYear()?" "+d.getFullYear():"")}dpTxt.textContent=t;dpTxt.classList.toggle("ph",!v)}
function dpRender(){
 const [y,m]=dpView,lead=(new Date(y,m,1).getDay()+6)%7,days=new Date(y,m+1,0).getDate(),t=todayIso(),sel=dpSrc.value,now=new Date(),minM=now.getFullYear()*12+now.getMonth(),cur=y*12+m;
 let h=`<div class="dph"><button type="button" class="dpn pv" data-dp="prev" aria-label="Vorige maand" ${cur<=minM?"disabled":""}>${CHEV}</button><b aria-live="polite">${MON[m]} ${y}</b><button type="button" class="dpn" data-dp="next" aria-label="Volgende maand" ${cur>=minM+12?"disabled":""}>${CHEV}</button></div><div class="dpg">`;
 h+=["ma","di","wo","do","vr","za","zo"].map(x=>`<span class="wd" aria-hidden="true">${x}</span>`).join("")+"<span></span>".repeat(lead);
 for(let d=1;d<=days;d++){const iso=y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0"),ok=dpOk(iso),future=iso>=t&&iso<=dpMax();
  h+=`<button type="button" data-iso="${iso}" class="${iso===t?"td ":""}${future&&!ok?"cl":""}" tabindex="${iso===dpFocus?0:-1}" aria-label="${fmtDate(iso)}${future&&!ok?", gesloten":""}" ${ok?"":'aria-disabled="true"'} ${iso===sel?'aria-pressed="true"':""}>${d}</button>`}
 dpPop.innerHTML=h+`</div><p class="dpk">Doorgestreepte dagen zijn gesloten.</p>`}
function dpGo(iso,focus){const d=dOf(iso);dpFocus=iso;dpView=[d.getFullYear(),d.getMonth()];dpRender();if(focus){const b=dpPop.querySelector(`[data-iso="${iso}"]`);b&&b.focus()}}
function dpOpen(){const sel=dpSrc.value,t=todayIso(),start=sel||(hoursFor(t)?t:nextOpenDay(t))||t;dpPop.hidden=false;dpBtn.setAttribute("aria-expanded","true");dpGo(start,true)}
function dpClose(back){if(dpPop.hidden)return;dpPop.hidden=true;dpBtn.setAttribute("aria-expanded","false");if(back)dpBtn.focus()}
function dpPick(iso){dpSrc.value=iso;dpSync();dpSrc.dispatchEvent(new Event("change",{bubbles:true}));dpClose(true)}
dpBtn.addEventListener("click",()=>dpPop.hidden?dpOpen():dpClose(true));
dpPop.addEventListener("click",e=>{const n=e.target.closest("[data-dp]"),b=e.target.closest("[data-iso]");
 if(n){const [y,m]=dpView,k=n.dataset.dp==="next"?1:-1,d=new Date(y,m+k,1);dpView=[d.getFullYear(),d.getMonth()];dpFocus=isoOf(d);dpRender();(dpPop.querySelector(`[data-dp="${n.dataset.dp}"]:not([disabled])`)||dpPop.querySelector("[data-dp]:not([disabled])")).focus();return}
 if(b&&b.getAttribute("aria-disabled")!=="true")dpPick(b.dataset.iso)});
dpPop.addEventListener("keydown",e=>{
 if(e.key==="Escape"){e.preventDefault();dpClose(true);return}
 const b=e.target.closest("[data-iso]");if(!b)return;
 const d=dOf(b.dataset.iso),wd=(d.getDay()+6)%7,mv={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7,Home:-wd,End:6-wd}[e.key];
 let to=null;
 if(mv!==undefined){d.setDate(d.getDate()+mv);to=isoOf(d)}
 else if(e.key==="PageUp"||e.key==="PageDown"){d.setMonth(d.getMonth()+(e.key==="PageDown"?1:-1));to=isoOf(d)}
 else return;
 e.preventDefault();
 const lo=todayIso(),hi=dpMax();if(to<lo)to=lo;if(to>hi)to=hi;dpGo(to,true)});
document.addEventListener("click",e=>{const path=e.composedPath();if(!dpPop.hidden&&!path.includes(dpPop)&&!path.includes(dpBtn))dpClose(false)});
addEventListener("hashchange",()=>dpClose(false));
dpSrc.addEventListener("change",dpSync);
bf.addEventListener("submit",e=>{e.preventDefault();berr.textContent="";
 const o={name:bf.name.value.trim(),email:bf.email.value.trim(),phone:bf.phone.value.trim(),date:bf.date.value,time:bf.time.value,n:+bf.n.value,area:bf.area.value,note:bf.note.value.trim()};
 if(!o.date||!o.time){berr.textContent="Kies een datum en een uur.";return}
 if(o.name.length<2||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.email)||o.phone.replace(/\D/g,"").length<8){berr.textContent="Vul je naam, een telefoonnummer en een geldig e-mailadres in.";return}
 if(freeTables(o.date,o.time,o.area)<=0){berr.textContent="Dat uur is net volzet "+(o.area==="binnen"?"binnen":"op het terras")+". Kies een ander uur of de andere plek.";updateAvail();return}
 DB.bookings.push(Object.assign({id:uid(),status:"nieuw",at:new Date().toISOString()},o));save();
 openDlg(`<div class="ok">${SW()}<h2>Aanvraag verstuurd</h2><p>${esc(o.name)}, een tafel voor ${o.n} op ${esc(fmtDate(o.date))} om ${uur(hOf(o.time))}, ${o.area==="binnen"?"binnen":"op het terras"}. Robin of Ilona bevestigt per e-mail op ${esc(o.email)}.</p><button class="btn" type="button" data-close>Tot dan</button></div>`);
 bf.reset();refreshBooking()});

/* ============ BEHEER (mini-CMS) ============ */
const PIN="2600";let admAuth=false,admTab="bookings",editId=null;
const adm=$("#adm"),ab=$("#admbody");
function openAdmin(){adm.hidden=false;root.classList.add("adm-open");renderAdmin();adm.scrollTop=0}
function closeAdmin(){adm.hidden=true;root.classList.remove("adm-open");renderAll()}
function renderAdmin(){
 if(!admAuth){ab.innerHTML=`<div class="box" style="max-width:360px;margin:40px auto"><h3>Inloggen</h3><p class="hint">Demo-pincode: <b>2600</b></p><form class="form" id="pinform"><label>Pincode<input name="pin" inputmode="numeric" maxlength="4" autocomplete="off"></label><p class="err" id="perr" role="alert"></p><button class="btn sm" type="submit">Open beheer</button></form></div>`;
  $("#pinform").addEventListener("submit",e=>{e.preventDefault();if(e.target.pin.value===PIN){admAuth=true;renderAdmin()}else $("#perr").textContent="Foute pincode."});$("#pinform").pin.focus();return}
 const newB=DB.bookings.filter(x=>x.status==="nieuw").length;
 const tab=(k,l)=>`<button type="button" data-at="${k}" aria-current="${admTab===k}">${l}</button>`;
 ab.innerHTML=`<div class="tabs">${tab("bookings","Reservaties"+(newB?" ("+newB+" nieuw)":""))}${tab("workshop","Workshops")}${tab("event","Events")}${tab("regs","Inschrijvingen ("+DB.regs.length+")")}${tab("popup","Pop-up")}${tab("settings","Openingsuren &amp; tafels")}</div><div id="admtab"></div>`;
 $$("[data-at]",ab).forEach(x=>x.addEventListener("click",()=>{admTab=x.dataset.at;editId=null;renderAdmin()}));
 if(admTab==="workshop"||admTab==="event")admEvents(admTab);else ({bookings:admBookings,settings:admSettings,regs:admRegs,popup:admPopup})[admTab]();
}
function csv(name,head,rows){const t=[head,...rows.map(r=>r.map(v=>'"'+String(v==null?"":v).replace(/"/g,'""')+'"').join(";"))].join("\n");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["﻿"+t],{type:"text/csv;charset=utf-8"}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function admBookings(){
 const t=todayIso(),list=DB.bookings.slice().sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)),up=list.filter(x=>x.date>=t),past=list.filter(x=>x.date<t);
 const row=x=>`<tr class="${x.status}"><td><b>${esc(cap(fmtDate(x.date)))}</b><br><small>${esc(x.time)} · ${x.area==="binnen"?"binnen":"terras"}</small></td><td><b>${esc(x.name)}</b><br><small>${x.n} pers.${x.note?" · "+esc(x.note):""}</small></td><td><a href="tel:${esc(x.phone)}">${esc(x.phone)}</a><br><a href="mailto:${esc(x.email)}">${esc(x.email)}</a></td><td><span class="st ${x.status}">${x.status}</span></td><td><div class="acts">${x.status==="nieuw"?`<button class="ib" type="button" data-bok="${x.id}">Bevestig</button>`:""}${x.status!=="geannuleerd"?`<button class="ib" type="button" data-bcancel="${x.id}">Annuleer</button>`:""}<button class="ib" type="button" data-bdel="${x.id}" aria-label="Verwijder">×</button></div></td></tr>`;
 const table=rs=>rs.length?`<div style="overflow-x:auto"><table class="t"><thead><tr><th>Wanneer</th><th>Wie</th><th>Contact</th><th>Status</th><th></th></tr></thead><tbody>${rs.map(row).join("")}</tbody></table></div>`:`<p class="hint">Geen reservaties.</p>`;
 const el=$("#admtab");
 const on=online();
 el.innerHTML=`<div class="box rvbox"><div class="rowh"><div><h3>Online reserveren</h3><p class="hint">${on?"Bezoekers kunnen op de pagina Reserveren zelf een tafel aanvragen. Zet het uit om enkel de belknop (0483 67 13 12) te tonen.":"Uitgeschakeld: de pagina Reserveren toont enkel de belknop 0483 67 13 12. Bestaande reservaties blijven hier staan."}</p></div><button class="swt" type="button" role="switch" aria-checked="${on}" data-rvtoggle><span>${on?"Aan":"Uit"}</span><i aria-hidden="true"></i></button></div></div><div class="box"><div class="rowh"><h3>Komende reservaties</h3><button class="ib" type="button" data-bcsv ${up.length?"":"disabled"}>CSV</button></div><p class="hint">Per tijdslot maximaal ${S().tables.binnen} tafels binnen en ${S().tables.buiten} op het terras. Aanpasbaar bij Openingsuren &amp; tafels.</p>${table(up)}</div><div class="box"><h3>Voorbije reservaties</h3>${table(past)}</div>`;
 el.addEventListener("click",ev=>{const b=ev.target.closest("button");if(!b)return;const find=id=>DB.bookings.find(x=>x.id===id);
  if(b.hasAttribute("data-rvtoggle")){DB.settings.reserveOnline=!online();save();applyReserve();renderAdmin();toast(online()?"Online reserveren staat aan":"Online reserveren staat uit: bezoekers zien de belknop");return}
  if(b.dataset.bok){find(b.dataset.bok).status="bevestigd";save();renderAdmin();toast("Reservatie bevestigd");return}
  if(b.dataset.bcancel){if(confirm("Reservatie annuleren?")){find(b.dataset.bcancel).status="geannuleerd";save();renderAdmin()}return}
  if(b.dataset.bdel){if(confirm("Reservatie definitief verwijderen?")){DB.bookings=DB.bookings.filter(x=>x.id!==b.dataset.bdel);save();renderAdmin()}return}
  if(b.hasAttribute("data-bcsv"))csv("reservaties-kopvol.csv","Datum;Uur;Naam;Personen;Plek;Telefoon;E-mail;Opmerking;Status",up.map(x=>[x.date,x.time,x.name,x.n,x.area,x.phone,x.email,x.note,x.status]))});
}
function admSettings(){
 const s=S(),el=$("#admtab");
 el.innerHTML=`<div class="agrid">
 <div class="box"><h3>Openingsuren</h3><p class="hint">Vink een dag uit voor een vaste rustdag.</p>
  <form class="form" id="hform">
  ${[1,2,3,4,5,6,0].map(d=>`<div class="ohrow"><label class="chk"><input type="checkbox" name="o${d}" ${s.hours[d]?"checked":""}>${cap(DAYS[d])}</label><input type="time" name="f${d}" aria-label="${cap(DAYS[d])} open vanaf" value="${s.hours[d]?hhmm(s.hours[d][0]):"09:00"}" step="1800" ${s.hours[d]?"":"disabled"}><span>tot</span><input type="time" name="t${d}" aria-label="${cap(DAYS[d])} open tot" value="${s.hours[d]?hhmm(s.hours[d][1]):"16:00"}" step="1800" ${s.hours[d]?"":"disabled"}></div>`).join("")}
  <h3 style="margin:14px 0 0">Tafels &amp; reservaties</h3>${online()?"":`<p class="hint">Online reserveren staat uit. Deze instellingen gelden zodra je het weer aanzet.</p>`}
  <div class="two"><label>Tafels binnen<input type="number" name="tb" min="0" max="20" value="${s.tables.binnen}"></label><label>Tafels terras<input type="number" name="tu" min="0" max="20" value="${s.tables.buiten}"></label></div>
  <div class="two"><label>Duur per tafel<select name="dur">${[1,1.5,2,2.5,3].map(x=>`<option value="${x}" ${x===s.dur?"selected":""}>${String(x).replace(".",",")} uur</option>`).join("")}</select></label><label>Reserveren vanaf<input type="number" name="minp" min="1" max="30" value="${s.minP}"></label></div>
  <label>Maximum personen per reservatie<input type="number" name="maxp" min="1" max="60" value="${s.maxP}"></label>
  <p class="err" id="herr" role="alert"></p>
  <button class="btn sm" type="submit">Opslaan</button>
  </form></div>
 <div class="box"><h3>Sluitingsdagen &amp; vakantie</h3><p class="hint">Op deze dagen toont de site dat jullie gesloten zijn${online()?" en kan er niet online gereserveerd worden":""}.</p>
  ${s.closed.length?s.closed.slice().sort((a,b)=>a.from.localeCompare(b.from)).map(c=>`<div class="erow two-c"><div><b>${c.from===c.to?esc(cap(fmtDate(c.from))):esc(fmtShort(c.from))+" t.e.m. "+esc(fmtShort(c.to))+" "+c.to.slice(0,4)}</b><small>${esc(c.reason||"Gesloten")}</small></div><button class="ib" type="button" data-cdel="${c.id}" aria-label="Verwijder">×</button></div>`).join(""):`<p class="hint">Nog geen sluitingsdagen ingepland.</p>`}
  <form class="form" id="cform" style="margin-top:16px">
   <div class="two"><label>Van<input type="date" name="from" required></label><label>Tot en met<input type="date" name="to"></label></div>
   <label>Reden (zichtbaar op de site)<input name="reason" placeholder="bv. Kerstvakantie"></label>
   <p class="err" id="cerr" role="alert"></p>
   <button class="btn o sm" type="submit">Sluitingsdag toevoegen</button>
  </form></div></div>`;
 const hf=$("#hform");
 hf.addEventListener("change",e=>{const m=e.target.name&&e.target.name.match(/^o(\d)$/);if(m)hf["f"+m[1]].disabled=hf["t"+m[1]].disabled=!e.target.checked});
 hf.addEventListener("submit",e=>{e.preventDefault();const hours={};
  for(const d of [0,1,2,3,4,5,6]){if(!hf["o"+d].checked){hours[d]=null;continue}const a=hOf(hf["f"+d].value),b=hOf(hf["t"+d].value);if(!(b>a)){$("#herr").textContent="Het sluitingsuur moet na het openingsuur liggen ("+DAYS[d]+").";return}hours[d]=[a,b]}
  const minP=+hf.minp.value,maxP=+hf.maxp.value;if(!(maxP>=minP)){$("#herr").textContent="Het maximum moet minstens het minimum zijn.";return}
  Object.assign(DB.settings,{hours,tables:{binnen:+hf.tb.value,buiten:+hf.tu.value},dur:+hf.dur.value,minP,maxP});save();toast("Instellingen opgeslagen");renderAdmin()});
 $("#cform").addEventListener("submit",e=>{e.preventDefault();const f=e.target,from=f.from.value,to=f.to.value||from;if(!from){$("#cerr").textContent="Kies een datum.";return}if(to<from){$("#cerr").textContent="'Tot en met' ligt voor 'Van'.";return}
  DB.settings.closed.push({id:uid(),from,to,reason:f.reason.value.trim()});save();toast("Sluitingsdag toegevoegd");renderAdmin()});
 el.addEventListener("click",e=>{const b=e.target.closest("[data-cdel]");if(b){DB.settings.closed=DB.settings.closed.filter(c=>c.id!==b.dataset.cdel);save();renderAdmin()}});
}
const TL={
 workshop:{all:"Alle workshops",new:"Nieuwe workshop",edit:"Workshop bewerken",none:"Nog geen workshops.",added:"Workshop toegevoegd",upd:"Workshop bijgewerkt",ph:"19u – 21u"},
 event:{all:"Alle events",new:"Nieuw event",edit:"Event bewerken",none:"Nog geen events.",added:"Event toegevoegd",upd:"Event bijgewerkt",ph:"18u30 – 22u"}};
/* verkleint een gekozen JPEG of PNG in de browser en geeft een data-URL terug */
function readImage(file,max,done,fail){
 if(!/^image\/(jpeg|png)$/.test(file.type)){fail("Kies een JPEG- of PNG-bestand.");return}
 if(file.size>8e6){fail("De afbeelding is te groot (max. 8 MB).");return}
 const im=new Image(),url=URL.createObjectURL(file);
 im.onerror=()=>{URL.revokeObjectURL(url);fail("Deze afbeelding kon niet gelezen worden.")};
 im.onload=()=>{const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);const g=c.getContext("2d");
  let out;if(file.type==="image/png"){g.drawImage(im,0,0,c.width,c.height);out=c.toDataURL("image/png");if(out.length>1.4e6){g.clearRect(0,0,c.width,c.height);g.fillStyle="#F6F0DF";g.fillRect(0,0,c.width,c.height);g.drawImage(im,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",.85)}}
  else{g.fillStyle="#fff";g.fillRect(0,0,c.width,c.height);g.drawImage(im,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",.85)}
  URL.revokeObjectURL(url);done(out)};
 im.src=url}
function admEvents(T){
 const L=TL[T],today=todayIso(),e=editId?DB.events.find(x=>x.id===editId&&typeOf(x)===T):null,el=$("#admtab"),mine=DB.events.filter(x=>typeOf(x)===T);
 el.innerHTML=`<div class="agrid">
 <div class="box"><h3>${e?L.edit:L.new}</h3><form class="form" id="evform">
  <label>Titel<input name="title" required value="${e?esc(e.title):""}"></label>
  <div class="two"><label>Datum<input name="date" type="date" required value="${e?e.date:""}"></label><label>Uur<input name="time" required value="${e?esc(e.time):""}" placeholder="${L.ph}"></label></div>
  <div class="two"><label>Prijs p.p. (€)<input name="price" type="number" min="0" step="0.5" required value="${e?e.price:""}"></label><label>Plaatsen<input name="cap" type="number" min="1" max="200" required value="${e?e.cap:8}"></label></div>
  <label>Omschrijving<textarea name="desc" required>${e?esc(e.desc):""}</textarea></label>
  <label>Foto<span class="drop" id="drop">${e&&imgOf(e)?`<img src="${imgOf(e)}" alt="">`:`<span>Kies een foto<br>of sleep ze hierheen</span>`}<input type="file" accept="image/jpeg,image/png" name="img" aria-label="Foto kiezen"></span></label>
  <label class="chk"><input type="checkbox" name="pub" ${!e||e.pub?"checked":""}>Zichtbaar op de website</label>
  <p class="err" id="everr" role="alert"></p>
  <div class="acts"><button class="btn sm" type="submit">${e?"Opslaan":"Toevoegen"}</button>${e?`<button class="btn o sm" type="button" data-cancel>Annuleren</button>`:""}</div>
 </form></div>
 <div class="box"><h3>${L.all}</h3>${mine.length?mine.slice().sort((a,b)=>a.date.localeCompare(b.date)).map(x=>`<div class="erow">${imgOf(x)?`<img class="th" src="${imgOf(x)}" alt="">`:`<span class="th"></span>`}<div><b>${esc(x.title)}</b> <span class="st ${x.pub?"live":""}">${x.pub?"Online":"Verborgen"}</span>${x.date<today?' <span class="st">Voorbij</span>':""}<small>${esc(cap(fmtDate(x.date)))} · ${esc(x.time)} · ${eur(x.price)} · ${taken(x.id)}/${x.cap} plaatsen</small></div><div class="acts"><button class="ib" type="button" data-edit="${x.id}">Bewerk</button><button class="ib" type="button" data-toggle="${x.id}">${x.pub?"Verberg":"Toon"}</button><button class="ib" type="button" data-del="${x.id}" aria-label="Verwijder">×</button></div></div>`).join(""):`<p class="hint">${L.none}</p>`}</div></div>`;
 let imgData=e?e.img||"":"";
 const drop=$("#drop"),inp=$("input",drop);
 inp.addEventListener("change",()=>{const fl=inp.files[0];if(!fl)return;
  readImage(fl,1200,d=>{imgData=d;$("#everr").textContent="";drop.innerHTML=`<img src="${imgData}" alt="">`;drop.appendChild(inp)},m=>{$("#everr").textContent=m})});
 $("#evform").addEventListener("submit",ev=>{ev.preventDefault();const f=ev.target,o={type:T,title:f.title.value.trim(),date:f.date.value,time:f.time.value.trim(),price:+f.price.value,cap:+f.cap.value,desc:f.desc.value.trim(),img:imgData,pub:f.pub.checked};
  if(!o.title||!o.date||!o.time||!o.desc||!(o.cap>0)||!(o.price>=0)||f.price.value===""){$("#everr").textContent="Vul alle velden in.";return}
  if(e)Object.assign(e,o);else DB.events.push(Object.assign({id:uid()},o));save();editId=null;renderAdmin();toast(e?L.upd:L.added)});
 el.addEventListener("click",ev=>{const b=ev.target.closest("button");if(!b)return;
  if(b.dataset.edit){editId=b.dataset.edit;renderAdmin();adm.scrollTop=0;return}
  if(b.dataset.toggle){const x=DB.events.find(y=>y.id===b.dataset.toggle);x.pub=!x.pub;save();renderAdmin();return}
  if(b.dataset.del){const x=DB.events.find(y=>y.id===b.dataset.del);if(confirm(`"${x.title}" verwijderen? Ook de inschrijvingen verdwijnen.`)){DB.events=DB.events.filter(y=>y.id!==x.id);DB.regs=DB.regs.filter(r=>r.ev!==x.id);if(editId===x.id)editId=null;save();renderAdmin()}return}
  if(b.hasAttribute("data-cancel")){editId=null;renderAdmin()}});
}
/* pop-up op de startpagina: afbeelding + periode */
function popState(p){const t=todayIso();
 if(!p.img)return {k:"Geen afbeelding gekozen",live:false};
 if(!p.on)return {k:"Uitgeschakeld",live:false};
 if(p.from&&t<p.from)return {k:"Gepland: verschijnt vanaf "+fmtShort(p.from),live:false};
 if(p.to&&t>p.to)return {k:"Verlopen op "+fmtShort(p.to),live:false};
 return {k:"Nu zichtbaar voor bezoekers",live:true}}
function admPopup(){
 const p=DB.popup,el=$("#admtab"),st=popState(p);
 el.innerHTML=`<div class="agrid">
 <div class="box"><h3>Pop-up op de startpagina</h3><p class="hint">Een afbeelding (JPEG of PNG) die bij het openen van de startpagina over de site verschijnt, bijvoorbeeld voor een aankondiging of aangepaste openingsuren. Ze verschijnt één keer per bezoek en enkel tussen de gekozen data.</p>
  <form class="form" id="pform">
   <label>Afbeelding<span class="drop" id="pdrop">${p.img?`<img src="${imgOf(p)}" alt="">`:`<span>Kies een JPEG of PNG<br>of sleep ze hierheen</span>`}<input type="file" accept="image/jpeg,image/png" name="img" aria-label="Afbeelding kiezen"></span></label>
   <label>Beschrijving voor slechtziende bezoekers<input name="alt" maxlength="200" value="${esc(p.alt||"")}" placeholder="bv. Gesloten van 24 december tot 2 januari"></label>
   <div class="two"><label>Tonen vanaf<input type="date" name="from" value="${p.from||""}"></label><label>Tot en met<input type="date" name="to" value="${p.to||""}"></label></div>
   <label class="chk"><input type="checkbox" name="on" ${p.on?"checked":""}>Pop-up actief</label>
   <p class="err" id="perr" role="alert"></p>
   <div class="acts"><button class="btn sm" type="submit">Opslaan</button><button class="btn o sm" type="button" data-ppreview ${p.img?"":"disabled"}>Voorbeeld</button>${p.img?`<button class="btn o sm" type="button" data-pclear>Afbeelding verwijderen</button>`:""}</div>
  </form></div>
 <div class="box"><h3>Status</h3><p><span class="st ${st.live?"live":""}">${esc(st.k)}</span></p>${p.from||p.to?`<p class="hint" style="margin-top:12px">${p.from?"Vanaf "+esc(cap(fmtDate(p.from))):""}${p.from&&p.to?" ":""}${p.to?"t.e.m. "+esc(fmtDate(p.to)):""}</p>`:""}
  <p class="hint" style="margin-top:12px">Bezoekers die de pop-up gesloten hebben, zien ze pas bij een volgend bezoek opnieuw.</p></div></div>`;
 const f=$("#pform"),drop=$("#pdrop"),inp=$("input",drop);let img=p.img;
 inp.addEventListener("change",()=>{const fl=inp.files[0];if(!fl)return;
  readImage(fl,1200,d=>{img=d;$("#perr").textContent="";drop.innerHTML=`<img src="${img}" alt="">`;drop.appendChild(inp);$("[data-ppreview]",el).disabled=false},m=>{$("#perr").textContent=m})});
 const read=()=>({on:f.on.checked,img,alt:f.alt.value.trim(),from:f.from.value,to:f.to.value});
 f.addEventListener("submit",e=>{e.preventDefault();const o=read();
  if(o.on&&!o.img){$("#perr").textContent="Kies eerst een afbeelding.";return}
  if(o.on&&(!o.from||!o.to)){$("#perr").textContent="Kies een start- en einddatum.";return}
  if(o.from&&o.to&&o.to<o.from){$("#perr").textContent="De einddatum ligt voor de startdatum.";return}
  DB.popup=o;try{sessionStorage.removeItem("kopvol_pop")}catch(x){}save();toast("Pop-up opgeslagen");renderAdmin()});
 el.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  if(b.hasAttribute("data-ppreview")){showPop(true,read());return}
  if(b.hasAttribute("data-pclear")){DB.popup=Object.assign(read(),{img:"",on:false});save();renderAdmin()}});
}
function admRegs(){
 const evs=DB.events.slice().sort((a,b)=>a.date.localeCompare(b.date)),el=$("#admtab");
 el.innerHTML=evs.length?evs.map(e=>{const rs=DB.regs.filter(r=>r.ev===e.id).sort((a,b)=>a.at.localeCompare(b.at)),n=rs.reduce((a,r)=>a+r.n,0);
  return `<div class="box"><div class="rowh"><div><h3>${esc(e.title)}</h3><small>${typeOf(e)==="event"?"Event":"Workshop"} · ${esc(cap(fmtDate(e.date)))} · ${n}/${e.cap} plaatsen</small></div><button class="ib" type="button" data-csv="${e.id}" ${rs.length?"":"disabled"}>CSV</button></div>
  ${rs.length?`<div style="overflow-x:auto"><table class="t"><thead><tr><th>Naam</th><th>E-mail</th><th>Pers.</th><th>Opmerking</th><th>Datum</th><th></th></tr></thead><tbody>${rs.map(r=>`<tr><td><b>${esc(r.name)}</b>${r.wait?' <span class="st">wachtlijst</span>':""}</td><td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td><td>${r.n}</td><td>${esc(r.note||"")}</td><td>${new Date(r.at).toLocaleDateString("nl-BE")}</td><td><button class="ib" type="button" data-rdel="${r.id}" aria-label="Verwijder">×</button></td></tr>`).join("")}</tbody></table></div>`:`<p class="hint">Nog geen inschrijvingen.</p>`}</div>`}).join(""):`<p class="hint">Nog geen workshops of events.</p>`;
 el.addEventListener("click",ev=>{const b=ev.target.closest("button");if(!b)return;
  if(b.dataset.rdel){if(confirm("Inschrijving verwijderen?")){DB.regs=DB.regs.filter(r=>r.id!==b.dataset.rdel);save();renderAdmin()}return}
  if(b.dataset.csv){const e=DB.events.find(x=>x.id===b.dataset.csv);csv("inschrijvingen-"+e.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".csv","Naam;E-mail;Personen;Opmerking;Ingeschreven;Wachtlijst",DB.regs.filter(r=>r.ev===e.id).map(r=>[r.name,r.email,r.n,r.note,r.at.slice(0,10),r.wait?"ja":"nee"]))}});
}
document.addEventListener("click",e=>{
 if(e.target.closest("[data-admin]")){openAdmin();return}
 if(e.target.closest("[data-admin-close]")){closeAdmin();return}
 if(e.target.closest("[data-reset]")){if(confirm("Demo-data terugzetten? Eigen workshops, events, reservaties, pop-up en instellingen verdwijnen.")){DB=fresh();save();editId=null;renderAdmin();toast("Demo teruggezet")}}
});

/* ============ POP-UP OP DE STARTPAGINA ============ */
const pop=$("#pop"),popBox=$("#popbox");
function showPop(force,p){
 p=p||DB.popup;if(!p||!p.img)return;
 if(!force){if(!popState(p).live)return;const sig=[p.from,p.to,p.img.length].join("|");try{if(sessionStorage.getItem("kopvol_pop")===sig)return;sessionStorage.setItem("kopvol_pop",sig)}catch(e){}}
 popBox.innerHTML=XBTN+`<img src="${imgOf(p)}" alt="${esc(p.alt||"Mededeling van KOPVOL")}">`;if(!pop.open)pop.showModal();
}
pop.addEventListener("click",e=>{if(e.target===pop||e.target.closest("[data-close]"))pop.close()});

/* ============ ZACHT INFADEN BIJ HET SCROLLEN ============ */
root.classList.add("js");
const rvo="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");rvo.unobserve(x.target)}}),{rootMargin:"0px 0px -8% 0px"}):null;
function watchReveal(){$$(".rv:not(.in)").forEach(el=>rvo?rvo.observe(el):el.classList.add("in"))}

/* ============ STRUCTURED DATA (JSON-LD) ACTUEEL HOUDEN ============ */
const brOff=iso=>{try{const v=new Intl.DateTimeFormat("en",{timeZone:"Europe/Brussels",timeZoneName:"shortOffset"}).formatToParts(dOf(iso)).find(x=>x.type==="timeZoneName").value,m=/GMT([+-])(\d+)/.exec(v);return m[1]+m[2].padStart(2,"0")+":00"}catch(x){return "+01:00"}};
function evTimes(e){const m=/(\d+)u(\d*)\s*[\u2013-]\s*(\d+)u(\d*)/.exec(e.time||""),f=(h,mi)=>e.date+"T"+String(h).padStart(2,"0")+":"+(mi||"00")+":00"+brOff(e.date);return m?[f(m[1],m[2]),f(m[3],m[4])]:[e.date,e.date]}
function syncLD(){
 const bz=document.getElementById("ld-business"),ev=document.getElementById("ld-events");if(!bz)return;
 try{
  const b=JSON.parse(bz.textContent),H=S().hours,P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],sp=[];
  [1,2,3,4,5,6,0].forEach(d=>{if(H[d])sp.push({"@type":"OpeningHoursSpecification",dayOfWeek:P[d],opens:hhmm(H[d][0]),closes:hhmm(H[d][1])})});
  S().closed.filter(c=>c.to>=todayIso()).forEach(c=>sp.push({"@type":"OpeningHoursSpecification",opens:"00:00",closes:"00:00",validFrom:c.from,validThrough:c.to}));
  b.openingHoursSpecification=sp;bz.textContent=JSON.stringify(b);
  if(ev){const url=location.origin+location.pathname;
   ev.textContent=JSON.stringify({"@context":"https://schema.org","@graph":upcoming(root.dataset.page==="events"?"event":"workshop").map(e=>{const t=evTimes(e),im=imgOf(e),left=e.cap-taken(e.id);
    return {"@type":"Event",name:e.title,description:e.desc,startDate:t[0],endDate:t[1],eventStatus:"https://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",
     location:{"@type":"Place",name:b.name,address:b.address},organizer:{"@type":"Organization",name:b.name,url:b.url},image:im&&!im.startsWith("data:")?[new URL(im,location.href).href]:undefined,
     offers:{"@type":"Offer",url,price:String(e.price),priceCurrency:"EUR",availability:left<=0?"https://schema.org/SoldOut":"https://schema.org/InStock"}}})})}
 }catch(x){}
}
function renderAll(){applyReserve();renderHours();renderEvents();refreshBooking();syncLD()}
renderAll();route();watchReveal();
if(root.dataset.page==="home"&&!/^#\/?(beheer)/.test(location.hash))setTimeout(showPop,700);
