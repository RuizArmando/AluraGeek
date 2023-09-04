import { clientServices } from "../service/client-service.js";

function searchStar(){
    let searchInput = document.getElementById('search__input');

    searchInput.addEventListener('keyup', searchValue);
    searchInput.addEventListener('blur', searchValue);
}

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

function menajeError(tap){
    let linea = document.createElement('div');
    let contenido = `<p class="videogame__error">No se a encontado un videojuego relacionado</p>`;
    linea.innerHTML = contenido
    tap.appendChild(linea);
}

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

function listado(nombre, precio, imagen, categoria, id){
    let linea = document.createElement("ul");
    let contenido = `
    <li><img class="videogame__img" src="${imagen}"></li>
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