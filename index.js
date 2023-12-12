function openPopupLogin() {
    let popupLogin = document.getElementById("popupLogin");
    let overlay = document.getElementById("overlay");

    popupLogin.classList.add("open-popup__login");
    overlay.classList.add("active");
}

function closePopupLogin() {
    let popupLogin = document.getElementById("popupLogin");
    let overlay = document.getElementById("overlay");

    popupLogin.classList.remove("open-popup__login");
    overlay.classList.remove("active");
}