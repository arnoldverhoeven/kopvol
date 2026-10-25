/* ============ DATA ============ */
const PH={pulhof:"img/pulhof.jpg",spikkel:"img/spikkel.jpg",ochtend:"img/ochtend.jpg",robijn:"img/robijn.jpg",tumbler:"img/tumbler.jpg"};
const IMG={pulhof:"img/pulhof-sq.jpg",spikkel:"img/spikkel-sq.jpg",ochtend:"img/ochtend-sq.jpg",robijn:"img/robijn-sq.jpg",tumbler:"img/tumbler-sq.jpg",
 ev1:PH.ochtend,ev2:PH.robijn,ev3:PH.spikkel,ev4:PH.tumbler};
document.querySelectorAll("img[data-src]").forEach(i=>{i.src=PH[i.dataset.src]});

const MENU={
 "Koffie":[["Espresso","Andy Roasters — single origin, wisselend",2.8],["Flat white","dubbele shot, fluweelzachte melk",4.2,"Favoriet"],["Cappuccino","",4],["Latte","ook met haver- of amandelmelk (+0,50)",4.2],["Iced latte / cold brew","het hele jaar door",4.5],["Matcha latte","ceremoniële matcha",4.8],["Babyccino / Puppyccino","voor de kleinste en de viervoeter",1.5]],
 "Thee & fris":[["Thee van Mélange","losse thee uit Mortsel — zwart, groen, kruiden",3.5],["Verse muntthee","met honing",3.8],["Gemberthee","verse gember, citroen",3.8],["Huisgemaakte iced tea","perzik-rozemarijn",4],["Kombucha van Figa","wisselende smaak",4.5],["Vers sapje","sinaas of appel-gember",4.2]],
 "Ontbijt":[["Zachtgekookt eitje met brioche-soldaatjes","met gezouten boter",8.5],["Briochebun met roerei","en bieslook",9.5],["Wentelteefje van brioche","met ahornsiroop en seizoensfruit",9,"Favoriet"],["Granola met yoghurt","huisgemaakte granola, fruit, honing",8],["Extra toppings","avocado, zalm, spek, geitenkaas",2.5]],
 "Lunch":[["Briochebun umami-champignons","gebakken champignons, truffelmayo, rucola",12.5],["Briochebun zalm","gerookte zalm, kruidenkaas, komkommer",13.5],["Briochebun New York pastrami","pastrami, augurk, mosterd",13.5],["Briochebun pulled chicken","of geitenkaas met honing",13,"Favoriet"],["Soep van de dag","met brioche",6.5]],
 "Zoet":[["Cookie van het huis","chocolade-zeezout — de must try",3.2,"Favoriet"],["Citrus muffin","",3.5],["Kaneelbroodje","met pistache",4],["Banana bread","met walnoot",3.8],["Taart van de dag","vraag aan de toog",4.5]]
};

