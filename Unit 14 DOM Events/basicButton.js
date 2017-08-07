var button = document.querySelector("button");
var text = document.querySelector("p");
var list = document.querySelectorAll("li");

button.addEventListener("click", function(){
    text.innerHTML = "<strong>Someone clicked the button</strong>";
    for(var i = 0; i < list.length; i++){
        list[i].addEventListener("click", function(){
            console.log(this.textContent);
            this.style.background = "green";
        });
    }
});

