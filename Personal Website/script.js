var navbar = $('nav');
var didScroll = false;
var menuOpen = false;

$(window).scroll(function(){
    didScroll = true;
});

$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
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

$('.dropdown').on('show.bs.dropdown', function(e){
    $('.navbar').find('.dropdown-menu').first().stop(true, true).slideDown("fast");
});

$('.dropdown').on('hide.bs.dropdown', function(e){
    e.preventDefault();
    $('.navbar').find('.dropdown-menu').first().stop(true, true).slideUp("fast", function(){
        $("a[data-toggle='dropdown']").attr("aria-expanded", "false");
        $('.dropdown').removeClass("open");
    });
});

// $('.dropdown').hover(function(){
//     $(".dropdown-menu").slideDown("fast", function(){
//         console.log("slide complete");
//     });
//     $("a[data-toggle='dropdown']").attr("aria-expanded", "true");
//     $('.dropdown').addClass("open");
// }, function(){
//     $(".dropdown-menu").slideUp("fast", function(){
//     });
//     $('.dropdown').removeClass("open"); // FIX THE ANIMATION WHEN NAVBAR IS COLLAPSED
// });

setInterval(function(){
    if(didScroll){
        var offset = $('h1').offset().top;
        if($(window).scrollTop() >= offset - 70){
            navbar.css("background-color", "#68EECF");
            navbar.css("box-shadow", "2px 0px 4px black")
        } else {
            navbar.css("background-color", "transparent");
            navbar.css("box-shadow", "none")
        }

        didScroll = false;
    }
}, 250);