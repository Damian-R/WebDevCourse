var navbar = $('nav');
var didScroll = false;
var didResize = false;
var smallScreen = false;

var jWindow = $(window);

$(window).scroll(function(){
    didScroll = true;
});

$(window).resize(function(){
    didResize = true;
});

$('#bs-navbar-collapse').on('show.bs.collapse', function() {
    navbar.css("opacity", "1");
    navbar.css("background", "#68EECF");
});

$('#bs-navbar-collapse').on('hide.bs.collapse', function() {
    didScroll = true;
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

    // Check when window has been switched to support smaller screen sizes (such as phones)
    if(didResize){
        if(!smallScreen){
            if(jWindow.width() < 768){
                console.log("switched to small screen");
                switchedScreenSize();
            }
        } else {
            if(jWindow.width() > 768){
                console.log("switched to large screen");
                switchedScreenSize();
            }
        }

        didResize = false;
    }
}, 250);

function switchedScreenSize(){
    didScroll = true;
    smallScreen = !smallScreen;
}