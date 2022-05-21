function fun(echo) {
    console.log(echo);
}

fun("hello");

function boo(aFunction) {
    aFunction("boo");
}

boo(fun);

console.log(fun);

fun(boo);

let moreFun = fun;

moreFun("hello again");

function echoMaker() {
    return fun;
}

let bigFun = echoMaker();
bigFun("Is there an echo?");