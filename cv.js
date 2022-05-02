'use strict'

//Desplegar el menú

//Creamos dos variables, tanto la del boton menu como el menu desplegable

var mostrar = document.querySelector('.mainbox ul');
var botonmenu = document.getElementById('iconomenu');

//Creamos el evento, con click y creamos una función

botonmenu.addEventListener('click', desplegar, false);

//La función la pasamos un parámetro, event, llamamos a la clase show que se va hacer que el menu se muestre en block, y cancelamos el evento con preventDefault al volverle a clicar

function desplegar(event){
    this.classList.toggle('show');
    mostrar.classList.toggle('show');
    event.preventDefault();
};
    
//Con toogle estamos alternado entre el id y la clase, llamamos a la clase que le hemos indicado el estilo en css, en este caso show

//Evento para la flecha hacia arriba de la pagina
var iconoflecha = document.querySelector('flecha');
iconoflecha.addEventListener('click', arriba);

function arriba(e){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    }

    )
}