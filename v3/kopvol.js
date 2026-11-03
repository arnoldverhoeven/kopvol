/* ============ DATA ============ */
const PH={heroduo:"../img/hero-duo.jpg",duo:"../img/duo.jpg",potstiften:"../img/potstiften.jpg",schaal:"../img/schaal.jpg",andy:"../img/andy.jpg",boeken:"../img/boeken.jpg",koekje:"../img/koekje.jpg",fruit:"../img/fruit.jpg",croissant:"../img/croissant.jpg",kaars:"../img/kaars.jpg",zon:"../img/latte-zon.jpg",herobowl:"../img/hero-bowl.jpg",pulhof:"../img/pulhof.jpg",spikkel:"../img/spikkel.jpg",ochtend:"../img/ochtend.jpg",robijn:"../img/robijn.jpg",tumbler:"../img/tumbler.jpg"};
const IMG={pulhof:"../img/pulhof-sq.jpg",spikkel:"../img/spikkel-sq.jpg",ochtend:"../img/ochtend-sq.jpg",robijn:"../img/robijn-sq.jpg",tumbler:"../img/tumbler-sq.jpg",potstiften:"../img/potstiften-sq.jpg",schaal:"../img/schaal-sq.jpg",duo:"../img/duo-sq.jpg",
 ev1:PH.ochtend,ev2:PH.robijn,ev3:PH.croissant,ev4:PH.kaars};
document.querySelectorAll("img[data-src]").forEach(i=>{i.src=PH[i.dataset.src]});

const MENU={
 "Koffie":[["Espresso","Andy Roasters — single origin, wisselend",2.8],["Flat white","dubbele shot, fluweelzachte melk",4.2,"Favoriet"],["Cappuccino","",4],["Latte","ook met haver- of amandelmelk (+0,50)",4.2],["Iced latte / cold brew","het hele jaar door",4.5],["Matcha latte","ceremoniële matcha",4.8],["Babyccino / Puppyccino","voor de kleinste en de viervoeter",1.5]],
 "Thee & fris":[["Thee van Mélange","losse thee uit Mortsel — zwart, groen, kruiden",3.5],["Verse muntthee","met honing",3.8],["Gemberthee","verse gember, citroen",3.8],["Huisgemaakte iced tea","perzik-rozemarijn",4],["Kombucha van Figa","wisselende smaak",4.5],["Vers sapje","sinaas of appel-gember",4.2]],
 "Ontbijt":[["Zachtgekookt eitje met brioche-soldaatjes","met gezouten boter",8.5],["Briochebun met roerei","en bieslook",9.5],["Wentelteefje van brioche","met ahornsiroop en seizoensfruit",9,"Favoriet"],["Granola met yoghurt","huisgemaakte granola, fruit, honing",8],["Extra toppings","avocado, zalm, spek, geitenkaas",2.5]],
 "Lunch":[["Briochebun umami-champignons","gebakken champignons, truffelmayo, rucola",12.5],["Briochebun zalm","gerookte zalm, kruidenkaas, komkommer",13.5],["Briochebun New York pastrami","pastrami, augurk, mosterd",13.5],["Briochebun pulled chicken","of geitenkaas met honing",13,"Favoriet"],["Soep van de dag","met brioche",6.5]],
 "Zoet":[["Cookie van het huis","chocolade-zeezout — de must try",3.2,"Favoriet"],["Citrus muffin","",3.5],["Kaneelbroodje","met pistache",4],["Banana bread","met walnoot",3.8],["Taart van de dag","vraag aan de toog",4.5]]
};

