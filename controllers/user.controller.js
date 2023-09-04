//Archivo js para reconocer un usuario registrado
import { clientServices } from "../service/client-service.js";

function iniciarControl(){
    let login = document.getElementById('login__star');
    login.addEventListener('click', validarUsuario);
}

function validarUsuario(){
    clientServices.listUsuario().then((data) => {
        let Email = document.getElementById('login__email').value;
        let Password = document.getElementById('login__password').value;
        data.forEach((usuario) =>{
            if((usuario.email == Email) && (usuario.password == Password)){
                window.open('../screens/all-products-admin.html', '_self');
            }else{
                alert("Nel, quien es usted perro?");
            }
        })
    });
}

window.addEventListener('load', iniciarControl)