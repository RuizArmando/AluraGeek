//Archivo js para mostrar videojuegos segun que categoria, utilizado en all-product.html y all-products-admin.html
import { clientServices } from "../service/client-service.js";

const agregarJuego = (imagen, nombre, precio, id) =>{
  let linea = document.createElement("ul");
  let contenido = `
  <li><img class="videogame__img" src="${imagen}"></li>
  <li class="videogame__name">${nombre}</li>
  `;
  if(precio == "Juego gratuito"){
    contenido = contenido + `
    <li class="videogame__cost">${precio}</li>
    `;
  }else{
    contenido = contenido + `<li class="videogame__cost">$${precio}</li>`
  }
  contenido = contenido + `<a href="../screens/product.html?id=${id}" class="videogame__link">Ver Producto</a>`;
  linea.classList.add('videogame__box');
  linea.innerHTML = contenido;
  return linea;
}

const  table = {
  gratuito: document.querySelector('[data-gratuito]'),
  estrategia: document.querySelector('[data-estrategia]'),
  horror: document.querySelector('[data-horror]'),
  aventura: document.querySelector('[data-aventura]'),
  shooter: document.querySelector('[data-shooter]')
}

clientServices.listVideoGame().then((data) => {
  data.forEach((videogame) =>{
    switch(videogame.categoria){
      case "Juego gratuito": table.gratuito.appendChild(agregarJuego(videogame.imagen, videogame.nombre, "Juego gratuito", videogame.id)); break;
      case "Estrategia": table.estrategia.appendChild(agregarJuego(videogame.imagen, videogame.nombre, videogame.precio, videogame.id)); break;
      case "Horror": table.horror.appendChild(agregarJuego(videogame.imagen, videogame.nombre, videogame.precio, videogame.id)); break;
      case "Aventura": table.aventura.appendChild(agregarJuego(videogame.imagen, videogame.nombre, videogame.precio, videogame.id)); break;
      case "Shooter": table.shooter.appendChild(agregarJuego(videogame.imagen, videogame.nombre, videogame.precio, videogame.id)); break;
    }
  });
}).catch((error) => console.log(error));