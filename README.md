# Surfbro's — placeholder landingspagina

Een simpele, mobiel-vriendelijke one-page website om te inventariseren hoeveel
mensen zich als surfinstructeur willen aanmelden. De echte site (een platform
waar vaardige surfers betaald les geven) wordt later gebouwd.

De pagina informeert de bezoeker over het idee, laat de voordelen zien en
verleidt hem/haar om een e-mailadres achter te laten via een Google Form.
De huisstijl (navy + teal, script-logo) volgt de echte Surfbro's-app.

## Tweetalig (NL / EN)

De site is volledig tweetalig. Rechtsboven zit een **NL / EN**-schuifje.
De keuze wordt onthouden (in de browser) en nieuwe bezoekers krijgen
automatisch Nederlands of Engels op basis van hun browsertaal.

Alle teksten staan in `script.js` in het object `I18N` (een blok `nl` en een
blok `en`). Wil je een tekst aanpassen? Pas 'm in **beide** talen aan. Elk
stukje tekst op de pagina is gekoppeld via een `data-i18n="..."`-sleutel in
`index.html`.

## Bestanden

| Bestand            | Wat het doet                                          |
| ------------------ | ---------------------------------------------------- |
| `index.html`       | De paginastructuur (met `data-i18n`-sleutels)        |
| `styles.css`       | De vormgeving (navy + teal, clean & modern)          |
| `script.js`        | Vertalingen (NL/EN), taalwissel en het formulier     |
| `assets/`          | Map voor je app-screenshots                          |

## E-mailcapture (al gekoppeld)

Het aanmeldformulier op de pagina is een **eigen formulier** dat op de
achtergrond naar Google Forms stuurt. De bezoeker blijft op de site, vult zijn
e-mail in en krijgt direct een bedankbericht — hij wordt **niet** naar Google
doorgestuurd. De inzendingen komen binnen in de Google Form "Surfbro's
newsletter" (en de gekoppelde Google Sheet).

- Endpoint en veld-ID staan in `index.html` (`<form id="signup-form">`).
- E-mailveld = `entry.1216709819`.
- Wil je een veld toevoegen (bv. naam)? Voeg de vraag toe in Google Forms, zoek
  het nieuwe `entry.xxxx`-ID op en voeg een extra `<input>` met die `name` toe.

> Let op: tijdens het bouwen is er één testinzending verstuurd
> (`test-verwijderen@surfbros-test.nl`). Verwijder die rij even in je Sheet.

## Bezoekers tellen (conversie meten)

Om te zien hoeveel % van de bezoekers zich aanmeldt, tel je **unieke bezoekers**
(de noemer) naast je **aanmeldingen** (de teller, uit Google Forms).

Hiervoor is **GoatCounter** ingebouwd — gratis, cookieloos en zonder verplichte
toestemmingsbanner (AVG-vriendelijk). De aanmelding wordt bovendien als
`signup`-event meegestuurd, zodat je bezoekers én aanmeldingen in één dashboard
ziet.

**Aanzetten (~2 min):**
1. Maak een gratis account op <https://www.goatcounter.com/>.
2. Je krijgt een adres zoals `https://JOUWCODE.goatcounter.com`.
3. In `index.html`, onderaan, vervang **`JOUWCODE`** door jouw code
   (in `data-goatcounter="https://JOUWCODE.goatcounter.com/count"`).

Zolang `JOUWCODE` niet is ingevuld, wordt er niets geteld (geen kwaad). Liever
een andere tool (Cloudflare Web Analytics, Plausible, GA4)? Laat het weten.

## ✅ Wat je nog moet doen

### 1. Screenshots toevoegen (belangrijkste)

De site laadt drie app-screenshots uit `assets/`. Upload ze met deze exacte namen:

- `assets/app-home.png` — startscherm (hero)
- `assets/app-profile.png` — instructeursprofiel (stap 1)
- `assets/app-search.png` — zoekresultaten (stap 2)

Zie [`assets/README.md`](assets/README.md) voor de stap-voor-stap upload via
GitHub. Zolang een bestand ontbreekt toont de site een nette tijdelijke plek.

### 2. Tekst checken

De FOMO/voordeel-tekst staat in `script.js` onder de sleutel `fomo.lead`
(in `nl` én `en`). Vul daar het concrete voordeel in dat de eerste surfbro's
krijgen.

## 🚀 Live zetten met GitHub Pages

1. Push deze bestanden naar GitHub (zit in de branch
   `claude/surf-instructor-placeholder-zweq0c`, of merge naar `main`).
2. Ga op GitHub naar **Settings → Pages**.
3. Bij **Source** kies je **Deploy from a branch**.
4. Selecteer de branch en map **`/ (root)`**, klik **Save**.
5. Na ~1 minuut staat je site op
   `https://<jouw-gebruikersnaam>.github.io/surfbros/`.

> Tip: deze pagina heeft Open Graph-tags, dus als je de link in een groepschat
> deelt verschijnt er een nette preview met titel en omschrijving.

## Lokaal bekijken

Open simpelweg `index.html` in je browser, of start een mini-server:

```bash
python3 -m http.server 8000
# bekijk daarna http://localhost:8000
```
