
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
        password: password,
        velocida: "",
        sobre_mi: ""
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
        insertList('localUserList', object);
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
            insertSessionStorage('user', userList[i].usuario);
        }
    }
    return acceso;
}

function loadNameUser() {
    var user = nameUser();
    var img = "<img src='img/user.png' width='40' height='40' alt='Usuario' />";
    jQuery("#btnUser").html(img + " " + user);
}

function loadAccount() {
    var user = nameUser();
    var list = getList('localUserList');
    for (var i = 0; i < list.length; i++) {
        if (user == list[i].usuario) {
            jQuery("#inputName").val(list[i].nombre + " " + list[i].apellidos);
            jQuery("#inputVelocidad").val(list[i].velocida);
            jQuery("#sobre_mi").val(list[i].sobre_mi);
        }

    }
}

function saveAccount() {
    var name = document.getElementById('inputName').value;
    var velocidad = document.getElementById('inputVelocidad').value;
    var descripcion = document.getElementById('sobre_mi').value;
    name = name.trim();
    var cadena = name.split(" ");
    var user = nameUser();
    var list = getList('localUserList');

    for (let i = 0; i < list.length; i++) {
        if (list[i].usuario == user) {
            if (cadena.length == 4) {
                list[i].nombre = cadena[0] + " " + cadena[1];
                list[i].apellidos = cadena[2] + " " + cadena[3];
            }
            else if (cadena.length == 3) {
                list[i].nombre = cadena[0];
                list[i].apellidos = cadena[1] + " " + cadena[2];
            }
            else if (cadena.length == 2) {
                list[i].nombre = cadena[0];
                list[i].apellidos = cadena[1];
            }
            else {
                alert("Ingrese el nombre completo");
            }
            list[i].velocida = velocidad;
            list[i].sobre_mi = descripcion;
            saveList('localUserList', list);
            location.href = "principal.html";
        }

    }
}

function bindEvents() {
    jQuery('#btnRegistrarme').bind('click', validateInputsRegister);
    jQuery('#btnIniciarSesion').bind('click', login);
    jQuery('#btnGuardarCambios').bind('click', saveAccount);
}

bindEvents();