/* keramiek: teasers, enkel te koop in de bar */
const PRODUCTS=[
 {id:"duo",name:"Latte-kommen",sub:"Set van twee · crème gespikkeld",price:62,img:IMG.duo,full:PH.duo,badge:"Nieuw",
  desc:"Twee brede, lage kommen voor latte of cappuccino, met een fijne donkere spikkel. Precies de kommen waaruit je in de bar drinkt.",
  specs:[["Inhoud","2 × 300 ml"],["Hoogte","7 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"potstiften",name:"Pulhof-pot",sub:"Pot zonder oor · gespikkeld",price:28,img:IMG.potstiften,full:PH.potstiften,badge:"",
  desc:"Een conische pot zonder oor: voor je stiften op het bureau, als bloempot of als grote thee-beker. Zoals alles uit het atelier met de hand gedraaid.",
  specs:[["Inhoud","450 ml"],["Hoogte","10 cm"],["Diameter","11 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Mat-zijdeglans, loodvrij"],["Vaatwasser","Ja"]]},
 {id:"schaal",name:"Schaal",sub:"Lage schaal · gespikkeld",price:34,img:IMG.schaal,full:PH.schaal,badge:"",
  desc:"Een lage, bolle schaal met hoogglanzend glazuur. Voor sleutels, fruit of een kaarsje; in de bar gebruiken we ze voor de koekjes.",
  specs:[["Diameter","18 cm"],["Hoogte","7 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Hoogglans, loodvrij"],["Vaatwasser","Ja"]]},
 {id:"ochtend",name:"Ochtend",sub:"Latte bowl · zand gespikkeld",price:36,img:IMG.ochtend,full:PH.ochtend,gallery:[PH.ochtend,PH.kaars,PH.koekje,PH.fruit,PH.croissant,PH.boeken],badge:"Favoriet",
  desc:"Een brede, lage kom met oor, voor wie zijn latte graag met beide handen vasthoudt. Zandkleurig glazuur met een fijne spikkel.",
  specs:[["Inhoud","350 ml"],["Hoogte","7 cm"],["Diameter","11 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"pulhof",name:"Pulhof",sub:"Cappuccinotas · terracotta-roze",price:34,img:IMG.pulhof,full:PH.pulhof,badge:"",
  desc:"De tas waar het allemaal mee begon. Warm roze-terracotta glazuur over roodbakkende klei, met een bolle buik die je in twee handen neemt.",
  specs:[["Inhoud","300 ml"],["Hoogte","8,5 cm"],["Diameter","9 cm"],["Klei","Roodbakkend steengoed"],["Glazuur","Zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"robijn",name:"Robijn",sub:"Geribbelde mok · dieprood",price:38,img:IMG.robijn,full:PH.robijn,badge:"",
  desc:"Onze meest uitgesproken mok: diep robijnrood glazuur dat in de ribbels donkerder kleurt, met een crèmekleurige rand. Geen twee zijn gelijk.",
  specs:[["Inhoud","280 ml"],["Hoogte","9 cm"],["Diameter","8,5 cm"],["Klei","Wit steengoed"],["Glazuur","Hoogglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"spikkel",name:"Spikkel",sub:"Espressotas met schoteltje",price:29,img:IMG.spikkel,full:PH.spikkel,badge:"",
  desc:"Klein maar fijn: een espressotas met bijpassend schoteltje in crèmekleurig glazuur met donkere spikkels.",
  specs:[["Inhoud","120 ml"],["Schoteltje","Ø 13 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Glanzend, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]}
];

const SEED_EVENTS=[
 {id:"e1",type:"workshop",title:"Draai je eigen kopje",date:"2026-11-15",time:"10:00 – 13:00",price:65,cap:8,img:IMG.ev1,pub:true,
  desc:"Ilona neemt je mee achter de pottenbakkersschijf. Je draait twee kopjes, kiest je glazuur en haalt ze drie weken later gebakken op in de bar. Koffie en een koekje inbegrepen, geen ervaring nodig."},
 {id:"e2",type:"workshop",title:"Ikebana-avond",date:"2026-11-27",time:"19:00 – 21:00",price:45,cap:10,img:IMG.ev3,pub:true,
  desc:"Japanse bloemsierkunst in de koffiebar. Je maakt een eigen compositie in een KOPVOL-vaasje dat je mag meenemen. Met thee van Mélange en iets zoets."},
 {id:"e3",type:"coupevol",title:"Coupevol: cava & kaas van Van Tricht",date:"2026-12-05",time:"18:00 – 22:00",price:25,cap:24,img:IMG.ev2,pub:true,
  desc:"Na vieren ruilen we de koffie voor cava en cocktails. Kaasplankje van Van Tricht, muziek op de achtergrond en de buurt aan tafel. Inschrijving = plankje + eerste glas."},
 {id:"e4",type:"workshop",title:"Latte art voor beginners",date:"2026-12-14",time:"16:30 – 18:00",price:35,cap:6,img:IMG.ev4,pub:true,
  desc:"Robin leert je melk stomen en een hartje gieten. Kleine groep, veel oefenen, en je drinkt je eigen werk op."}
];
const SEED_REGS=[
 {id:"r1",ev:"e1",name:"Sofie Van den Broeck",email:"sofie.vdb@example.be",n:2,note:"",at:"2026-10-14T19:22:00"},
 {id:"r2",ev:"e1",name:"Thomas Peeters",email:"thomas.p@example.be",n:1,note:"Linkshandig, is dat een probleem?",at:"2026-10-16T08:05:00"},
 {id:"r3",ev:"e3",name:"Nathalie De Wit",email:"nathalie@example.be",n:4,note:"Tafel voor 4 graag",at:"2026-10-18T21:40:00"},
 {id:"r4",ev:"e2",name:"Karen Maes",email:"karen.maes@example.be",n:2,note:"",at:"2026-10-19T12:12:00"},
 {id:"r5",ev:"e1",name:"Lotte Jacobs",email:"lotte.j@example.be",n:1,note:"",at:"2026-10-20T09:48:00"}
];
/* standaard: de Google-openingsuren; sluitingsdagen en tafels stellen de eigenaars zelf in */
const DEFAULT_SETTINGS={hours:{0:[9,16],1:[9,16],2:null,3:[9,16],4:[9,16],5:[9,16],6:[9,16]},closed:[{id:"c1",from:"2026-12-24",to:"2027-01-02",reason:"Kerstvakantie"}],tables:{binnen:4,buiten:4},dur:2,minP:6,maxP:14};
function nextIso(days){const d=new Date();d.setDate(d.getDate()+days);while(d.getDay()===2)d.setDate(d.getDate()+1);return d.toISOString().slice(0,10)}
const SEED_BOOKINGS=[
 {id:"b1",name:"Familie Janssens",email:"janssens@example.be",phone:"0470 12 34 56",date:nextIso(3),time:"10:00",n:8,area:"binnen",note:"Verjaardag, 2 kinderstoelen",status:"bevestigd",at:"2026-10-28T10:12:00"},
 {id:"b2",name:"Team Studio Noor",email:"hallo@example.be",phone:"0486 65 43 21",date:nextIso(3),time:"12:00",n:6,area:"buiten",note:"",status:"nieuw",at:"2026-11-01T17:40:00"},
 {id:"b3",name:"Els Vermeulen",email:"els.v@example.be",phone:"0495 11 22 33",date:nextIso(6),time:"09:30",n:7,area:"binnen",note:"Ontbijt met collega's",status:"bevestigd",at:"2026-11-02T08:03:00"}
];

/* ============ STATE ============ */
const KEY="kopvol_v4";
let DB=load();
function fresh(){return {events:structuredClone(SEED_EVENTS),regs:structuredClone(SEED_REGS),bookings:structuredClone(SEED_BOOKINGS),settings:structuredClone(DEFAULT_SETTINGS)}}
function load(){try{const d=JSON.parse(localStorage.getItem(KEY));if(d&&d.events&&d.settings&&d.bookings)return d}catch(e){}return fresh()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
const S=()=>DB.settings;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const eur=n=>"€ "+n.toFixed(2).replace(".",",");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const DAYS=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],MON=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
function fmtDate(iso){const d=new Date(iso+"T12:00:00");return DAYS[d.getDay()]+" "+d.getDate()+" "+MON[d.getMonth()]+" "+d.getFullYear()}
function fmtShort(iso){const d=new Date(iso+"T12:00:00");return d.getDate()+" "+MON[d.getMonth()]}
const hhmm=h=>String(Math.floor(h)).padStart(2,"0")+":"+(h%1?"30":"00");
function todayIso(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),2400)}
function uid(){return Math.random().toString(36).slice(2,9)}
const I_CAL=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,I_CLK=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,I_EUR=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6.5A7 7 0 0 0 7.5 9M18 17.5A7 7 0 0 1 7.5 15M4 10.5h10M4 13.5h10"/></svg>`;

/* ============ OPENINGSUREN & SLUITINGEN ============ */
function closureFor(iso){return S().closed.find(c=>c.from<=iso&&iso<=c.to)||null}
function hoursFor(iso){if(closureFor(iso))return null;const d=new Date(iso+"T12:00:00").getDay();return S().hours[d]||null}
function nextOpenDay(fromIso){const d=new Date(fromIso+"T12:00:00");for(let i=1;i<60;i++){d.setDate(d.getDate()+1);const iso=d.toISOString().slice(0,10);if(hoursFor(iso))return iso}return null}
function renderHours(){
 const ul=$("#hours");if(!ul)return;const H=S().hours,today=new Date().getDay();
 ul.innerHTML=[1,2,3,4,5,6,0].map(d=>`<li data-d="${d}" class="${d===today?"today":""}"><span>${DAYS[d][0].toUpperCase()+DAYS[d].slice(1)}</span><b>${H[d]?hhmm(H[d][0])+" – "+hhmm(H[d][1]):"Rustdag"}</b></li>`).join("");
 const cl=$("#closures");if(cl){const t=todayIso(),up=S().closed.filter(c=>c.to>=t).sort((a,b)=>a.from.localeCompare(b.from));
  cl.innerHTML=up.length?up.map(c=>`<span>${c.from===c.to?"Gesloten op "+fmtDate(c.from):"Gesloten van "+fmtShort(c.from)+" t.e.m. "+fmtShort(c.to)}${c.reason?" · "+esc(c.reason):""}</span>`).join(""):"";cl.hidden=!up.length}
}
function renderOpenNow(){
 try{
  const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Brussels",weekday:"short",hour:"numeric",minute:"numeric",year:"numeric",month:"2-digit",day:"2-digit",hour12:false}).formatToParts(new Date()),o={};p.forEach(x=>o[x.type]=x.value);
  const iso=o.year+"-"+o.month+"-"+o.day,h=(+o.hour)+(+o.minute)/60,t=hoursFor(iso),c=closureFor(iso);let txt,closed=false;
  if(t&&h>=t[0]&&h<t[1]){txt="Nu open — tot "+hhmm(t[1])+" u"}
  else{closed=true;
   if(t&&h<t[0]){txt="Nu gesloten — vandaag open vanaf "+hhmm(t[0])+" u"}
   else{const n=nextOpenDay(iso);const d1=new Date(iso+"T12:00:00"),d2=new Date(n+"T12:00:00"),k=Math.round((d2-d1)/864e5);
    txt=(c?"Gesloten — "+c.reason+". ":"Nu gesloten — ")+(k===1?"morgen":DAYS[d2.getDay()]+" "+fmtShort(n))+" open vanaf "+hhmm(hoursFor(n)[0])+" u"}}
  $$("[data-opennow]").forEach(el=>{el.textContent=txt;el.classList.toggle("closed",closed)});
 }catch(e){}
}
renderHours();renderOpenNow();

/* ============ HEADER / MENU ============ */
(function(){
 const root=document.documentElement,btn=$("#menubtn"),dr=$("#drawer"),lbl=$(".lbl",btn);
 function set(o){root.classList.toggle("menu-open",o);btn.setAttribute("aria-expanded",o);lbl.textContent=o?"Sluiten":"Menu"}
 btn.addEventListener("click",()=>set(!root.classList.contains("menu-open")));
 dr.addEventListener("click",e=>{if(e.target.closest("a")||e.target.closest("[data-menu-close]"))set(false)});$("#mback").addEventListener("click",()=>set(false));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(root.classList.contains("menu-open")){set(false);btn.focus()}else if(root.classList.contains("kaart-open")){closeKaart()}closeOverlays()}});
 matchMedia("(min-width:901px)").addEventListener("change",m=>{if(m.matches)set(false)});
 const fixPad=()=>{document.documentElement.style.scrollPaddingTop=$("#hdr").offsetHeight+"px"};fixPad();addEventListener("resize",fixPad);
 if("IntersectionObserver" in window){
  const links=[...$$("nav.main a"),...$$(".mbar a[href^='#']")];let lock=0;
  window.setCur=id=>links.forEach(a=>a.setAttribute("aria-current",a.getAttribute("href")==="#"+id));
  const so=new IntersectionObserver(en=>{if(Date.now()<lock||root.classList.contains("kaart-open"))return;en.forEach(e=>{if(e.isIntersecting)setCur(e.target.id)})},{rootMargin:"-40% 0px -55% 0px"});
  ["keramiek","reserveren","events","verhaal","bezoek"].forEach(i=>{const s=document.getElementById(i);s&&so.observe(s)});
  document.addEventListener("click",e=>{const a=e.target.closest(".mbar a[href^='#'],nav.main a[href^='#'],.drawer a[href^='#']");if(a){lock=Date.now()+1200;setCur(a.getAttribute("href").slice(1))}});
  const ro=new IntersectionObserver(en=>en.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.12});
  $$(".reveal").forEach(el=>ro.observe(el));
 }else{window.setCur=()=>{};$$(".reveal").forEach(el=>el.classList.add("in"))}
})();

/* ============ MENUKAART (aparte weergave achter de knop Menu) ============ */
(function(){
 const chips=$("#chips"),cols=$("#menucols"),cats=Object.keys(MENU),view=$("#kaartview");
 const SUB={"Koffie":"Andy Roasters","Thee & fris":"Mélange · Figa","Ontbijt":"de hele dag","Lunch":"tot 16 u","Zoet":"huisgebakken"};
 const slug=c=>c.toLowerCase().replace(/[^a-z]+/g,"-").replace(/^-|-$/g,"");
 chips.innerHTML=cats.map((c,i)=>`<button class="chip" type="button" data-mg="mg-${slug(c)}"${i===0?' aria-current="true"':''}>${esc(c)}</button>`).join("");
 cols.innerHTML=cats.map(c=>`<div class="mg" id="mg-${slug(c)}"><h3>${esc(c)}<small>${esc(SUB[c]||"")}</small></h3>${MENU[c].map(([n,s,p,t])=>`<div class="mi"><b>${esc(n)}${t?`<span class="tag">${esc(t)}</span>`:""}</b><span class="ld"></span><span class="p">${eur(p)}</span>${s?`<small>${esc(s)}</small>`:""}</div>`).join("")}</div>`).join("");
 chips.addEventListener("click",e=>{const b=e.target.closest("[data-mg]");if(!b)return;const g=document.getElementById(b.dataset.mg);$$("[data-mg]",chips).forEach(x=>x.setAttribute("aria-current",x===b));view.scrollTo({top:g.offsetTop-chips.offsetHeight-8,behavior:"smooth"})});
 const groups=$$(".mg",cols);
 view.addEventListener("scroll",()=>{const y=view.scrollTop+chips.offsetHeight+40;let cur=groups[0];groups.forEach(g=>{if(g.offsetTop<=y)cur=g});$$("[data-mg]",chips).forEach(x=>x.setAttribute("aria-current",x.dataset.mg===cur.id))},{passive:true});
 let ky=null;
 window.openKaart=function(){if(ky===null)ky=scrollY;document.documentElement.classList.add("kaart-open");view.setAttribute("aria-hidden","false");view.scrollTop=0;window.setCur&&setCur("kaart")};
 window.closeKaart=function(){const was=document.documentElement.classList.contains("kaart-open");document.documentElement.classList.remove("kaart-open");if(was&&ky!==null){const y=ky;ky=null;requestAnimationFrame(()=>scrollTo({top:y,behavior:"instant"}))}view.setAttribute("aria-hidden","true");if(location.hash==="#kaart")history.replaceState(null,"",location.pathname+location.search);window.setCur&&setCur("")};
 const route=()=>{location.hash==="#kaart"?openKaart():closeKaart()};
 addEventListener("hashchange",route);route();
 document.addEventListener("click",e=>{if(e.target.closest("[data-kaart-close]"))closeKaart()});
 ["wheel","touchmove"].forEach(ev=>document.addEventListener(ev,e=>{if(document.documentElement.classList.contains("kaart-open")&&!e.target.closest("#kaartview, .drawer, .adm"))e.preventDefault()},{passive:false}));
})();

/* ============ OVERLAYS ============ */
function openOv(id){const o=$(id);o.classList.add("on");o.setAttribute("aria-hidden","false")}
function closeOverlays(){$$(".ov.on").forEach(o=>{o.classList.remove("on");o.setAttribute("aria-hidden","true")})}
document.addEventListener("click",e=>{if(e.target.closest("[data-close]")||(e.target.classList.contains("ov")))closeOverlays()});

/* ============ KERAMIEK (teasers) ============ */
function renderProducts(){
 $("#products").innerHTML=PRODUCTS.map(p=>`<article class="prod reveal in" data-id="${p.id}">
  <div class="ph" data-view="${p.id}" role="button" tabindex="0" aria-label="Bekijk ${esc(p.name)}"><img src="${p.img}" alt="${esc(p.name)} — ${esc(p.sub)}" loading="lazy" width="640" height="640">${p.badge?`<span class="badge">${esc(p.badge)}</span>`:""}</div>
  <div class="body"><h3>${esc(p.name)}</h3><span class="sub">${esc(p.sub)}</span>
   <div class="row"><span class="price">${eur(p.price)}</span><span class="inbar">In de bar</span></div></div></article>`).join("");
}
function productModal(id){
 const p=PRODUCTS.find(x=>x.id===id);
 $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="pm"><div class="pmg"><img src="${p.full}" alt="${esc(p.name)}" id="pmimg">${p.gallery?`<div class="thumbs" role="group" aria-label="Meer foto's">${p.gallery.map((g,i)=>`<button type="button" data-thumb="${i}" aria-current="${i===0}" aria-label="Foto ${i+1}"><img src="${g}" alt=""></button>`).join("")}</div>`:""}</div><div class="info"><span class="kicker">Handgemaakt in Berchem</span><h3>${esc(p.name)}</h3><div class="sub">${esc(p.sub)}</div><p style="margin:0;font-size:15px;color:var(--muted)">${esc(p.desc)}</p><ul class="specs">${p.specs.map(([k,v])=>`<li><span>${esc(k)}</span><b>${esc(v)}</b></li>`).join("")}</ul><div class="row"><span class="price">${eur(p.price)}</span><span class="inbar">Enkel te koop in de bar</span></div><p class="inbar-note">Elk stuk is uniek en de voorraad wisselt. Kom langs in de Troyentenhoflaan 42 of vraag ernaar aan de toog.</p><div class="row"><a class="btn red" href="https://www.google.com/maps/search/?api=1&query=KOPVOL+Troyentenhoflaan+42+Antwerpen" target="_blank" rel="noopener" style="flex:1">Route naar de bar</a></div></div></div>`;
 openOv("#modal");
}
(function(){
 const r=$("#products");const step=()=>{const c=r.querySelector(".prod");return c?c.getBoundingClientRect().width+16:300};
 $("#prev").addEventListener("click",()=>r.scrollBy({left:-step(),behavior:"smooth"}));
 $("#next").addEventListener("click",()=>r.scrollBy({left:step(),behavior:"smooth"}));
 r.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.dataset.view)productModal(e.target.dataset.view)});
})();
document.addEventListener("click",e=>{
 const t=e.target;
 const v=t.closest("[data-view]");if(v){productModal(v.dataset.view);return}
 const th=t.closest("[data-thumb]");if(th){const img=$("#pmimg");img.src=th.querySelector("img").src;$$(".thumbs button").forEach(b=>b.setAttribute("aria-current",b===th));return}
});
renderProducts();

/* ============ RESERVEREN (vanaf 6 personen) ============ */
function slotsFor(iso){const t=hoursFor(iso);if(!t)return[];const out=[];for(let h=t[0];h<=t[1]-S().dur+1e-9;h+=.5)out.push(hhmm(h));return out}
function overlaps(b,iso,time){if(b.date!==iso)return false;const d=S().dur,a=+b.time.slice(0,2)+(+b.time.slice(3))/60,c=+time.slice(0,2)+(+time.slice(3))/60;return a<c+d&&a+d>c}
function freeTables(iso,time,area){return S().tables[area]-DB.bookings.filter(b=>b.area===area&&b.status!=="geannuleerd"&&overlaps(b,iso,time)).length}
(function(){
 const f=$("#bform");if(!f)return;
 const date=f.date,time=f.time,n=f.n,av=$("#avail"),err=$("#berr");
 date.min=todayIso();
 function fillPersons(){const s=S();n.innerHTML=[];for(let i=s.minP;i<=s.maxP;i++)n.add(new Option(i+" personen",i));$("#minp").textContent=s.minP;$("#maxp").textContent=s.maxP}
 function fillTimes(){const iso=date.value;time.innerHTML="";const c=iso&&closureFor(iso),sl=iso?slotsFor(iso):[];
  if(!iso){time.add(new Option("Kies eerst een datum",""));time.disabled=true}
  else if(!sl.length){time.add(new Option(c?"Gesloten: "+c.reason:"Gesloten op deze dag",""));time.disabled=true}
  else{time.disabled=false;sl.forEach(s=>time.add(new Option(s+" u",s)))}
  updateAvail()}
 function updateAvail(){const iso=date.value,t=time.value;
  if(!iso||!t){av.innerHTML="";av.className="avail";return}
  const fb=freeTables(iso,t,"binnen"),fu=freeTables(iso,t,"buiten");
  const lab=(x,k)=>x<=0?`<b class="no">${k}: volzet</b>`:`<b>${k}: nog ${x} ${x===1?"tafel":"tafels"} vrij</b>`;
  av.innerHTML=`${lab(fb,"Binnen")} · ${lab(fu,"Terras")}<small>om ${t} u, tafel voor ${S().dur} uur</small>`;av.className="avail on";
  f.querySelector('[value="binnen"]').disabled=fb<=0;f.querySelector('[value="buiten"]').disabled=fu<=0;
  if(fb<=0&&fu>0)f.querySelector('[value="buiten"]').checked=true;if(fu<=0&&fb>0)f.querySelector('[value="binnen"]').checked=true}
 fillPersons();fillTimes();
 date.addEventListener("change",fillTimes);time.addEventListener("change",updateAvail);
 window.refreshBooking=()=>{fillPersons();fillTimes()};
 f.addEventListener("submit",e=>{e.preventDefault();err.textContent="";
  const o={name:f.name.value.trim(),email:f.email.value.trim(),phone:f.phone.value.trim(),date:date.value,time:time.value,n:+n.value,area:f.area.value,note:f.note.value.trim()};
  if(!o.date||!o.time){err.textContent="Kies een datum en een uur.";return}
  if(o.name.length<2||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.email)||o.phone.replace(/\D/g,"").length<8){err.textContent="Vul je naam, een geldig e-mailadres en een telefoonnummer in.";return}
  if(freeTables(o.date,o.time,o.area)<=0){err.textContent="Dat uur is net volzet "+(o.area==="binnen"?"binnen":"op het terras")+". Kies een ander uur of de andere plek.";updateAvail();return}
  DB.bookings.push(Object.assign({id:uid(),status:"nieuw",at:new Date().toISOString()},o));save();
  $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="ok"><div class="ico">✓</div><h3>Reservatie aangevraagd</h3><p>${esc(o.name)}, tafel voor <b>${o.n}</b> op <b>${esc(fmtDate(o.date))}</b> om <b>${esc(o.time)} u</b>, ${o.area==="binnen"?"binnen":"op het terras"}.<br>Robin of Ilona bevestigen je reservatie per e-mail op ${esc(o.email)}.</p><button class="btn red" type="button" data-close>Top, bedankt</button></div>`;
  openOv("#modal");f.reset();date.min=todayIso();fillTimes()});
})();

/* ============ EVENTS ============ */
let evFilter="all";
const taken=id=>DB.regs.filter(r=>r.ev===id).reduce((a,r)=>a+r.n,0);
function upcoming(){const today=new Date();today.setHours(0,0,0,0);return DB.events.filter(e=>e.pub&&new Date(e.date+"T23:59:59")>=today).sort((a,b)=>a.date.localeCompare(b.date))}
function renderEvents(){
 const list=upcoming().filter(e=>evFilter==="all"||e.type===evFilter);
 $("#evlist").innerHTML=list.length?list.map(e=>{const left=e.cap-taken(e.id),d=new Date(e.date+"T12:00:00");
  return `<article class="ev reveal in"><div class="when"><b>${d.getDate()}</b><small>${MON[d.getMonth()]}</small><span>${DAYS[d.getDay()]}</span></div>
  <div class="ph">${e.img?`<img src="${e.img}" alt="" loading="lazy">`:""}</div>
  <div class="body"><span class="type">${e.type==="coupevol"?"Coupevol":"Workshop"}</span><h3>${esc(e.title)}</h3><div class="meta"><span>${I_CLK} ${esc(e.time)}</span><span>${I_EUR} ${eur(e.price)} p.p.</span></div><p>${esc(e.desc)}</p></div>
  <div class="act"><div class="spots ${left<=0?"full":left<=3?"low":""}">${left<=0?"Volzet — wachtlijst":left<=3?"Nog "+left+" plaats"+(left===1?"":"en"):left+" plaatsen vrij"}</div><button class="btn ${left<=0?"outl":"red"} sm" type="button" data-signup="${e.id}">${left<=0?"Wachtlijst":"Inschrijven"}</button></div></article>`}).join("")
  :`<div class="empty">Geen events gepland in deze categorie. Volg <b>@kopvol.koffiebar</b> voor nieuwe data.</div>`;
}
function signupModal(id){
 const e=DB.events.find(x=>x.id===id),left=e.cap-taken(id);
 $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="em">${e.img?`<img src="${e.img}" alt="">`:""}<div class="info"><span class="kicker">${e.type==="coupevol"?"Coupevol":"Workshop"}</span><h3>${esc(e.title)}</h3><div class="meta"><span>${I_CAL} ${esc(fmtDate(e.date))}</span><span>${I_CLK} ${esc(e.time)}</span><span>${I_EUR} ${eur(e.price)} p.p.</span></div><p>${esc(e.desc)}</p>
 <form class="form" id="sform" novalidate>
  <label>Naam<input name="name" required autocomplete="name"></label>
  <div class="two"><label>E-mail<input name="email" type="email" required autocomplete="email"></label><label>Aantal personen<select name="n">${[1,2,3,4].map(n=>`<option value="${n}">${n}</option>`).join("")}</select></label></div>
  <label>Opmerking (optioneel)<input name="note" placeholder="allergie, vraag, …"></label>
  <div class="err" id="serr"></div>
  <button class="btn red" type="submit" style="width:100%">${left<=0?"Zet me op de wachtlijst":"Inschrijven · "+eur(e.price)+" p.p."}</button>
  <p style="margin:0;font-size:12px;color:var(--muted);text-align:center">${left<=0?"We mailen je zodra er een plaats vrijkomt.":"Je betaalt ter plaatse of via de betaallink in je bevestigingsmail."}</p>
 </form></div></div>`;
 openOv("#modal");
 $("#sform").addEventListener("submit",ev=>{ev.preventDefault();const f=ev.target,name=f.name.value.trim(),email=f.email.value.trim(),n=+f.n.value;
  if(name.length<2||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){$("#serr").textContent="Vul je naam en een geldig e-mailadres in.";return}
  const nowLeft=e.cap-taken(id);
  if(nowLeft>0&&n>nowLeft){$("#serr").textContent="Er zijn nog maar "+nowLeft+" plaatsen vrij.";return}
  DB.regs.push({id:uid(),ev:id,name,email,n,note:f.note.value.trim(),at:new Date().toISOString(),wait:nowLeft<=0});save();renderEvents();
  $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="ok"><div class="ico">✓</div><h3>${nowLeft<=0?"Je staat op de wachtlijst":"Ingeschreven!"}</h3><p>${esc(name)}, ${n} ${n===1?"plaats":"plaatsen"} voor <b>${esc(e.title)}</b> op ${esc(fmtDate(e.date))}.<br>Bevestiging volgt op ${esc(email)}.</p><button class="btn red" type="button" data-close>Top, bedankt</button></div>`});
}
$("#evfilters").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(!b)return;evFilter=b.dataset.f;$$("[data-f]").forEach(x=>x.setAttribute("aria-current",x===b));renderEvents()});
document.addEventListener("click",e=>{const s=e.target.closest("[data-signup]");if(s)signupModal(s.dataset.signup)});
renderEvents();

