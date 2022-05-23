//ABRIR MENU WINDOWS
var windows = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');
var Elfondo = document.getElementById('fondo');

//FUNCION ACTIVAR
function activar(){
    menu.classList.add("activar");
}

//EVENTO
ico_menu.addEventListener('click',activar);