const PRODUCTS=[
 {id:"pulhof",name:"Pulhof",sub:"Cappuccinotas · terracotta-roze",price:34,img:IMG.pulhof,full:PH.pulhof,badge:"Bestseller",stock:6,
  desc:"De tas waar het allemaal mee begon. Warm roze-terracotta glazuur over roodbakkende klei, met een bolle buik die je in twee handen neemt. Gemaakt voor cappuccino en flat white.",
  specs:[["Inhoud","300 ml"],["Hoogte","8,5 cm"],["Diameter","9 cm"],["Gewicht","± 310 g"],["Klei","Roodbakkend steengoed"],["Glazuur","Zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"spikkel",name:"Spikkel",sub:"Espressotas met schoteltje · crème gespikkeld",price:29,img:IMG.spikkel,full:PH.spikkel,badge:"Set",stock:9,
  desc:"Klein maar fijn: een espressotas met bijpassend schoteltje in crèmekleurig glazuur met donkere spikkels. Het schoteltje past ook perfect onder een koekje.",
  specs:[["Inhoud","120 ml"],["Hoogte","6 cm"],["Diameter","7 cm"],["Schoteltje","Ø 13 cm"],["Klei","Gespikkeld steengoed"],["Glazuur","Glanzend, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"ochtend",name:"Ochtend",sub:"Latte bowl · zand gespikkeld",price:36,img:IMG.ochtend,full:PH.ochtend,badge:"Nieuw",stock:4,
  desc:"Een brede, lage kom met oor — voor wie zijn latte of cortado graag met beide handen vasthoudt. Zandkleurig glazuur met een fijne spikkel, zoals de kopjes in de bar.",
  specs:[["Inhoud","350 ml"],["Hoogte","7 cm"],["Diameter","11 cm"],["Gewicht","± 340 g"],["Klei","Gespikkeld steengoed"],["Glazuur","Zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"robijn",name:"Robijn",sub:"Geribbelde mok · dieprood",price:38,img:IMG.robijn,full:PH.robijn,badge:"Nog 3",stock:3,
  desc:"Onze meest uitgesproken mok: diep robijnrood glazuur dat in de ribbels donkerder kleurt, met een crèmekleurige rand. Elke mok wordt met de hand geribbeld, dus geen twee zijn gelijk.",
  specs:[["Inhoud","280 ml"],["Hoogte","9 cm"],["Diameter","8,5 cm"],["Gewicht","± 330 g"],["Klei","Wit steengoed"],["Glazuur","Hoogglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]},
 {id:"tumbler",name:"Troyentenhof",sub:"Tumbler zonder oor · rode rand",price:27,img:IMG.tumbler,full:PH.tumbler,badge:"",stock:12,
  desc:"Een strakke beker zonder oor met een handgeschilderde rode rand — een knipoog naar ons logo. Ideaal voor flat white, thee of als pennenbakje op je bureau.",
  specs:[["Inhoud","220 ml"],["Hoogte","8 cm"],["Diameter","7,5 cm"],["Gewicht","± 260 g"],["Klei","Gespikkeld steengoed"],["Glazuur","Mat-zijdeglans, loodvrij"],["Vaatwasser","Ja"],["Microgolf","Ja"]]}
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

/* ============ STATE ============ */
const KEY="kopvol_v2";
let DB=load();
function load(){try{const d=JSON.parse(localStorage.getItem(KEY));if(d&&d.events)return d}catch(e){}return {events:structuredClone(SEED_EVENTS),regs:structuredClone(SEED_REGS),cart:[]}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const eur=n=>"€ "+n.toFixed(2).replace(".",",");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const DAYS=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],MON=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
function fmtDate(iso){const d=new Date(iso+"T12:00:00");return DAYS[d.getDay()]+" "+d.getDate()+" "+MON[d.getMonth()]+" "+d.getFullYear()}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),2400)}
function uid(){return Math.random().toString(36).slice(2,9)}
const I_CAL=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,I_CLK=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,I_EUR=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6.5A7 7 0 0 0 7.5 9M18 17.5A7 7 0 0 1 7.5 15M4 10.5h10M4 13.5h10"/></svg>`;
const ICON_CART='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>';

/* ============ HEADER / MENU ============ */
(function(){
 const root=document.documentElement,btn=$("#menubtn"),dr=$("#drawer"),lbl=$(".lbl",btn);
 function set(o){root.classList.toggle("menu-open",o);btn.setAttribute("aria-expanded",o);lbl.textContent=o?"Sluiten":"Menu"}
 btn.addEventListener("click",()=>set(!root.classList.contains("menu-open")));
 dr.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(root.classList.contains("menu-open")){set(false);btn.focus()}closeOverlays()}});
 matchMedia("(min-width:901px)").addEventListener("change",m=>{if(m.matches)set(false)});
 addEventListener("scroll",()=>$("#hdr").classList.toggle("scrolled",scrollY>8),{passive:true});
 const fixPad=()=>{document.documentElement.style.scrollPaddingTop=$("#hdr").offsetHeight+"px"};fixPad();addEventListener("resize",fixPad);
 /* actieve sectie */
 if("IntersectionObserver" in window){
  const links=[...$$("nav.main a"),...$$(".mbar a[href^='#']")];let lock=0;
  const setCur=id=>links.forEach(a=>a.setAttribute("aria-current",a.getAttribute("href")==="#"+id));
  const so=new IntersectionObserver(en=>{if(Date.now()<lock)return;en.forEach(e=>{if(e.isIntersecting)setCur(e.target.id)})},{rootMargin:"-40% 0px -55% 0px"});
  ["kaart","shop","events","verhaal","bezoek"].forEach(i=>{const s=document.getElementById(i);s&&so.observe(s)});
  document.addEventListener("click",e=>{const a=e.target.closest(".mbar a[href^='#'],nav.main a[href^='#'],.drawer a[href^='#']");if(a){lock=Date.now()+1200;setCur(a.getAttribute("href").slice(1))}});
  const ro=new IntersectionObserver(en=>en.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.12});
  $$(".reveal").forEach(el=>ro.observe(el));
 }else{$$(".reveal").forEach(el=>el.classList.add("in"))}
})();

/* ============ OPEN / GESLOTEN ============ */
(function(){
 const H={0:[9,16],1:[9,16],2:null,3:[9,16],4:[9,16],5:[9,16],6:[9,16]};
 try{
  const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Brussels",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date()),o={};p.forEach(x=>o[x.type]=x.value);
  const d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(o.weekday),h=(+o.hour)+(+o.minute)/60,t=H[d];let txt,closed=false;
  if(t&&h>=t[0]&&h<t[1]){txt="Nu open — tot "+t[1]+":00 u"}
  else{closed=true;let n=d,k=0;if(!(t&&h<t[0])){do{n=(n+1)%7;k++}while(!H[n])}txt="Nu gesloten — "+(k===0?"vandaag":k===1?"morgen":DAYS[n])+" open vanaf "+H[n][0]+":00 u"}
  $$("[data-opennow]").forEach(el=>{el.textContent=txt;el.classList.toggle("closed",closed)});
  const li=$('#hours li[data-d="'+d+'"]');li&&li.classList.add("today");
 }catch(e){}
})();

/* ============ KAART ============ */
(function(){
 const tabs=$("#tabs"),list=$("#menulist"),cats=Object.keys(MENU);
 cats.forEach((c,i)=>{const b=document.createElement("button");b.className="tab";b.type="button";b.role="tab";b.textContent=c;b.setAttribute("aria-selected",i===0);b.addEventListener("click",()=>show(c));tabs.appendChild(b)});
 function show(c){$$(".tab",tabs).forEach(b=>b.setAttribute("aria-selected",b.textContent===c));
  list.innerHTML=MENU[c].map(([n,s,p,t],i)=>`<div class="mi" style="animation-delay:${i*40}ms"><b>${esc(n)}${t?`<span class="tag">${esc(t)}</span>`:""}</b><span class="p">${eur(p)}</span>${s?`<small>${esc(s)}</small>`:""}</div>`).join("")}
 show(cats[0]);
})();

/* ============ OVERLAYS ============ */
function openOv(id){const o=$(id);o.classList.add("on");o.setAttribute("aria-hidden","false");document.documentElement.classList.add("ov-open")}
function closeOverlays(){$$(".ov.on").forEach(o=>{o.classList.remove("on");o.setAttribute("aria-hidden","true")});document.documentElement.classList.remove("ov-open")}
document.addEventListener("click",e=>{if(e.target.closest("[data-close]")||(e.target.classList.contains("ov")))closeOverlays()});

/* ============ SHOP ============ */
const cartCount=()=>DB.cart.reduce((a,c)=>a+c.q,0);
function renderProducts(){
 $("#products").innerHTML=PRODUCTS.map(p=>`<article class="prod reveal in" data-id="${p.id}">
  <div class="ph" data-view="${p.id}" role="button" tabindex="0" aria-label="Bekijk ${esc(p.name)}"><img src="${p.img}" alt="${esc(p.name)} — ${esc(p.sub)}" loading="lazy" width="640" height="640">${p.badge?`<span class="badge ${p.stock<=3?"low":""}">${esc(p.badge)}</span>`:""}</div>
  <div class="body"><h3>${esc(p.name)}</h3><span class="sub">${esc(p.sub)}</span>
   <div class="row"><span class="price">${eur(p.price)}</span><button class="add" type="button" data-add="${p.id}">${ICON_CART}In mandje</button></div></div></article>`).join("");
}
function updateCartBtn(){const n=cartCount(),el=$("#cartn");el.textContent=n;el.classList.toggle("on",n>0)}
function addToCart(id,q=1,btn,quiet){
 const p=PRODUCTS.find(x=>x.id===id),it=DB.cart.find(x=>x.id===id);const cur=it?it.q:0;
 if(cur+q>p.stock){toast("Nog maar "+p.stock+" op voorraad");return}
 if(it)it.q+=q;else DB.cart.push({id,q});save();updateCartBtn();
 if(btn){btn.classList.add("done");btn.innerHTML="✓ Toegevoegd";setTimeout(()=>{btn.classList.remove("done");btn.innerHTML=ICON_CART+"In mandje"},1400)}
 if(!quiet)toast(p.name+" zit in je mandje");
}
function shipping(sub,mode){return mode==="pickup"?0:(sub>=60?0:6.95)}
function renderCart(){
 const b=$("#cartbody"),f=$("#cartfoot");
 if(!DB.cart.length){b.innerHTML=`<div class="empty" style="margin-top:20px">Je mandje is nog leeg.<br><small>Kies een kopje uit het atelier.</small></div>`;f.innerHTML=`<a class="btn red" href="#shop" data-close style="width:100%">Naar de keramiek</a>`;return}
 const sub=DB.cart.reduce((a,c)=>a+PRODUCTS.find(p=>p.id===c.id).price*c.q,0);
 b.innerHTML=DB.cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return `<div class="ci"><img src="${p.img}" alt=""><div><b>${esc(p.name)}</b><small>${esc(p.sub)}</small><div class="qty" style="margin-top:8px"><button type="button" data-q="${p.id}" data-d="-1" aria-label="Minder">−</button><span>${c.q}</span><button type="button" data-q="${p.id}" data-d="1" aria-label="Meer">+</button></div></div><div><div class="lp">${eur(p.price*c.q)}</div></div><button class="rm" type="button" data-rm="${p.id}">Verwijderen</button></div>`}).join("");
 f.innerHTML=`<div class="tot"><div><span>Subtotaal</span><b>${eur(sub)}</b></div><div><span>Verzending</span><b>${sub>=60?"Gratis":eur(6.95)} <span class="free">${sub>=60?"✓ vanaf €60":""}</span></b></div><div><span>Afhalen in de bar</span><b>Gratis</b></div></div><button class="btn red" type="button" id="checkout" style="width:100%;margin-top:14px">Afrekenen</button><p style="margin:10px 0 0;font-size:12px;color:var(--muted);text-align:center">Veilig afrekenen via Shopzo · Bancontact, Payconiq, kaart</p>`;
}
function openCart(){renderCart();openOv("#cartov")}
function productModal(id){
 const p=PRODUCTS.find(x=>x.id===id);
 $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="pm"><img src="${p.full}" alt="${esc(p.name)}"><div class="info"><span class="kicker">Handgemaakt in Berchem</span><h3>${esc(p.name)}</h3><div class="sub">${esc(p.sub)}</div><p style="margin:0;font-size:15px;color:var(--muted)">${esc(p.desc)}</p><ul class="specs">${p.specs.map(([k,v])=>`<li><span>${esc(k)}</span><b>${esc(v)}</b></li>`).join("")}</ul><div class="row"><span class="price">${eur(p.price)}</span><div class="qty"><button type="button" data-mq="-1" aria-label="Minder">−</button><span id="mq">1</span><button type="button" data-mq="1" aria-label="Meer">+</button></div></div><div class="stock ${p.stock<=3?"low":""}">${p.stock<=3?"Nog maar "+p.stock+" beschikbaar":"Op voorraad — "+p.stock+" stuks"}</div><div class="row"><button class="btn red" type="button" data-madd="${p.id}" style="flex:1">${ICON_CART}In mandje</button></div></div></div>`;
 openOv("#modal");
}
function checkout(){
 const sub=DB.cart.reduce((a,c)=>a+PRODUCTS.find(p=>p.id===c.id).price*c.q,0);
 closeOverlays();
 $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="info" style="padding:28px 26px"><span class="kicker">Afrekenen</span><h3 style="font-size:30px;margin:8px 0 16px">Bijna <em class="f">van jou</em></h3>
 <form class="form" id="cform" novalidate>
  <div class="two"><label>Voornaam<input name="fn" required autocomplete="given-name"></label><label>Naam<input name="ln" required autocomplete="family-name"></label></div>
  <label>E-mail<input name="em" type="email" required autocomplete="email" placeholder="voor je bevestiging"></label>
  <div class="radio"><label><input type="radio" name="ship" value="pickup" checked>Afhalen in de bar<small>gratis</small></label><label><input type="radio" name="ship" value="post">Verzenden in België<small>${sub>=60?"gratis":eur(6.95)}</small></label></div>
  <div id="addr" style="display:none"><label>Adres<input name="addr" autocomplete="street-address" placeholder="Straat en nummer, postcode, gemeente"></label></div>
  <div class="tot"><div><span>Subtotaal</span><b>${eur(sub)}</b></div><div><span>Verzending</span><b id="shipv">Gratis</b></div><div class="big"><span>Totaal</span><b id="totv">${eur(sub)}</b></div></div>
  <div class="err" id="cerr"></div>
  <button class="btn red" type="submit" style="width:100%">Betalen via Shopzo →</button>
  <p style="margin:0;font-size:12px;color:var(--muted);text-align:center">Je wordt doorgestuurd naar de beveiligde betaalpagina (Bancontact, Payconiq, Visa/Mastercard).</p>
 </form></div>`;
 openOv("#modal");
 const f=$("#cform");
 f.addEventListener("change",()=>{const m=f.ship.value,s=shipping(sub,m);$("#addr").style.display=m==="post"?"block":"none";$("#shipv").textContent=s?eur(s):"Gratis";$("#totv").textContent=eur(sub+s)});
 f.addEventListener("submit",e=>{e.preventDefault();const fn=f.fn.value.trim(),ln=f.ln.value.trim(),em=f.em.value.trim();
  if(!fn||!ln||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){$("#cerr").textContent="Vul je naam en een geldig e-mailadres in.";return}
  if(f.ship.value==="post"&&f.addr.value.trim().length<8){$("#cerr").textContent="Vul je adres in voor verzending.";return}
  const nr="KV-"+new Date().getFullYear()+"-"+String(Math.floor(1000+Math.random()*9000));
  DB.cart=[];save();updateCartBtn();
  $("#modalbox").innerHTML=`<button class="x" type="button" data-close aria-label="Sluiten">×</button><div class="ok"><div class="ico">✓</div><h3>Bedankt, ${esc(fn)}!</h3><p>Bestelling <b>${nr}</b> is geplaatst. Je krijgt een bevestiging op ${esc(em)}.<br>${f.ship.value==="pickup"?"Je kopjes staan binnen 2 werkdagen klaar aan de toog.":"We verzenden binnen 2 werkdagen met bpost."}</p><p style="font-size:13px"><em>Demo: in de echte webshop gebeurt de betaling via Shopzo.</em></p><button class="btn red" type="button" data-close>Verder kijken</button></div>`});
}
document.addEventListener("click",e=>{
 const t=e.target;
 const a=t.closest("[data-add]");if(a){addToCart(a.dataset.add,1,a);return}
 const v=t.closest("[data-view]");if(v){productModal(v.dataset.view);return}
 if(t.closest("#cartbtn")){openCart();return}
 const q=t.closest("[data-q]");if(q){const it=DB.cart.find(x=>x.id===q.dataset.q),p=PRODUCTS.find(x=>x.id===q.dataset.q);const n=it.q+(+q.dataset.d);if(n>p.stock){toast("Nog maar "+p.stock+" op voorraad");return}if(n<=0)DB.cart=DB.cart.filter(x=>x.id!==it.id);else it.q=n;save();updateCartBtn();renderCart();return}
 const r=t.closest("[data-rm]");if(r){DB.cart=DB.cart.filter(x=>x.id!==r.dataset.rm);save();updateCartBtn();renderCart();return}
 const mq=t.closest("[data-mq]");if(mq){const s=$("#mq");s.textContent=Math.max(1,Math.min(12,+s.textContent+(+mq.dataset.mq)));return}
 const ma=t.closest("[data-madd]");if(ma){addToCart(ma.dataset.madd,+$("#mq").textContent,null,true);closeOverlays();openCart();return}
 if(t.closest("#checkout")){checkout();return}
});
$("#products").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.dataset.view)productModal(e.target.dataset.view)});
renderProducts();updateCartBtn();

