{
    let iconoMenu;
    let topNav;


    function despliegaMenu() {
        if (topNav.className === "topnav")
            topNav.className += "responsive";
        else
            topNav.className = "topnav";

    }

    document.addEventListener("DOMContentLoaded", function init() {
        topNav = document.getElementById("menuSup");
        iconoMenu = document.getElementById("menu");
        iconoMenu.addEventListener("click", despliegaMenu);
    });
}