var justAVar = "oh, don't worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAVar = "Just an every day LOCAL";
    return justAVar;
}

var result = whereAreYou();
console.log(result);

console.log("-------------");
var justAVar2 = "oh, don't worry about it, I'm GLOBAL";

function whereAreYou2() {
    var justAVar2 = "Just an every day LOCAL";
    function inner(){
        return justAVar2;
    }
    return inner();
}

var result2 = whereAreYou2();
console.log(result2);

console.log("-------------");
var justAVar3 = "oh, don't worry about it, I'm GLOBAL";

function whereAreYou3() {
    var justAVar3 = "Just an every day LOCAL";
    function inner3(){
        return justAVar3;
    }
    return inner3;
}

var innerFunction = whereAreYou3()
var result3 = innerFunction();
console.log(result3);