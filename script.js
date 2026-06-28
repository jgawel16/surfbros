// Surfbro's — kleine helpers voor de placeholderpagina

document.addEventListener("DOMContentLoaded", function () {
  // Zet automatisch het huidige jaartal in de footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Aanmeldformulier: stuur op de achtergrond naar Google Forms ----
  // De bezoeker blijft op de pagina; we tonen daarna een bedankbericht.
  var form = document.getElementById("signup-form");
  var success = document.getElementById("form-success");
  var errorEl = document.getElementById("form-error");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var emailInput = document.getElementById("email");
      // De browser controleert al op een geldig e-mailadres (type="email" + required)
      if (!form.checkValidity()) {
        if (errorEl) errorEl.hidden = false;
        emailInput.focus();
        return;
      }
      if (errorEl) errorEl.hidden = true;

      var btn = form.querySelector("button[type=submit]");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Bezig…";
      }

      // Google Forms stuurt geen CORS-headers, dus we gebruiken mode:"no-cors".
      // We kunnen het antwoord toch niet lezen, dus we vuren het verzoek af
      // (fire-and-forget) en tonen meteen het bedankbericht. Zo loopt de
      // bezoeker nooit vast, ook niet bij een trage verbinding.
      var data = new FormData(form);
      fetch(form.action, { method: "POST", mode: "no-cors", body: data })
        .catch(function () { /* inzending mislukt? bezoeker hoeft dit niet te merken */ });

      // Korte "Bezig…" voor de beleving, daarna het bedankbericht.
      setTimeout(showSuccess, 600);
    });
  }

  function showSuccess() {
    if (form) form.hidden = true;
    if (success) {
      success.hidden = false;
      success.focus && success.focus();
    }
  }
});
