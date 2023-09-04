//Archivo js para ver el producto elegido en pagina html
import { clientServices } from "../service/client-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const iden = url.searchParams.get("id");

    if(iden == null){
        alert(iden);
    }else{

        const mostrarJuego = (nombre, precio, imagen, categoria, descripcion) =>{
            const contenedor = document.createElement("div");
            let contenido = `
            <h3 class="product__title">${nombre}</h3>
            <img class="product__img" src="${imagen}">
            <p class="product__description">${descripcion}</p>`;
            if(categoria == "Juego gratuito"){
                contenido = contenido + `<p class="product__price">Juego gratuito</p>`
            }else{
                contenido = contenido + `
                <p class="product__price">$${precio}</p>
                <p class="product__cataloge">Categoria principal: ${categoria}</p>`
            }
            contenedor.classList.add('product__conteiner');
            contenedor.innerHTML = contenido;
            return contenedor;
        }
        const product = document.querySelector("[data-product]");

        clientServices.detalleVideogame(iden).then((videogame) =>{    
            const view = mostrarJuego(videogame.nombre, videogame.precio, videogame.imagen, videogame.categoria, videogame.descripcion);
            product.appendChild(view);
        }).catch((error) => alert("Nel perro"));
    }
};

obtenerInformacion();