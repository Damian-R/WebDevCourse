// Check off specific todos by clicking
$('ul').on("click", 'li', function(){
    $(this).toggleClass("completed");
});

// remove elements when X is clicked
$('ul').on("click", '.delete', function(event){
    $(this).parent().fadeOut(150, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add an item to the todo list
$('input[type="text"]').on("keypress", function(event){
    if(event.which == 13){
        $('ul').append("<li><span class=\"delete\"><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});

$('input').on("transitionstart", function(e){
    if(e.originalEvent.propertyName == "height"){
        console.log($(this).css("display"));
        if($(this).css("display") == "none"){
            $(this).css("display", "inline-block");
        } else {
            $(this).css("display", "none");
        }
    }
});

$('.fa-plus').on("click", function(){
    $('input[type="text"]').fadeToggle("linear");
});