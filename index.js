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
    // Check if the registration container is open, and return if true
    if (document.body.classList.contains("registration-open")) {
        return;
    }

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
    // Set a class on the body to indicate that the registration container is open
    document.body.classList.add("registration-open");

    closePopupLogin();
    let popupReg = document.getElementById("popupReg");
    let overlay = document.getElementById("overlay");

    popupReg.classList.add("open-popup__reg");
    overlay.classList.add("active");
}

function closePopupReg() {
    // Remove the class on the body indicating that the registration container is open
    document.body.classList.remove("registration-open");

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