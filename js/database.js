var userList = [];
function addUserToSystem(nombre, apellidos, telefono, usuario, password) {
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
    sessionStorageUser(nombre,apellidos,usuario);
}

function sessionStorageUser(nombre, apellidos, usuario) {
    sessionStorage.setItem('nameUser', nombre);
    sessionStorage.setItem('surNamesUser', apellidos);
    sessionStorage.setItem('user', usuario)
}

function getUserList() {
    var storagerList = localStorage.getItem('localUserList');
    if (storagerList == null) {
        userList = [];
    }
    else {
        userList = JSON.parse(storagerList);
    }
    return userList;
}
function localStorageUserList(list) {
    localStorage.setItem('localUserList', JSON.stringify(list));
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