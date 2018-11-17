var userList = [];

function addUserToSystem(nombre, apellidos, telefono, usuario, password) {
    var newUser = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        usuario: usuario,
        password: password
    };
    console.log(newUser);
    userList.push(newUser);
    localStorageUserList(userList);
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
            sessionStorage.setItem('nameUser', userList[i][0]);
            sessionStorage.setItem('surNamesUser', userList[i][1]);
            sessionStorage.setItem('user', userList[i][3])
        }

    }
    return acceso;

}