/* ============ EVENTS ============ */
let evFilter="all";
const taken=id=>DB.regs.filter(r=>r.ev===id).reduce((a,r)=>a+r.n,0);
function upcoming(){const today=new Date();today.setHours(0,0,0,0);return DB.events.filter(e=>e.pub&&new Date(e.date+"T23:59:59")>=today).sort((a,b)=>a.date.localeCompare(b.date))}
function renderEvents(){
 const list=upcoming().filter(e=>evFilter==="all"||e.type===evFilter);
 $("#evlist").innerHTML=list.length?list.map(e=>{const left=e.cap-taken(e.id),d=new Date(e.date+"T12:00:00");
  return `<article class="ev reveal in"><div class="ph">${e.img?`<img src="${e.img}" alt="" loading="lazy">`:""}<div class="date"><b>${d.getDate()}</b><small>${MON[d.getMonth()]}</small></div><span class="type">${e.type==="coupevol"?"Coupevol":"Workshop"}</span></div>
  <div class="body"><h3>${esc(e.title)}</h3><div class="meta"><span>${I_CAL} ${esc(fmtDate(e.date))}</span><span>${I_CLK} ${esc(e.time)}</span></div><p>${esc(e.desc)}</p>
  <div class="row"><div><span class="price">${eur(e.price)}</span><div class="spots ${left<=0?"full":left<=3?"low":""}">${left<=0?"Volzet — wachtlijst":left<=3?"Nog "+left+" plaats"+(left===1?"":"en"):left+" plaatsen vrij"}</div></div><button class="btn ${left<=0?"ghost":"red"} sm" type="button" data-signup="${e.id}">${left<=0?"Wachtlijst":"Inschrijven"}</button></div></div></article>`}).join("")
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
$("#evfilters").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(!b)return;evFilter=b.dataset.f;$$("[data-f]").forEach(x=>x.setAttribute("aria-selected",x===b));renderEvents()});
document.addEventListener("click",e=>{const s=e.target.closest("[data-signup]");if(s)signupModal(s.dataset.signup)});
renderEvents();

