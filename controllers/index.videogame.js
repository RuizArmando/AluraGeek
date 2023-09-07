//Archivo js para mostrar videojuegos en el index
import { clientServices } from "../service/client-service.js";

const agregarJuego = (nombre, precio, imagen, categoria, id, etiqueta) =>{
  const linea = document.createElement("ul");
  let contenido = `
    <li><img class="${etiqueta}__img" src="${imagen}"></li>
    <li class="${etiqueta}__name">${nombre}</li>
    `;
  if(categoria == "Juego gratuito"){
    contenido = contenido + `
    <li class="${etiqueta}__cost">Juego gratuito</li>
    `;
  }else{
    contenido = contenido + `
    <li class="${etiqueta}__cost">$${precio}</li>
    `;
  }
    contenido = contenido + `
    <a href="screens/product.html?id=${id}" class="${etiqueta}__link">Ver producto</a>`;
    linea.classList.add(`${etiqueta}__box`);
    linea.innerHTML = contenido;
    return linea;
};

const shooter = document.querySelector("[data-shooter]");
const horror = document.querySelector("[data-horror]");
const free = document.querySelector("[data-free]");

clientServices.listVideoGame().then((data) => {
  let gameShooter = 6;
  let gameHorror = 6;
  let gameFree = 6;
  data.forEach((videogame) =>{
    if(videogame.categoria == "Shooter" && gameShooter >= 0){
        const nuevaLinea = agregarJuego(videogame.nombre, videogame.precio, videogame.imagen, videogame.categoria, videogame.id, "new");
        shooter.appendChild(nuevaLinea);
        gameShooter--;
    }
    if(videogame.categoria == "Horror" && gameHorror >= 0){
      const nuevaLinea = agregarJuego(videogame.nombre, videogame.precio, videogame.imagen, videogame.categoria, videogame.id, "top");
      horror.appendChild(nuevaLinea);
      gameHorror--;
    }
    if(videogame.categoria == "Juego gratuito" && gameFree >= 0){
      const nuevaLinea = agregarJuego(videogame.nombre, videogame.precio, videogame.imagen, videogame.categoria, videogame.id, "free");
      free.appendChild(nuevaLinea);
      gameFree--;
    }
  });
}).catch((error) => alert(error));