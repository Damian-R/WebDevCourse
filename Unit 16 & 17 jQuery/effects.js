$('button').on("click", function(){
    // Fading
    // $('div').fadeToggle(1000, function(){
    //     console.log("fade completed");
    // });
    // Sliding
    $('div').slideToggle(250, function(){
        console.log("slide complete");
    });
});