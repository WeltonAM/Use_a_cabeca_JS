var emptyArray = new Array(); // Array de cumprimento vazio

emptyArray[0] = 99;

console.log(emptyArray);

console.log("-----------");
var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

console.log(oddNumbers);

console.log("-----------");
oddNumbers.reverse();
console.log(oddNumbers);

console.log("-----------");
var aString = oddNumbers.join("-");
console.log(aString);

console.log("-----------");
var areAllOdd = oddNumbers.every(function(x){
    return ((x % 2) !== 0);
});
console.log(areAllOdd);
