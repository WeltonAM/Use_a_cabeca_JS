
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

//Adicionando métodos em OBJ
whiskers.owener = "Bob";

delete whiskers.weight;

whiskers.trust = function(person){
    return (person === "Bob");
}
var notBite = whiskers.trust("Bob");
console.log(whiskers);