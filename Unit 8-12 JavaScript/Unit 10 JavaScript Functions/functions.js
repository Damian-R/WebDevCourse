function isEven(num){
    if(num % 2 == 0)
        return true;
    return false;
}

function factorial(num){
    if(num == 0)
        return 1;
    var total = 1;
    for(var i = num; i > 0; i--)
        total*=i;
    return total;
}

function kebabToSnake(str){
    return str.replace(/-/g,"_");
}