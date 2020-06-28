//DOM

const burgerMenu = document.querySelector(".burger-menu");

const navBar = document.querySelector(".nav-bar");

const navBarLinks = document.querySelectorAll('.link-container')

//CAROUSEL
$('.carousel-container').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,           
            
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
  });




//BURGERMENU

const displayBurgerMenu = (e) => {
    if (navBar.style.display == "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }

    //navBarLinks es un array. Cada vez que se hace click en un elemento del array, se ejecuta el display = none, que cierra el menu.
    navBarLinks.forEach(element => {
        element.addEventListener('click', () => {
            navBar.style.display = 'none';
        })
    });



}

burgerMenu.onclick = displayBurgerMenu;