const carousels = document.querySelectorAll(".carousels");

Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
        type: "carousel",
        perView: 5,
        gap: 20,

        breakpoints: {
            800: {
                perView: 2
            },
            320: {
                perView: 1,
                gap: 10,
            },
            440: {
                perView: 1,
                gap: 10,
            }
        }

    });


    slider.mount();

});


const burgerMenu = document.querySelector(".burger-menu");

const navBar = document.querySelector(".nav-bar");

const displayBurgerMenu = () => {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }

}

burgerMenu.onclick = displayBurgerMenu;