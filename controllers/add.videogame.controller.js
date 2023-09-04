//Archivos js para agregar nuevo videojuego en modo administrador
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const toastr = document.getElementById("messange");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    let newvideogame = {
        imagen: document.getElementById("product__date").value,
        categoria: document.getElementById("product__opction").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        descripcion: document.getElementById("descripcion").value,
        codigo: document.getElementById("codigo").value
    }
    clientServices.addVideoGame(newvideogame.nombre, newvideogame.precio, newvideogame.imagen, newvideogame.categoria, newvideogame.descripcion, newvideogame.codigo).then(respuesta => {}).catch(err => console.log(Error))
    openToastr();
});

const openToastr = () => {
    toastr.style.display = 'flex';

    closeToastr();
}

const closeToastr = () => {
    setTimeout(()=> {
        toastr.style.display = 'none';
    }, 3500)
}