document.querySelector("div").style.display = "none";

var keyData = new Data();

var circles = [];
var triangles = [];
var gravity = -0.002;
function onKeyDown(event) {
    var colour = "orange";
    if(keyData.data[event.key]){
        keyData.data[event.key].sound.play();
        colour = keyData.data[event.key].colour;
    }
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var numTri = Math.floor((Math.random() * 4));
    for(var i = 0; i < numTri; i++){
        var triangle = new Path.RegularPolygon(point, 3, 300);
        triangle.fillColor = colour;
        triangle.rotationSpeed = Math.floor((Math.random() * 3)) - Math.floor((Math.random() * 6));
        triangle.moveX = (Math.random() * 4) - (Math.random() * 8);
        triangle.moveY = (Math.random() * 4) - (Math.random() * 8);
        triangles.unshift(triangle);
    }
    var circle = new Path.Circle(point, 300);
    circle.fillColor = colour;
    circles.unshift(circle);
}
function onFrame(event){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 0.6;
        circles[i].scale(0.97);
        if(circles[i].area < 1){
            circles[i].remove();
            circles.splice(i,1);
        }
    }
    for(var i = 0; i < triangles.length; i++){
        triangles[i].fillColor.hue += 1;
        triangles[i].scale(0.97);
        triangles[i].rotate(triangles[i].rotationSpeed);
        triangles[i].position.x += triangles[i].moveX;
        triangles[i].position.y += triangles[i].moveY + (triangles[i].area * 0.000005);
        if(triangles[i].area < 5){
            triangles[i].remove();
            triangles.splice(i,1);
            console.log(triangles);
        }
    }
}