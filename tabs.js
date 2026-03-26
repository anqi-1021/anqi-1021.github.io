 
function openWork(evt, tabName) {
  let i, tabcontent, tablinks;

  // Ocultar todo el contenido
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Quitar clase active de todos los botones
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Mostrar el tab seleccionado
  document.getElementById(tabName).style.display = "block";

  // Activar botón
  evt.currentTarget.classList.add("active");
}

// Abrir el primer tab por defecto
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablinks").click();
});
 


 
function openLang(evt, tabName) {
  let i, tabcontent2, tablinks2;

  // Ocultar todo el contenido
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  // Quitar clase active de todos los botones
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].classList.remove("active");
  }

  // Mostrar el tab seleccionado
  document.getElementById(tabName).style.display = "block";

  // Activar botón
  evt.currentTarget.classList.add("active");
}

// Abrir el primer tab por defecto
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablinks2").click();
});
 