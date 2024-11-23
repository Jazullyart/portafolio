//Proyectos

var animeost = document.getElementById("animeost");
var juanga = document.getElementById("juanga");
var alytum = document.getElementById("alytum");
var viajemic = document.getElementById("viajemic");
var esc = document.getElementById("laesc");

animeost.style.display = "block";
juanga.style.display = "none";
alytum.style.display = "none";
viajemic.style.display = "none";
esc.style.display = "none";

function mostrarAnimeOst() {
  animeost.style.display = "block";
  juanga.style.display = "none";
  alytum.style.display = "none";
  viajemic.style.display = "none";
  esc.style.display = "none";
}

function mostrarJuanga() {
  animeost.style.display = "none";
  juanga.style.display = "block";
  alytum.style.display = "none";
  viajemic.style.display = "none";
  esc.style.display = "none";
}

function mostrarAyT() {
  animeost.style.display = "none";
  juanga.style.display = "none";
  alytum.style.display = "block";
  viajemic.style.display = "none";
  esc.style.display = "none";
}

function mostrarViaje() {
  animeost.style.display = "none";
  juanga.style.display = "none";
  alytum.style.display = "none";
  viajemic.style.display = "block";
  esc.style.display = "none";
}

function mostrareEscultura() {
  animeost.style.display = "none";
  juanga.style.display = "none";
  alytum.style.display = "none";
  viajemic.style.display = "none";
  esc.style.display = "block";
}
