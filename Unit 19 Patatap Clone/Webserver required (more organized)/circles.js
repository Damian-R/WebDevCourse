var sound1 = new Howl({
    src: ['sounds/bubbles.mp3'],
    volume: 0.1
});

var sound2 = new Howl({
    src: ['sounds/clay.mp3'],
    volume: 0.1
});

var circles = [];

function onKeyDown(event) {
    if(event.key === "a")
        sound1.play();
    if(event.key === "s")
        sound2.play();
                    
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    var circle = new Path.Circle(point, 300);
    circle.fillColor = "orange";
    circles.unshift(circle);
}

function onFrame(event){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 0.6;
        circles[i].scale(0.85);
    }
}