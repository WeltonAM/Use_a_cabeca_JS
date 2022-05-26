String.prototype.palindrome = function() {
    let r = this.split("").reverse().join("");
    return (r === this.valueOf());
}

let phrases = ["eve", "kayak", "mom", "wow", "Not a palindrome"];
for(let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];
    if(phrase.palindrome()) {
        console.log(`'${phrase} is a palindrome`);
    } else {
        console.log(`'${phrase} is NOT a palindrome`);
    }
}