function sessionStorageUser(nombre, apellidos, usuario) {
    sessionStorage.setItem('nameUser', nombre);
    sessionStorage.setItem('surNamesUser', apellidos);
    sessionStorage.setItem('user', usuario)
}

function getUserList() {
    var userList = [];
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

function nameUser(){
    var user = sessionStorage.getItem('user');
    return user;
}