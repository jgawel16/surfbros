# Screenshots

Zet hier je eigen screenshots van het platform neer en geef ze duidelijke namen, bijvoorbeeld:

- `screenshot-profiel.png` — het instructeursprofiel (stap 1)
- `screenshot-zoeken.png` — zoeken & reviews (stap 2)
- `screenshot-boeking.png` — boeking & betaling (stap 3)

## Hoe vervang je een placeholder door een echte screenshot?

Open `index.html` en zoek naar `SCREENSHOT-PLACEHOLDER`. Vervang dan het
bijbehorende `<div class="phone-mock">…</div>` blok door je afbeelding,
bijvoorbeeld:

```html
<div class="phone-mock">
  <img src="assets/screenshot-profiel.png" alt="Het instructeursprofiel" />
</div>
```

Tip: portret-screenshots (verhouding ongeveer 9:19) passen het mooist in de
telefoon-mockup. Houd bestanden klein (< 300 KB) zodat de pagina snel laadt.
