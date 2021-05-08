// $(document).ready(function() {
//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');

//     /** click event on toggle menu */
//     $toggleCollapse.click(function() {
//         $nav.toggleClass('collapse');
//     });
// });

const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementByTagName('vidoe');
var index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index + slide.lenght - 1) % slides.length;
    slides[index].classList.add('active');
}