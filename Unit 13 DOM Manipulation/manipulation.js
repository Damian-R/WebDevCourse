var h1 = document.querySelector("h1");
// h1.style.border = "2px dashed gray";
// h1.style.height = "40px";
// h1.style.borderRadius = "20px";
// h1.style.width = "250px";
// h1.style.textAlign = "center";
// or use predefined class in css file

h1.classList.add("header");

var button = document.querySelector("button");
button.addEventListener("click", function(){
    h1.classList.toggle("header");
})