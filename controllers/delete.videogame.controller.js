import { clientServices } from "../service/client-service.js";

const mensajeBorrado = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.open(`../screens/error.html=?${id}`, "_self")
    }

    clientServices.deleteVideoGame(id).then((respuesta) =>{
        let contenido = `
        <img class="error__img" src="../assets/img/error.png">
        <h1 class="error__messenger">El videojuego</h1>
        <h4 class="error__messenger">a sido eliminado con exito</h4>
        <a href="../screens/all-products-admin.html" class="error__link">Regresar a la pestaña anterior</a>
        `;
        const linea = document.querySelector('[data-delete]');
        linea.innerHTML = contenido;
    }).catch((err) => alert(err));
}

mensajeBorrado();