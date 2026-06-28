// Surfbro's — kleine helpers voor de placeholderpagina

// Zet automatisch het huidige jaartal in de footer
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
