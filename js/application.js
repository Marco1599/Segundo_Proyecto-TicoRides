
function login() {
    var user = document.getElementById('txtUser').value;
    var pass = document.getElementById('txtPass').value;
    var acceso = false;
    acceso = validateUser(user, pass);

    if (acceso) {
        location.href = "principal.html";
    }
    else {
        alert("Datos incorrectos");
    }

}


function validateInputsRegister() {
    var nombre = document.getElementById('txtNombre').value;
    var apellidos = document.getElementById('txtApellidos').value;
    var telefono = document.getElementById('txtTelefono').value;
    var usuario = document.getElementById('txtUsuario').value;
    var password = document.getElementById('txtPassword').value;
    var repeatpass = document.getElementById('txtRepeatpass').value;

    var newUser = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        usuario: usuario,
        password: password
    };
    if (nombre == "" || apellidos == "" || telefono == "" || usuario == "" || password == "" || repeatpass == "") {
        alert("Ingrese todos los datos");
    }
    else if (validateUsername(usuario)) {
        alert("El nombre de usuario ya existe");
    }
    else {
        validatePassword(newUser, repeatpass);
    }
}

function validatePassword(object, repeatpass) {
    if (object.password == repeatpass) {
        insertList('localUserList',object);
        location.href = "principal.html";
    } else {
        alert("No coinciden las contraseñas");
    }
}

function validateUsername(user) {
    var userList = getList('localUserList');
    var acceso = false;
    for (var i = 0; i < userList.length; i++) {
        if (user == userList[i].usuario) {
            acceso = true;
        }
    }
    return acceso;
}

function validateUser(user, password) {
    var userList = getList('localUserList');
    var acceso = false;
    for (var i = 0; i < userList.length; i++) {
        if (user == userList[i].usuario && password == userList[i].password) {
            acceso = true;
            insertSessionStorage('user',userList[i].usuario);
        }
    }
    return acceso;
}

function loadNameUser() {
    var user = nameUser();
    var img = "<img src='img/user.png' width='40' height='40' alt='Usuario' />";
    var btn = document.getElementById("btnUser");
    btn.innerHTML = img + " " + user;
}

function bindEvents() {
    jQuery('#btnRegistrarme').bind('click', validateInputsRegister);
    jQuery('#btnIniciarSesion').bind('click', login);
}

bindEvents();
