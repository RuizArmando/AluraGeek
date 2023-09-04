function star(){
    let footer = document.querySelector('[data-footer]');
    const lineaRodapie = document.createElement("section");
    const lineaCredits = document.createElement("section");
    const contenidoRodapie = `
    <div class="rodapie__container">
        <img src="../assets/img/Logo.png" class="rodapie__logo">
        <nav class="rodapie__nav">
            <ul class="rodapie__box">
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Politica de privacidad</a></li>
                <li><a href="#">Programa de fidelidad</a></li>
                <li><a href="#">Nuestras tiendas</a></li>
                <li><a href="#">Quiero ser franquicia</a></li>
                <li><a href="#">Anunciate aqui</a></li>
            </ul>
        </nav>
        <form id="rodapie__form" action="https://formsubmit.co/357e6d082d98099bf80857274ab077a0" method="POST">
            <div class="rodapie__from">
                <div class="rodapie__input" id="input__name">
                    <label for="name">Nombre completo</label>
                    <input name="name" type="text" id="name" required>
                    <p class="rodapie__value">Favor de igresar su nombre completo, maximo 40 caracteres, solo letras mayusculas y minusculas</p>
                </div>
                <div class="rodapie__input" id="input__description">
                    <label for="description" id="rodapie__description">Escribe tu mensaje</label>
                    <textarea name="description" id="description" required></textarea>
                    <p class="rodapie__value">Favor de igresar un mensaje en este campo, maximo 120 caracteres</p>
                </div>
            </div>
            <div class="btn">
                <input type="submit" class="envio" value="Enviar Mensaje">
                <input type="hidden" name="_next" value="http://127.0.0.1:5500/screens/index.html">
                <input type="hidden" name="_captcha" value="false">
            </div>
        </form>
    </div>
    `;
    const contenidoCredits = `
    <p>Desarrollado por Armando Ruiz Gutierrez</p>
    <p>2023</p>
    `;
    lineaRodapie.classList.add('rodapie');
    lineaRodapie.innerHTML = contenidoRodapie;
    lineaCredits.classList.add('credits');
    lineaCredits.innerHTML = contenidoCredits;
    footer.appendChild(lineaRodapie);
    footer.appendChild(lineaCredits);
}

window.addEventListener('load', star);