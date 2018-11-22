function insertSessionStorage(key, valor) {
    sessionStorage.setItem(key, valor)
}

function getList(key) {
    var userList = [];
    var storagerList = localStorage.getItem(key);
    if (storagerList == null) {
        userList = [];
    }
    else {
        userList = JSON.parse(storagerList);
    }
    return userList;
}

function nameUser() {
    var user = sessionStorage.getItem('user');
    return user;
}

function insertList(key, object) {
    var list = [];
    list = getList(key);
    let primaryKey = list.length + 1;
    object.id = primaryKey;
    list.push(object);
    localStorage.setItem(key, JSON.stringify(list));
}

function saveList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}