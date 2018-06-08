//Init animation
new WOW().init();

// Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

//Click on menu
$(function () {
    var nav = $(".navbar-collapse");
    nav.on("click", "a:not([data-toggle])", null, function () {
        nav.collapse('hide');
    });
});

//Click outside menu
$(function () {
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});

//Button
window.onscroll = function () {
    var buttonTop = document.getElementById('button__footer');
    var scrollAxis = window.pageYOffset;

    if (scrollAxis > '650') {
        buttonTop.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
    }
};