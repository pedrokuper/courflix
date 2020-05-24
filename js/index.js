const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const series = document.querySelector(".series-carousel");


rightArrow.addEventListener("click", () => {

    series.scrollLeft += series.offsetWidth;

})

leftArrow.addEventListener("click", () => {
    series.scrollLeft -= series.offsetWidth;
})