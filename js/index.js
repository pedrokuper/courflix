const carousels = document.querySelectorAll(".carousels");

Object.values(carousels).map(carousel => {
      const slider = new Glide(carousel, {
        type: "carousel",
        perView: 5
      });
      slider.mount();
});