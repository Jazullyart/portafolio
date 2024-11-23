// Mostrar el botón cuando se baja en la página
const scrollToTopButton = document.getElementById("irarriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Funcionalidad para llevar al inicio de la página
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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
