//Variable de formulario
let correo = document.getElementById('login__email');

//Arreglo de expleciones regulares
let expreciones = {
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contraseña: /^(?=.*[A-Z])(?=(?:.*\d){2}).{8,}$/
}

let campos = {
    email: false,
    password: false
}

//Validador de formulario
let valueForm = (e) => {
    switch (e.target.name) {
        case "email":
            if(expreciones.correo.test(e.target.value)){
                ClassReturne('login__email', 'login__input-falle', 'login__input-ok');
                campos.email = true;
            }else{
                ClassReturne('login__email', 'login__input-ok', 'login__input-falle');
                campos.email = false;
            }
    }
}

//Funcion que altera la clase del formulario
function ClassReturne(id, classRemove, classAdd){
    //document.getElementById(id).classList.remove('contact__input');
    document.getElementById(id).classList.remove(classRemove);
    document.getElementById(id).classList.add(classAdd);
}

function starValue(){
    correo.addEventListener('keyup', valueForm);
    correo.addEventListener('blur', valueForm);
}

window.addEventListener('load', starValue)