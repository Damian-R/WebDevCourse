// text() method
console.log("h1 text: " + $('h1').text());
console.log("all text in ul before change: " + $('ul').text());

// setting text
$('li:first-of-type').text("Kit-Kat");

// html() method
console.log("html of ul after change: " + $('ul').html());
$('li:nth-of-type(2)').html("<li><strong>Starburst</strong></li>");

// attr() method
console.log("current url of images: " + $('img').attr("src"));
console.log("changing url and size of images...");
$('img').attr({
    src: "https://0x0800.github.io/2048-CUPCAKES/style/img/1024.jpg",
    height: "50px",
    width: "45px"
});

console.log("new url of images: " + $('img').attr("src"));

console.log("changing last image url...");
$('img').last().attr("src","http://images.media-allrecipes.com/userphotos/250x250/00/70/88/708879.jpg");

console.log("input type of input box: " + $('input').attr("type"));
console.log("changing input type to text");
$('input').attr("type", "text");

// val() method
console.log("resetting input box");
$('input').val("");

// show the input of the text box when enter is pressed
console.log("type something in the input box or select an item in the menu to see it here");
$('input').keypress(function(event){
    if(event.which === 13){
        console.log("pressed enter");
    } else {
        console.log("text in input: " + $(this).val());
    }
});

$('select').change(function(){
    console.log("selected item: " + $(this).val());
});

// addClass, removeClass and toggleClass methods (and click)
$('h1').click(function(){
    $('h1').toggleClass("correct");
});

$('ul li').click(function(){
    $(this).toggleClass("done");
});

// on() method
$('h1').on("click", function(){
    $(this).css("color", "purple");
});

$('button').on("mouseenter", function(){
    $(this).css("font-weight", "bold");
})
$('button').on("mouseleave", function(){
    $(this).css("font-weight", "normal");
})