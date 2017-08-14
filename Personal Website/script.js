var navbar = $('nav');
var didScroll = false;
var menuOpen = false;

$(window).scroll(function(){
    didScroll = true;
});

$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    console.log("setting opacity 1");
    navbar.css("opacity", "1");
    navbar.css("background", "#68CBCF");
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
        var offset = $('h1').offset().top;
        if($(window).scrollTop() >= offset - 70){
            navbar.css("background-color", "#68CBCF");
            navbar.css("box-shadow", "2px 0px 4px black")
        } else {
            navbar.css("background-color", "transparent");
            navbar.css("box-shadow", "none")
        }

        didScroll = false;
    }
}, 250);