/* ============ MINI-CMS ============ */
const PIN="2600";let admAuth=false,admTab="events",editId=null;
function openAdmin(){$("#adm").classList.add("on");$("#adm").setAttribute("aria-hidden","false");document.documentElement.classList.add("adm-open");renderAdmin();$("#adm").scrollTop=0}
function closeAdmin(){document.documentElement.classList.remove("adm-open");$("#adm").classList.remove("on");$("#adm").setAttribute("aria-hidden","true");renderEvents();renderHours();renderOpenNow();window.refreshBooking&&refreshBooking()}
function renderAdmin(){
 const b=$("#admbody");
 if(!admAuth){b.innerHTML=`<div class="pin card"><h3>Inloggen</h3><p style="color:var(--muted);font-size:14px;margin:0 0 14px">Demo-pincode: <b>2600</b></p><form class="form" id="pinform"><input name="pin" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="••••" aria-label="Pincode"><div class="err" id="perr"></div><button class="btn red" type="submit">Open beheer</button></form></div>`;
  $("#pinform").addEventListener("submit",e=>{e.preventDefault();if(e.target.pin.value===PIN){admAuth=true;renderAdmin()}else $("#perr").textContent="Foute pincode."});return}
 const newB=DB.bookings.filter(x=>x.status==="nieuw").length,t=todayIso(),upB=DB.bookings.filter(x=>x.date>=t&&x.status!=="geannuleerd").length;
 b.innerHTML=`<div class="adm-tabs"><button class="chip" data-at="bookings" aria-current="${admTab==="bookings"}" type="button">Reservaties${newB?` <i class="dot">${newB}</i>`:""}</button><button class="chip" data-at="events" aria-current="${admTab==="events"}" type="button">Events &amp; workshops</button><button class="chip" data-at="regs" aria-current="${admTab==="regs"}" type="button">Inschrijvingen (${DB.regs.length})</button><button class="chip" data-at="settings" aria-current="${admTab==="settings"}" type="button">Openingsuren &amp; tafels</button></div>
 <div class="stat"><div><b>${upB}</b><small>komende reservaties</small></div><div><b>${newB}</b><small>nog te bevestigen</small></div><div><b>${upcoming().length}</b><small>events online</small></div></div>
 <div id="admtab"></div>`;
 $$("[data-at]").forEach(x=>x.addEventListener("click",()=>{admTab=x.dataset.at;renderAdmin()}));
 ({events:renderAdmEvents,regs:renderAdmRegs,bookings:renderAdmBookings,settings:renderAdmSettings})[admTab]();
}
function renderAdmBookings(){
 const t=todayIso(),list=DB.bookings.slice().sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)),up=list.filter(x=>x.date>=t),past=list.filter(x=>x.date<t);
 const row=x=>`<tr class="${x.status}"><td><b>${esc(fmtDate(x.date))}</b><br><small>${esc(x.time)} u · ${x.area==="binnen"?"binnen":"terras"}</small></td><td><b>${esc(x.name)}</b><br><small>${x.n} pers.${x.note?" · "+esc(x.note):""}</small></td><td><a href="tel:${esc(x.phone)}">${esc(x.phone)}</a><br><a href="mailto:${esc(x.email)}">${esc(x.email)}</a></td><td><span class="pub ${x.status==="bevestigd"?"":x.status==="nieuw"?"new":"off"}">${x.status}</span></td><td><div class="acts">${x.status==="nieuw"?`<button class="ib on" type="button" data-bok="${x.id}">Bevestig</button>`:""}${x.status!=="geannuleerd"?`<button class="ib" type="button" data-bcancel="${x.id}">Annuleer</button>`:""}<button class="ib danger" type="button" data-bdel="${x.id}" aria-label="Verwijder">×</button></div></td></tr>`;
 const table=rs=>rs.length?`<div style="overflow-x:auto"><table class="reg"><thead><tr><th>Wanneer</th><th>Wie</th><th>Contact</th><th>Status</th><th></th></tr></thead><tbody>${rs.map(row).join("")}</tbody></table></div>`:`<p style="margin:0;color:var(--muted);font-size:14px">Geen reservaties.</p>`;
 $("#admtab").innerHTML=`<div class="card" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:10px"><h3 style="margin:0">Komende reservaties</h3><button class="ib" type="button" data-bcsv ${up.length?"":"disabled"}>⬇ CSV</button></div><p style="margin:0 0 12px;color:var(--muted);font-size:14px">Nieuwe aanvragen bevestig je met één klik; de klant krijgt dan een bevestigingsmail. Per tijdslot zijn er maximaal ${S().tables.binnen} tafels binnen en ${S().tables.buiten} op het terras (aanpasbaar bij Openingsuren &amp; tafels).</p>${table(up)}</div>
 <div class="card"><h3>Voorbije reservaties</h3>${table(past)}</div>`;
 $("#admtab").addEventListener("click",ev=>{const t=ev.target.closest("button");if(!t)return;
  const find=id=>DB.bookings.find(x=>x.id===id);
  if(t.dataset.bok){find(t.dataset.bok).status="bevestigd";save();renderAdmin();toast("Reservatie bevestigd");return}
  if(t.dataset.bcancel){if(confirm("Reservatie annuleren?")){find(t.dataset.bcancel).status="geannuleerd";save();renderAdmin()}return}
  if(t.dataset.bdel){if(confirm("Reservatie definitief verwijderen?")){DB.bookings=DB.bookings.filter(x=>x.id!==t.dataset.bdel);save();renderAdmin()}return}
  if(t.hasAttribute("data-bcsv")){const csv=["Datum;Uur;Naam;Personen;Plek;Telefoon;E-mail;Opmerking;Status",...up.map(x=>[x.date,x.time,x.name,x.n,x.area,x.phone,x.email,x.note,x.status].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(";"))].join("\n");
   const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["﻿"+csv],{type:"text/csv;charset=utf-8"}));a.download="reservaties-kopvol.csv";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}});
}
function renderAdmSettings(){
 const s=S();
 $("#admtab").innerHTML=`<div class="adm-grid">
 <div class="card"><h3>Openingsuren</h3><p style="margin:0 0 12px;color:var(--muted);font-size:14px">Standaard de uren van jullie Google-profiel. Vink een dag uit voor een vaste sluitingsdag.</p>
  <form class="form" id="hform">
  ${[1,2,3,4,5,6,0].map(d=>`<div class="ohrow"><label class="chk"><input type="checkbox" name="o${d}" ${s.hours[d]?"checked":""}>${DAYS[d][0].toUpperCase()+DAYS[d].slice(1)}</label><input type="time" name="f${d}" value="${s.hours[d]?hhmm(s.hours[d][0]):"09:00"}" step="1800" ${s.hours[d]?"":"disabled"}><span>tot</span><input type="time" name="t${d}" value="${s.hours[d]?hhmm(s.hours[d][1]):"16:00"}" step="1800" ${s.hours[d]?"":"disabled"}></div>`).join("")}
  <h3 style="margin-top:18px">Tafels &amp; reservaties</h3>
  <div class="two"><label>Tafels binnen (tegelijk)<input type="number" name="tb" min="0" max="20" value="${s.tables.binnen}"></label><label>Tafels terras (tegelijk)<input type="number" name="tu" min="0" max="20" value="${s.tables.buiten}"></label></div>
  <div class="two"><label>Duur per tafel (uur)<select name="dur">${[1,1.5,2,2.5,3].map(x=>`<option value="${x}" ${x===s.dur?"selected":""}>${String(x).replace(".",",")} u</option>`).join("")}</select></label><label>Reserveren vanaf (personen)<input type="number" name="minp" min="1" max="30" value="${s.minP}"></label></div>
  <label>Maximum per reservatie (personen)<input type="number" name="maxp" min="1" max="60" value="${s.maxP}"></label>
  <div class="err" id="herr"></div>
  <button class="btn red sm" type="submit">Opslaan</button>
  </form></div>
 <div class="card"><h3>Sluitingsdagen &amp; vakantie</h3><p style="margin:0 0 12px;color:var(--muted);font-size:14px">Op deze dagen kan er niet gereserveerd worden en toont de site "gesloten".</p>
  ${s.closed.length?s.closed.slice().sort((a,b)=>a.from.localeCompare(b.from)).map(c=>`<div class="evrow" style="grid-template-columns:1fr auto"><div><b>${c.from===c.to?esc(fmtDate(c.from)):esc(fmtShort(c.from))+" t.e.m. "+esc(fmtShort(c.to))+" "+c.to.slice(0,4)}</b><small>${esc(c.reason||"Gesloten")}</small></div><div class="acts"><button class="ib danger" type="button" data-cdel="${c.id}">×</button></div></div>`).join(""):`<p style="margin:0 0 10px;color:var(--muted);font-size:14px">Nog geen sluitingsdagen ingepland.</p>`}
  <form class="form" id="cform" style="margin-top:14px">
   <div class="two"><label>Van<input type="date" name="from" required></label><label>Tot en met<input type="date" name="to"></label></div>
   <label>Reden (zichtbaar op de site)<input name="reason" placeholder="bv. Kerstvakantie, Verbouwing, Privé-event"></label>
   <div class="err" id="cerr"></div>
   <button class="btn ghost sm" type="submit">Sluitingsdag toevoegen</button>
  </form></div></div>`;
 const hf=$("#hform");
 hf.addEventListener("change",e=>{const m=e.target.name&&e.target.name.match(/^o(\d)$/);if(m){hf["f"+m[1]].disabled=hf["t"+m[1]].disabled=!e.target.checked}});
 hf.addEventListener("submit",e=>{e.preventDefault();const hours={};
  for(const d of [0,1,2,3,4,5,6]){if(!hf["o"+d].checked){hours[d]=null;continue}const f=hf["f"+d].value,t=hf["t"+d].value;const a=+f.slice(0,2)+(+f.slice(3))/60,b=+t.slice(0,2)+(+t.slice(3))/60;if(!(b>a)){$("#herr").textContent="Sluitingsuur moet na openingsuur liggen ("+DAYS[d]+").";return}hours[d]=[a,b]}
  const minP=+hf.minp.value,maxP=+hf.maxp.value;if(!(maxP>=minP)){$("#herr").textContent="Maximum moet groter zijn dan het minimum.";return}
  Object.assign(DB.settings,{hours,tables:{binnen:+hf.tb.value,buiten:+hf.tu.value},dur:+hf.dur.value,minP,maxP});save();toast("Instellingen opgeslagen");renderAdmin()});
 $("#cform").addEventListener("submit",e=>{e.preventDefault();const f=e.target,from=f.from.value,to=f.to.value||from;if(!from){$("#cerr").textContent="Kies een datum.";return}if(to<from){$("#cerr").textContent="'Tot' ligt voor 'Van'.";return}
  DB.settings.closed.push({id:uid(),from,to,reason:f.reason.value.trim()});save();toast("Sluitingsdag toegevoegd");renderAdmin()});
 $("#admtab").addEventListener("click",e=>{const t=e.target.closest("[data-cdel]");if(t){DB.settings.closed=DB.settings.closed.filter(c=>c.id!==t.dataset.cdel);save();renderAdmin()}});
}
function renderAdmEvents(){
 const e=editId?DB.events.find(x=>x.id===editId):null;
 $("#admtab").innerHTML=`<div class="adm-grid">
 <div class="card"><h3>${e?"Event bewerken":"Nieuw event"}</h3><form class="form" id="evform">
  <label>Titel<input name="title" required value="${e?esc(e.title):""}" placeholder="bv. Draai je eigen kopje"></label>
  <div class="two"><label>Type<select name="type"><option value="workshop" ${e&&e.type==="workshop"?"selected":""}>Workshop</option><option value="coupevol" ${e&&e.type==="coupevol"?"selected":""}>Coupevol-avond</option></select></label><label>Datum<input name="date" type="date" required value="${e?e.date:""}"></label></div>
  <div class="two"><label>Uur<input name="time" required value="${e?esc(e.time):""}" placeholder="19:00 – 21:00"></label><label>Prijs p.p. (€)<input name="price" type="number" min="0" step="0.5" required value="${e?e.price:""}"></label></div>
  <label>Aantal plaatsen<input name="cap" type="number" min="1" max="200" required value="${e?e.cap:8}"></label>
  <label>Omschrijving<textarea name="desc" required>${e?esc(e.desc):""}</textarea></label>
  <label>Foto<div class="drop" id="drop">${e&&e.img?`<img src="${e.img}" alt="">`:`<span><b>Foto kiezen</b><br>klik of sleep een foto hierheen</span>`}<input type="file" accept="image/*" name="img" aria-label="Foto kiezen"></div></label>
  <label class="chk"><input type="checkbox" name="pub" ${!e||e.pub?"checked":""}>Gepubliceerd op de website</label>
  <div class="err" id="everr"></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn red sm" type="submit">${e?"Wijzigingen opslaan":"Event toevoegen"}</button>${e?`<button class="btn ghost sm" type="button" data-cancel>Annuleren</button>`:""}</div>
 </form></div>
 <div class="card"><h3>Alle events</h3>${DB.events.slice().sort((a,b)=>a.date.localeCompare(b.date)).map(x=>`<div class="evrow">${x.img?`<img src="${x.img}" alt="">`:`<div style="width:56px;height:56px;border-radius:12px;background:var(--cream2)"></div>`}<div><b>${esc(x.title)} <span class="pub ${x.pub?"":"off"}">${x.pub?"Live":"Concept"}</span></b><small>${esc(fmtDate(x.date))} · ${esc(x.time)} · ${eur(x.price)} · ${taken(x.id)}/${x.cap} plaatsen</small></div><div class="acts"><button class="ib" type="button" data-edit="${x.id}">Bewerk</button><button class="ib" type="button" data-toggle="${x.id}">${x.pub?"Verberg":"Publiceer"}</button><button class="ib danger" type="button" data-del="${x.id}">×</button></div></div>`).join("")}</div></div>`;
 let imgData=e?e.img:"";
 const drop=$("#drop"),inp=$("input[name=img]",drop);
 inp.addEventListener("change",()=>{const f=inp.files[0];if(!f)return;if(f.size>6e6){$("#everr").textContent="Foto is te groot (max 6 MB).";return}
  const img=new Image(),url=URL.createObjectURL(f);img.onload=()=>{const c=document.createElement("canvas"),s=Math.min(1,1000/img.width);c.width=img.width*s;c.height=img.height*s;c.getContext("2d").drawImage(img,0,0,c.width,c.height);imgData=c.toDataURL("image/jpeg",.78);drop.innerHTML=`<img src="${imgData}" alt="">`;drop.appendChild(inp);URL.revokeObjectURL(url)};img.src=url});
 $("#evform").addEventListener("submit",ev=>{ev.preventDefault();const f=ev.target,o={title:f.title.value.trim(),type:f.type.value,date:f.date.value,time:f.time.value.trim(),price:+f.price.value,cap:+f.cap.value,desc:f.desc.value.trim(),img:imgData,pub:f.pub.checked};
  if(!o.title||!o.date||!o.time||!o.desc||!(o.cap>0)||!(o.price>=0)){$("#everr").textContent="Vul alle velden in.";return}
  if(e)Object.assign(e,o);else DB.events.push(Object.assign({id:uid()},o));save();editId=null;renderAdmin();toast(e?"Event bijgewerkt":"Event toegevoegd")});
 $("#admtab").addEventListener("click",ev=>{const t=ev.target;
  if(t.dataset.edit){editId=t.dataset.edit;renderAdmin();$("#admbody").scrollIntoView();return}
  if(t.dataset.toggle){const x=DB.events.find(y=>y.id===t.dataset.toggle);x.pub=!x.pub;save();renderAdmin();return}
  if(t.dataset.del){const x=DB.events.find(y=>y.id===t.dataset.del);if(confirm(`"${x.title}" verwijderen? Ook de ${DB.regs.filter(r=>r.ev===x.id).length} inschrijvingen verdwijnen.`)){DB.events=DB.events.filter(y=>y.id!==x.id);DB.regs=DB.regs.filter(r=>r.ev!==x.id);if(editId===x.id)editId=null;save();renderAdmin()}return}
  if(t.closest("[data-cancel]")){editId=null;renderAdmin()}});
}
function renderAdmRegs(){
 const evs=DB.events.slice().sort((a,b)=>a.date.localeCompare(b.date));
 $("#admtab").innerHTML=evs.map(e=>{const rs=DB.regs.filter(r=>r.ev===e.id).sort((a,b)=>a.at.localeCompare(b.at));const n=rs.reduce((a,r)=>a+r.n,0);
  return `<div class="card" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:10px"><div><h3 style="margin:0">${esc(e.title)}</h3><small style="color:var(--muted)">${esc(fmtDate(e.date))} · ${n}/${e.cap} plaatsen ingevuld${n>e.cap?" · <b style='color:var(--terra)'>"+(n-e.cap)+" op wachtlijst</b>":""}</small></div><button class="ib" type="button" data-csv="${e.id}" ${rs.length?"":"disabled"}>⬇ CSV</button></div>
  ${rs.length?`<div style="overflow-x:auto"><table class="reg"><thead><tr><th>Naam</th><th>E-mail</th><th>Pers.</th><th>Opmerking</th><th>Ingeschreven</th><th></th></tr></thead><tbody>${rs.map(r=>`<tr><td><b>${esc(r.name)}</b>${r.wait?' <span class="pub off">wachtlijst</span>':""}</td><td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td><td>${r.n}</td><td>${esc(r.note||"—")}</td><td>${new Date(r.at).toLocaleDateString("nl-BE")}</td><td><button class="ib danger" type="button" data-rdel="${r.id}" aria-label="Verwijder">×</button></td></tr>`).join("")}</tbody></table></div>`:`<p style="margin:0;color:var(--muted);font-size:14px">Nog geen inschrijvingen.</p>`}</div>`}).join("");
 $("#admtab").addEventListener("click",ev=>{const t=ev.target;
  if(t.dataset.rdel){if(confirm("Inschrijving verwijderen?")){DB.regs=DB.regs.filter(r=>r.id!==t.dataset.rdel);save();renderAdmin()}return}
  if(t.dataset.csv){const e=DB.events.find(x=>x.id===t.dataset.csv),rs=DB.regs.filter(r=>r.ev===e.id);const csv=["Naam;E-mail;Personen;Opmerking;Ingeschreven;Wachtlijst",...rs.map(r=>[r.name,r.email,r.n,r.note,r.at.slice(0,10),r.wait?"ja":"nee"].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(";"))].join("\n");
   const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["﻿"+csv],{type:"text/csv;charset=utf-8"}));a.download="inschrijvingen-"+e.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".csv";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}});
}
document.addEventListener("click",e=>{
 if(e.target.closest("[data-admin]")){e.preventDefault();openAdmin();return}
 if(e.target.closest("[data-admin-close]")){closeAdmin();return}
 if(e.target.closest("[data-reset]")){if(confirm("Demo-data terugzetten? Eigen events, reservaties en instellingen verdwijnen.")){DB=fresh();save();editId=null;renderAdmin();toast("Demo teruggezet")}}
});
if(location.hash==="#beheer")openAdmin();

