var navbar = $('nav');
var didScroll = false;
var didResize = false;
var smallScreen = false;

var jWindow = $(window);

if(jWindow.width() < 768)
    smallScreen = true;
else
    smallScreen = false;

$('.navbar-toggle').css("background", "#222");

jWindow.scroll(function(){
    didScroll = true;
});

jWindow.resize(function(){
    didResize = true;
});

$('#bs-navbar-collapse').on('show.bs.collapse', function() {
    navbar.css("opacity", "1");
    navbar.css("background", "#68EECF");
});

$('#bs-navbar-collapse').on('hide.bs.collapse', function() {
    // navbar.css("background", "none");
    didScroll = true;
});

// Make the 'About' button on the navbar scroll you to the projects div
$('#nav-about-button').on('click', function(){
    var dest = $('#about-container').offset().top - 75;
    window.scroll(0, dest);
});


// Make the 'Projects' button on the navbar scroll you to the projects div
$('#nav-projects-button').on('click', function(){
    var dest = $('#projects-container').offset().top - 75;
    window.scroll(0, dest);
});

$('.navbar-toggle').on('click', function(){
    navbar.css("opacity", "1");
});

$('.navbar-right').on('show.bs.collapse', function(){
    console.log("shown");
});

$('.navbar-right').on('hide.bs.collapse', function(){
    console.log("hidden");
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

setInterval(function(){
    // Check when window has been switched to support smaller screen sizes (such as phones)
    if(didResize){
        if(!smallScreen){
            if(jWindow.width() < 768){
                switchedScreenSize();
                if($('.navbar-collapse').attr("aria-expanded") == "false")
                    navbar.css("background", "none");
            }
        } else {
            if(jWindow.width() > 768){
                switchedScreenSize();
            }
        }

        didResize = false;
    }

    if(!smallScreen)
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

function switchedScreenSize(){
    navbar.css("background", "#68EECF")
    didScroll = true;
    smallScreen = !smallScreen;
}