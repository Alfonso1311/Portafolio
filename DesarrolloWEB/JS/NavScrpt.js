window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll > 3){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
})

/***********    SELECT MENU    ***********/
/*
const encabezados = document.querySelectorAll('.contenedor .encabezado');
const enlaces = document.querySelectorAll('#enlaces a');

const observer = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            const id = '#' + entrada.target.id;
            history.pushState({}, entrada.target.innerText, id);

            enlaces.forEach(enlace => {
                enlace.classList.remove('activo');
                
                const href = enlace.attributes.href.nodeValue;

                if(href === id){
                    enlace.classList.add('activo');
                }
            });
        }
    });
}, {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px'
});

encabezados.forEach(encabezado => {
    observer.observe(encabezado);
});
*/

/***********    SLIDE   *************/

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




