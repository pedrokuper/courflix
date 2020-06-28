$('.carousel-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

  $(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        
    });
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