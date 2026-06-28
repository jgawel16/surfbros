# Surfbro's — placeholder landingspagina

Een simpele, mobiel-vriendelijke one-page website om te inventariseren hoeveel
mensen zich als surfinstructeur willen aanmelden. De echte site (een platform
waar vaardige surfers betaald les geven) wordt later gebouwd.

De pagina informeert de bezoeker over het idee, laat de voordelen zien en
verleidt hem/haar om een e-mailadres achter te laten via een Google Form.

## Bestanden

| Bestand            | Wat het doet                                        |
| ------------------ | --------------------------------------------------- |
| `index.html`       | De volledige pagina (alle tekst staat hierin)       |
| `styles.css`       | De vormgeving (oceaan-kleuren, clean & modern)      |
| `script.js`        | Kleine helper (jaartal in de footer)                |
| `assets/`          | Map voor je eigen screenshots                       |

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

## ✅ Wat je nog moet doen

### 1. Screenshots toevoegen

Zie [`assets/README.md`](assets/README.md). Zoek in `index.html` naar
`SCREENSHOT-PLACEHOLDER`.

### 2. Tekst checken

Let in `index.html` vooral op de sectie **early-access** (de FOMO/voordeel-tekst):
vul daar het concrete voordeel in dat de eerste instructeurs krijgen.

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
