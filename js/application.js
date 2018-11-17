document.querySelector('#btnRegistrarme').addEventListener('click', validateInputsRegistro);
document.querySelector('#btnIniciarSesion').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var user = document.querySelector('#txtUser').value;
    var pass = document.querySelector('#txtPass').value;
    var acceso = false;
    acceso = validateUser(user,pass);

    if(acceso){
        location.href="principal.html";
    }
    else{
        alert("Datos incorrectos");
    }

}


function validateInputsRegistro() {
    var nombre = document.querySelector('#txtNombre').value;
    var apellidos = document.querySelector('#txtApellidos').value;
    var telefono = document.querySelector('#txtTelefono').value;
    var usuario = document.querySelector('#txtUsuario').value;
    var password = document.querySelector('#txtPassword').value;
    var repeatpass = document.querySelector('#txtRepeatpass').value;
    if (nombre == "" || apellidos == "" || telefono == "" || usuario == "" || password == "" || repeatpass == "") {
        alert("Ingrese todos los datos");
    } else {
        validatePassword();
    }
}

function validatePassword() {
    var password = document.querySelector('#txtPassword').value;
    var repeatpass = document.querySelector('#txtRepeatpass').value;
    if (password == repeatpass) {
        saveUser();
        location.href="principal.html";
    } else {
        alert("No coinciden las contraseñas");
    }
}


function saveUser() {
    var nombre = document.querySelector('#txtNombre').value,
        apellidos = document.querySelector('#txtApellidos').value,
        telefono = document.querySelector('#txtTelefono').value,
        usuario = document.querySelector('#txtUsuario').value,
        password = document.querySelector('#txtPassword').value;

    addUserToSystem(nombre, apellidos, telefono, usuario, password);
}
