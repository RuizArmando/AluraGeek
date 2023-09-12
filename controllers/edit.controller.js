import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

//const toastr = document.getElementById("messange");

function obtenerInformacion(){
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.open(`../screens/error.html=?${id}`, "_self")
    }

    const game = {
        imagen: document.getElementById('product__date'),
        categoria: document.getElementById('product__opction'),
        nombre: document.getElementById('nombre'),
        precio: document.getElementById('precio'),
        descripcion: document.getElementById('descripcion'),
        codigo: document.getElementById('codigo')
    }

    clientServices.detalleVideogame(id).then((videogame) =>{
        game.imagen.value = videogame.imagen;
        game.categoria.value = videogame.categoria;
        game.nombre.value = videogame.nombre;
        game.precio.value = videogame.precio;
        game.descripcion.value = videogame.descripcion;
        game.codigo.value = videogame.codigo;
        if(videogame.categoria == "Juego gratuito"){
            game.precio.disabled = true;
            game.codigo.disabled = true;
        }
    });
};

window.addEventListener('load', obtenerInformacion);

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const game = {
        imagen: document.getElementById('product__date').value,
        categoria: document.getElementById('product__opction').value,
        nombre: document.getElementById('nombre').value,
        precio: document.getElementById('precio').value,
        descripcion: document.getElementById('descripcion').value,
        codigo: document.getElementById('codigo').value
    }
    clientServices.actualizarVideojuego(game.nombre, game.precio, game.imagen, game.categoria, game.descripcion, game.codigo, id).then(() => {
        mensaje();
    })
    //openToastr();
});

function mensaje(){
    window.open('../screens/message.edit.html', '_self');
}

/*const openToastr = () => {
    toastr.style.display = 'flex';

    closeToastr();
}

const closeToastr = () => {
    setTimeout(()=> {
        toastr.style.display = 'none';
    }, 3500)
}*/