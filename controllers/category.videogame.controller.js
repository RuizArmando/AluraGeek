//Archivo js para mostrar videojuegos segun que categoria, utilizado en all-product.html y all-products-admin.html
import { clientServices } from "../service/client-service.js";

const url = new URL(window.location);
const ide = url.searchParams.get("id");

const agregarJuego = (imagen, nombre, precio, id) =>{
  let linea = document.createElement("ul");
  let contenido = `
  <li><img class="videogame__img" src="${imagen}"></li>
  <li class="videogame__name">${nombre}</li>
  `;
  if(precio == 0){
    contenido = contenido + `
    <li class="videogame__cost">Juego gratuito</li>
    <a href="../screens/product.html?id=${id}" class="videogame__link">Ver Producto</a>`;
  }else{
    contenido = contenido + `
    <li class="videogame__cost">$${precio}</li>
    <a href="../screens/product.html?id=${id}" class="videogame__link">Ver Producto</a>`;
  }
  linea.classList.add('videogame__box');
  linea.innerHTML = contenido;
  return linea;
}

const usoCategoria = () =>{
  let line = document.createElement("section");
  let con = ""
  if(ide.includes("Juego")){
    con = `
    <h1 class="videogame__title">${ide}</h1>
    <div class="videogame__category">
      <nav class="videogame__nav" data-category></nav>
    </div>`;
  }else{
    con = `
    <h1 class="videogame__title">Juegos de ${ide}</h1>
    <div class="videogame__category">
      <nav class="videogame__nav" data-category></nav>
    </div>`;
  }
  line.classList.add('videogame');
  line.innerHTML = con;
  return line
}

const categoria = document.querySelector('[data-videogame]');
categoria.appendChild(usoCategoria());

const  table = document.querySelector('[data-category]');

clientServices.listVideoGame().then((data) => {
  data.forEach((videogame) =>{
    if(videogame.categoria == ide){
      table.appendChild(agregarJuego(videogame.imagen, videogame.nombre, videogame.precio, videogame.id));
    }
  });
}).catch((error) => console.log(error));