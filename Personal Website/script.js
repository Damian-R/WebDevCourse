var navbar = $('.navbar-inverse').css("background", "#222");
var didScroll = false;
var menuOpen = false;

$(window).scroll(function(){
    didScroll = true;
});

$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    console.log("setting opacity 1");
    navbar.css("opacity", "1");
    navbar.css("background", "#111");
    menuOpen = true;
});

$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
    didScroll = true;
    menuOpen = false;
});

$('.navbar-toggle').on('click', function(){
    navbar.css("opacity", "1");
});

setInterval(function(){
    if(didScroll){
        console.log("scrolled");
        var distanceHeader = $('h1').offset().top;
        var distanceContent = $('#welcome-container').offset().top;
        if($(window).scrollTop() >= distanceHeader - 70){
            navbar.css("background", "#111");
            navbar.css("opacity", "0.8");
        } else {
            console.log("setting background none");
            navbar.css("background", "none");
        }

        if($(window).scrollTop() >= distanceContent - 70){
            navbar.css("opacity", "1");
        }
        didScroll = false;
    }
}, 750);
