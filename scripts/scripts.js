function mostrarSeccion(idSeccion) {

  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => seccion.classList.remove('visible'));


  const seccionSeleccionada = document.getElementById(idSeccion);
  if (seccionSeleccionada) {
    seccionSeleccionada.classList.add('visible');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("ul li");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {

      this.classList.add("animate__animated", "animate__headShake");


      setTimeout(() => {
        this.classList.remove("animate__animated", "animate__headShake");
      }, 1000);


    });
  });
});

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);

  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
}

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
})