/* ============ MINI-CMS ============ */
const PIN="2600";let admAuth=false,admTab="events",editId=null;
function openAdmin(){$("#adm").classList.add("on");$("#adm").setAttribute("aria-hidden","false");document.documentElement.classList.add("adm-open");renderAdmin();$("#adm").scrollTop=0}
function closeAdmin(){document.documentElement.classList.remove("adm-open");$("#adm").classList.remove("on");$("#adm").setAttribute("aria-hidden","true");renderEvents()}
function renderAdmin(){
 const b=$("#admbody");
 if(!admAuth){b.innerHTML=`<div class="pin card"><h3>Inloggen</h3><p style="color:var(--muted);font-size:14px;margin:0 0 14px">Demo-pincode: <b>2600</b></p><form class="form" id="pinform"><input name="pin" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="••••" aria-label="Pincode"><div class="err" id="perr"></div><button class="btn red" type="submit">Open beheer</button></form></div>`;
  $("#pinform").addEventListener("submit",e=>{e.preventDefault();if(e.target.pin.value===PIN){admAuth=true;renderAdmin()}else $("#perr").textContent="Foute pincode."});return}
 const totalRegs=DB.regs.reduce((a,r)=>a+r.n,0),up=upcoming().length;
 b.innerHTML=`<div class="adm-tabs"><button class="tab" data-at="events" aria-selected="${admTab==="events"}" type="button">Events &amp; workshops</button><button class="tab" data-at="regs" aria-selected="${admTab==="regs"}" type="button">Inschrijvingen (${DB.regs.length})</button></div>
 <div class="stat"><div><b>${DB.events.length}</b><small>events in beheer</small></div><div><b>${up}</b><small>gepubliceerd &amp; komend</small></div><div><b>${totalRegs}</b><small>ingeschreven personen</small></div></div>
 <div id="admtab"></div>`;
 $$("[data-at]").forEach(x=>x.addEventListener("click",()=>{admTab=x.dataset.at;renderAdmin()}));
 admTab==="events"?renderAdmEvents():renderAdmRegs();
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
  <label style="flex-direction:row;align-items:center;gap:10px;display:flex"><input type="checkbox" name="pub" ${!e||e.pub?"checked":""} style="width:18px;height:18px;min-height:0;accent-color:var(--terra)">Gepubliceerd op de website</label>
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
 if(e.target.closest("[data-reset]")){if(confirm("Demo-data terugzetten? Je eigen events en inschrijvingen verdwijnen.")){DB={events:structuredClone(SEED_EVENTS),regs:structuredClone(SEED_REGS),cart:[]};save();editId=null;updateCartBtn();renderAdmin();toast("Demo teruggezet")}}
});
if(location.hash==="#beheer")openAdmin();
