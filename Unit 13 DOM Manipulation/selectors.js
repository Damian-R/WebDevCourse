// Using getElement(s)

var highlighted = document.getElementById("highlight");
highlighted.style.background = "yellow";

var bolded = document.getElementsByClassName("bolded");
for(var i = 0; i < bolded.length; i++){
    bolded[i].style.fontWeight = "900";
}

var list = document.getElementsByTagName("li");
for(var i = 0; i < list.length; i++){
    list[i].style.border = "2px solid green";
    list[i].style.paddingLeft = "6px";
}

// Using querySelector

var h1 = document.querySelector("h1");
h1.style.border = "2px dashed green";

var highlighted = document.querySelector("#highlight");
highlighted.textContent = "Highlighted";

var bolded = document.querySelectorAll(".bolded");
for(var i = 0; i < bolded.length; i++){
    bolded[i].textContent = "Bolded";
}