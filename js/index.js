const carousels = document.querySelectorAll(".carousels");

Object.values(carousels).map(carousel => {
  const slider = new Glide(carousel, {
    type: "carousel",
    perView: 5,
    gap: 10,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }

  });
  slider.mount();
});



/*
Try this code, it will work as your wish.

On 1st Page store data into localStorage variable

var page_content = document.getElementById("parent1").innerHTML;
console.log( page_content );
localStorage.setItem("page_content", page_content );
Retrieve 1st page data on 2nd page

document.getElementById("parent2").innerHTML = localStorage.getItem("page_content");
console.log( page_content );
Open console for confirmation data storing successfully on 1st page.
*/