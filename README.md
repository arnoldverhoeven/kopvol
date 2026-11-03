# KOPVOL — website-concept

Concept voor [KOPVOL koffiebar](https://www.instagram.com/kopvol.koffiebar/), Troyentenhoflaan 42, Berchem — door AGV IT Consulting.

- `index.html` + `kopvol.js` — eerste ontwerpvariant (root); statische site, geen build nodig
- `img/`, `fonts/` — foto's en ingebedde lettertypes (Fraunces, Figtree — OFL)
- `_headers`, `robots.txt`, `sitemap.xml` — Netlify-headers (CSP) en SEO-basis
- Webshop en workshops werken in demo-modus (localStorage). Beheer: pincode 2600.
- `v2/` — tweede ontwerpvariant (zelfde inhoud en palet, andere typografie en opbouw); deelt de foto's in `img/`, eigen fonts in `v2/fonts/`
- `v3/` — derde versie na feedback van KOPVOL: minder tekst, keramiek als teaser (te koop in de bar), tafelreservatie vanaf 6 personen met instelbare openingsuren/sluitingsdagen/tafels in het mini-CMS, menukaart achter de knop Menu
- Volgende stap: Shopzo-koppeling voor de keramiek, Supabase voor events/inschrijvingen.
