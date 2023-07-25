
document.addEventListener("DOMContentLoaded", function () {
    var navbarMenu = document.getElementById("navbarMenu");
    var navbarIcon = document.getElementById("navbarIcon");

    // Open or close navbar menu when icon is clicked
    navbarIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        navbarMenu.classList.toggle("show");
    });

    // Close navbar menu when screen is clicked
    document.addEventListener("click", function () {
        navbarMenu.classList.remove("show");
    });
});