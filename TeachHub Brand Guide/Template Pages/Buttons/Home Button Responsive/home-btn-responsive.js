function iconSwitch() {
    var menu = document.getElementById("menu");
    var close = document.getElementById("close");
    var subMenu = document.getElementById("subMenu");

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

    if (menu.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }

    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}