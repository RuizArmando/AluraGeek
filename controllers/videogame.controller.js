import { clientServices } from "../service/client-service.js";

const agregarNuevoJuego = (nombre, precio, imagen, id) =>{
  const linea = document.createElement("ul");
  let contenido = `
    <li><img class="videogame__img" src="${imagen}"></li>
    <li class="videogame__name">${nombre}</li>
    <li class="videogame__cost">$${precio}</li>
    <a href="../screens/product.html?id=${id}" class="videogame__link">Ver videojuego</a>
    `;
  linea.classList.add('videogame__box');
  linea.innerHTML = contenido;
  return linea;
};

const table = document.getElementById("videogame__nav");

clientServices.listVideoGame().then((data) => {
  data.forEach((videogame) =>{
    if(videogame.categoria != "Juego gratuito"){
      const nuevaLinea = agregarNuevoJuego(videogame.nombre, videogame.precio, videogame.imagen, videogame.id);
      table.appendChild(nuevaLinea);
    }
  });
}).catch((error) => console.log(error));