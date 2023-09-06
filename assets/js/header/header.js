function star(){
    let headerUser = document.querySelector('[data-header]');
    if(headerUser != null){
        const lineaUser = document.createElement("section");
        const contenidoUser = `
        <a href="index.html"><img src="assets/img/Logo.png" class="menu__icono"></a>
        <button class="menu__search" onclick="search()"><i class="fa-solid fa-magnifying-glass"></i> Buscar videojuego</button>
        <button class="menu__login" onclick="ViewLoadin()">Login</button>
        <label for="toggle" id="dark-mode"><i class="fa-solid fa-moon"></i></label>
        <input type="checkbox" id="toggle">
        `;
        lineaUser.classList.add('menu');
        lineaUser.innerHTML = contenidoUser;
        headerUser.appendChild(lineaUser);
    }
    let headerAdmin = document.querySelector('[data-admin]');
    if(headerAdmin != null){
        const lineaAdmin = document.createElement("section");
        const contenidoAdmin = `
        <a href="./all-products-admin.html"><img src="../assets/img/Logo.png" class="menu__icono"></a>
        <button class="menu__login" onclick="FinishLogin()">Finalizar sesion</button>
        <label for="toggle" id="dark-mode"><i class="fa-solid fa-moon"></i></label>
        <input type="checkbox" id="toggle">
        `;
        lineaAdmin.classList.add('menu');
        lineaAdmin.innerHTML = contenidoAdmin;
        headerAdmin.appendChild(lineaAdmin);
    }
}

window.addEventListener('load', star);