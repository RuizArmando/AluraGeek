function starValue(){
    let option = document.getElementById('product__opction');
    option.addEventListener('blur', validarOpcion);
    option.addEventListener('click', validarOpcion);
}

function validarOpcion(){
    let valorOpcion = document.getElementById('product__opction').value;
    let videojuego = {
        precio: document.getElementById('precio'),
        codigo: document.getElementById('codigo')
    }
    if(valorOpcion == "Juego gratuito"){
        videojuego.precio.value = 0;
        videojuego.codigo.value = "N/A";
        videojuego.precio.disabled = true;
        videojuego.codigo.disabled = true;
    }else{
        videojuego.precio.value = '';
        videojuego.codigo.value = "";
        videojuego.precio.disabled = false;
        videojuego.codigo.disabled = false;
    }
}


window.addEventListener('load', starValue)