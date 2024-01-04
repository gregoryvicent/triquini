const jsField = document.querySelectorAll(".js-field"); // Elementos padres del Check
const allCheckList = document.querySelectorAll("div[data-selector=all]"); // Elementos padres del Check con la propiedad "data-selector=all"

// Recorremos cada elemento padre de los checks para asignar un evento "click"
jsField.forEach((element) => {
  element.addEventListener("click", () => {
    // const dataMatch = element.dataset.match;
    const dataResult = element.dataset.result;
    const dataSelector = element.dataset.selector;
    const r1Active = element.childNodes[1];

    if (dataSelector === "all") {
      if (dataResult === "1") markAllChecks("1");
      if (dataResult === "x") markAllChecks("x");
      if (dataResult === "2") markAllChecks("2");
    } else {
      if (r1Active.style.display === "block") {
        r1Active.style.display = "none";
        element.classList.remove("bg-light-pink"); // Remueve el fondo rosado de las casillas
        element.classList.add("bg-white"); // Agrega el fondo blanco de las casillas
      } else {
        r1Active.style.display = "block";
        element.classList.remove("bg-white"); // Remueve el fondo blanco de las casillas
        element.classList.add("bg-light-pink"); // Agrega el fondo rosado de las casillas
      }
    }
  });
});

// Funcion que nos permite marcar los checks con la propiedad "data-selector=all"
function markAllChecks(matchNumber) {
  allCheckList.forEach((elem) => {
    if (elem.dataset.result === matchNumber) {
      const checkBox = elem.childNodes[1];

      if (checkBox.style.display === "block") {
        checkBox.style.display = "none";
        elem.classList.add("bg-white"); // Agrega el fondo blanco de todas las casillas grupales (casilla 2 en 'index2.html')
        elem.classList.remove("bg-light-pink"); // Remueve el fondo rosado de todas las casillas grupales (casilla 2 en 'index2.html')
      } else {
        checkBox.style.display = "block";
        elem.classList.add("bg-light-pink"); // Agrega el fondo rosado de todas las casillas grupales (casilla 2 en 'index2.html')
        elem.classList.remove("bg-white"); // Remueve el fondo blanco de todas las casillas grupales (casilla 2 en 'index2.html')
      }
    }
  });
}
