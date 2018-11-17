function loadNameUser() {
    var user = nameUser();
    var img = "<img src='img/user.png' width='40' height='40' alt='Usuario' />";
    var btn = document.getElementById("btnUser");
    btn.innerHTML = img + " " + user;

}

window.onload = loadNameUser();