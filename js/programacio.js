// VÍNCULO CON LA ETIQUETA
var ico_carpeta = document.getElementById('menu');
var ventana =  document.getElementById('ventana');

//FUNCIONES
function activar(){
   ventana.classList.add("activo");
}

//EVENTO
ico_carpeta.addEventListener('click', activar);