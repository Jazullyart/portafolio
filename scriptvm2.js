//Proyectos

var stdm = document.getElementById("salatorredm");
var ste = document.getElementById("salatorree");
var biblio = document.getElementById("biblio30");

stdm.style.display = "block";
ste.style.display = "none";
biblio.style.display = "none";

function mostrarSalaTorreDM() {
  stdm.style.display = "block";
  ste.style.display = "none";
  biblio.style.display = "none";
}

function mostrarSalaTorreE() {
  stdm.style.display = "none";
  ste.style.display = "block";
  biblio.style.display = "none";
}

function mostrarBiblio() {
  stdm.style.display = "none";
  ste.style.display = "none";
  biblio.style.display = "block";
}
