// $(document).ready(function() {
//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');

//     /** click event on toggle menu */
//     $toggleCollapse.click(function() {
//         $nav.toggleClass('collapse');
//     });
// });

// const slideShow = document.querySelector('.bannerVideo');
// const slides = slideShow.getElementByTagName('video');
// var index = 0;

// function nextSlide() {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }

// function prevSlide() {
//     slides[index].classList.remove('active');
//     index = (index + slides.length - 1) % slides.length;
//     slides[index].classList.add('active');
// }

// const slideShowText = document.getElementById('slideShowText');
// const slidesText = slideShowText.getElementByTagName('div');
// var index = 0;

// function nextSlideText() {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }

// function prevSlideText() {
//     slides[index].classList.remove('active');
//     index = (index + slides.length - 1) % slides.length;
//     slides[index].classList.add('active');
// }

function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}