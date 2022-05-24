//ABRIR MENU WINDOWS
var windows = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');

var Elfondo = document.getElementById('fondo');

var ventana = document.getElementById('ventana')
var ico_carpeta = document.getElementById('ico_carpeta');
var cruz = document.getElementById('cruz');

//FUNCION ACTIVAR WINDOWS
function activar(){
    menu.classList.add("activar");
}

//EVENTO 
ico_menu.addEventListener('click',activar);

//FUNCION DESACTIVAR WINDOWS
function desactivar(){
    menu.classList.add("desactivar");
}

Elfondo.addEventListener('click',desactivar);


//FUNCION ACTIVAR CENTANA DE CARPETA
function activar2(){
    ventana.classList.add("activar");
}
//EVENTO
ico_carpeta.addEventListener('click', activar2);

//FUNCION DESACTIVAR VENTANA DE CARPETA
function desactivar2(){
    ventana.classList.add("desactivar");
}

cruz.addEventListener('click',desactivar2);