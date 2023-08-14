window.addEventListener("scroll", () => { //Adds event to run the following code when the page is scrolled
    if (window.scrollY >= 100) { //Checks if the page is scrolled down 100px or more
        document.querySelector(".fa-arrow-up-long").classList.add("btn__show") //Adds the class btn__show when scrolled
    } else { //If the page is not scrolled 100px down or more then run the following
        document.querySelector(".fa-arrow-up-long").classList.remove("btn__show") //Removes class btn__show if not scrolled
    }
});