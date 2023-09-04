//Archivo js que permite la busqueda de un videojuego
import { clientServices } from "../service/client-service.js";

//Metodo que detecta cuando se escribe un titulo
function searchStar(){
    let searchInput = document.getElementById('search__input');

    searchInput.addEventListener('keyup', searchValue);
    searchInput.addEventListener('blur', searchValue);
}

//Evaluacion del titulo en la db conforme se esta escribiendo
let searchValue = () =>{
    let searchInput = document.getElementById('search__input');
    let game = document.querySelector('[data-videogame]');
    let table = document.querySelector('[data-search]');
    let view = 0;
    if(searchInput.value == ""){
        game.style.display = 'block';
        eliminarError(table);
        eliminarListado(table);
    }else{
        game.style.display = 'none';
        eliminarListado(table);
        clientServices.listVideoGame().then((data) => {
            data.forEach((videogame) =>{
                if(videogame.nombre.toLowerCase().includes(searchInput.value.toLowerCase())){
                    view++
                    table.appendChild(listado(videogame.nombre, videogame.precio, videogame.imagen, videogame.categoria, videogame.id));
                }
            });
            if(view == 0){
                eliminarError(table);
                menajeError(table);
            }else{
                eliminarError(table);
            }
        }).catch((error) => console.log(error));
    }
}

//Metodo que elimina mensaje en el DOM
function eliminarError(tap){
    let divs = tap.querySelectorAll('div');
    divs.forEach(div => {
        div.remove();
    })
    let ps = tap.querySelectorAll('p');
    ps.forEach(p => {
        p.remove();
    })
}

//Metodo que muestra mensaje sobre no coincidencia de la busqueda
function menajeError(tap){
    let linea = document.createElement('div');
    let contenido = `<p class="videogame__error">No se a encontado un videojuego relacionado</p>`;
    linea.innerHTML = contenido
    tap.appendChild(linea);
}

//Metodo que elimina busquedas anteriores para no generar redundancia
function eliminarListado(tab){
    let lis = tab.querySelectorAll('li');
    lis.forEach(li => {
        li.remove();
    })
    let uls = tab.querySelectorAll('ul');
    uls.forEach(ul =>{
        ul.remove();
    })
}

//Metodo que muetra en el DOM el resultado de la busqueda
function listado(nombre, precio, imagen, categoria, id){
    let linea = document.createElement("ul");
    let contenido = `
    <li><img class="videogame__img" src="${imagen}"></li>
    <li id="soild"><a href="../screens/delete-ok.html?id=${id}"><i class="fa-solid fa-trash"></i></a><a href="../screens/edit-product.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a></li>
    <li class="videogame__name">${nombre}</li>
    `;
    if(categoria == "Juego gratuito"){
      contenido = contenido + `
      <li class="videogame__cost">Juego gratuito</li>
      `;
    }else{
      contenido = contenido + `<li class="videogame__cost">$${precio}</li>`
    }
    contenido = contenido + `<a href="../screens/product.html?id=${id}" class="videogame__link">Ver Producto</a>`;
    linea.classList.add('videogame__box');
    linea.innerHTML = contenido;
    return linea;
}

window.addEventListener('load', searchStar);