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

function validateUser(user, password) {
    var userList = getUserList();
    var acceso = false;
    for (var i = 0; i < userList.length; i++) {
        if (user == userList[i].usuario && password == userList[i].password) {
            acceso = true;
            sessionStorageUser(userList[i].nombre, userList[i].apellidos, userList[i].usuario);
        }
    }
    return acceso;
}

function addUserToSystem(nombre, apellidos, telefono, usuario, password) {
    var userList = [];
    var newUser = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        usuario: usuario,
        password: password
    };
    userList = getUserList();
    userList.push(newUser);
    localStorageUserList(userList);
    sessionStorageUser(nombre, apellidos, usuario);
}