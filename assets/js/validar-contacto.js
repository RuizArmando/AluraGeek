//Arreglo de expleciones regulares
let expreciones = {
    nombre: /^[a-zA-Z\s]{1,40}$/,
    mensaje: /^.{1,120}$/
}

let campos = {
    nombre: false,
    mensaje: false
}

function starValue(){
    //Variables de formulario
    let input = document.getElementById('name');
    let textarea = document.getElementById('description');
    
    input.addEventListener('keyup', valueForm);
    input.addEventListener('blur', valueForm);
    textarea.addEventListener('keyup', valueForm);
    textarea.addEventListener('blur', valueForm);
}

//Funcion que altera la clase del formulario
function ClassReturne(id, classRemove, classAdd){
    //document.getElementById(id).classList.remove('contact__input');
    document.getElementById(id).classList.remove(classRemove);
    document.getElementById(id).classList.add(classAdd);
}

//Validador de formulario
let valueForm = (e) => {
    switch (e.target.name) {
        case "name":
            if(expreciones.nombre.test(e.target.value)){
                ClassReturne('input__name', 'rodapie__input-falle', 'rodapie__input-ok');
                campos.nombre = true;
            }else{
                ClassReturne('input__name', 'rodapie__input-ok', 'rodapie__input-falle');
                campos.nombre = false;
            }
            break;
        case "description":
            if(expreciones.mensaje.test(e.target.value)){
                ClassReturne('input__description', 'rodapie__input-falle', 'rodapie__input-ok');
                campos.mensaje = true;
            }else{
                ClassReturne('input__description', 'rodapie__input-ok', 'rodapie__input-falle');
                campos.mensaje = false;
            }
            break;
    }
}

window.addEventListener('load', starValue)