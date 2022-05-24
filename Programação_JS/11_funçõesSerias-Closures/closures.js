function makePassword(password) {
    return function guess(passwordGuess){
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log(`Guessing 'nope': ${tryGuess("nope")}`);
console.log(`Guessing 'secret': ${tryGuess("secret")}`);

console.log(`--------------`);
function multN(n) {
    return function multBy(m){
        return n * m;
    };
}

var multBy3 = multN(3);
console.log(`Multiplying 2: ${multBy3(2)}`);
console.log(`Multiplying 3: ${multBy3(3)}`);

console.log(`--------------`);
function makeCounter() {
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        }
    };
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());