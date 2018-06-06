new WOW().init();

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

window.onscroll = function () {
    var buttonTop = document.getElementById('button__footer');
    var scrollAxis = window.pageYOffset;

    if (scrollAxis > '650') {
        buttonTop.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
    }
};

$(document).ready(function ($){
    $('nav__link').on('click', function(){
        $('navbar-collapse').trigger('click');
    });
});