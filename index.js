document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the "HAVE AN ACCOUNT? LOGIN" element
    let loginAccElement = document.querySelector(".login__acc");
    loginAccElement.addEventListener("click", function() {
        // Close the registration popup and open the login popup
        closePopupReg();
        openPopupLogin();
    });
});

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

function openPopupReg() {
    closePopupLogin();
    let popupReg = document.getElementById("popupReg");
    let overlay = document.getElementById("overlay");

    popupReg.classList.add("open-popup__reg");
    overlay.classList.add("active");
}

function closePopupReg() {
    let popupReg = document.getElementById("popupReg");
    let overlay = document.getElementById("overlay");

    popupReg.classList.remove("open-popup__reg");
    overlay.classList.remove("active");
}


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeOpenIcon = document.getElementById("eye-open");
    var eyeClosedIcon = document.getElementById("eye-closed");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOpenIcon.style.display = "none";
        eyeClosedIcon.style.display = "inline";
    } else {
        passwordInput.type = "password";
        eyeOpenIcon.style.display = "inline";
        eyeClosedIcon.style.display = "none";
    }
}
window.addEventListener('scroll', function() {
    var scrollingHeader = document.getElementById('scrollingHeader');
    scrollingHeader.classList.toggle('scrolled', window.scrollY > 0);
});