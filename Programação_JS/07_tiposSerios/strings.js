let emot = "XOxxOO";
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for (let i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") {
        hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}

console.log(hugs, kisses);

console.log("-------------");
let nome = "Jenny";
let phone = "867-5309";
let fact = "This is a prime number";

let songName = phone + "/" + nome;

let index = phone.indexOf("-");
if(fact.substring(10, 15) === "prime") {
    console.log(fact);
}

console.log("-------------");
let input = "jenny@wickedlysmart.com";
for(let i = 0; i < input.length; i++) {
    if (input.charAt(i) === '@') {
        console.log(`There's an @ sing at index ${i}`)
    }
}