var array = [1,2,3,4];
var array2 = [1,1,1,1];
var array3 = ["a","a","a"];
var array4 = [10,3,10,4];

function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--)
        console.log(arr[i]);
}

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++)
        if(arr[i] !== first)
            return false;
    return true;
}

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(element) {
        sum += element;
    });
    return sum;
}

function max(arr){
    var max = 0;
    arr.forEach(function(el){
        if(el > max)
            max = el;
    });
    return max;
}

Array.prototype.myForEach = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}