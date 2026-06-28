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

## ✅ Wat je nog moet doen

### 1. Je Google Form koppelen (e-mails verzamelen)

1. Maak een Google Form met één veld: e-mailadres (eventueel + naam).
2. Klik rechtsboven op **Verzenden** (Send) → kies het **`< >`** (embed)-icoon.
3. Kopieer de `<iframe …>` code en zet `width="100%"`.
4. Open `index.html`, zoek naar **`GOOGLE FORM KOMT HIER`** en vervang het
   `<div class="form-card">…</div>` blok door jouw iframe.

### 2. Screenshots toevoegen

Zie [`assets/README.md`](assets/README.md). Zoek in `index.html` naar
`SCREENSHOT-PLACEHOLDER`.

### 3. Tekst checken

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
