function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
    if(this.weight > 25){
        console.log(`${this.name} says Woof!`);
    } else {
        console.log(`${this.name} says Yip!`);
    }
};

Dog.prototype.run = function() {
    console.log("Run!");
};

Dog.prototype.wag = function() {
    console.log("Wag!");
};

Dog.prototype.sit = function() {
    console.log(`${this.name} is now sitting.`)
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function() {
    console.log(`${this.name} says WOOF!`);
};

let barnaby = new Dog("Barnaby", "Basset Hound", 55);
barnaby.sit();

fido.bark();
fido.run();
fido.wag();

console.log("--------");
fluffy.bark();
fluffy.run();
fluffy.wag();

console.log("--------");
spot.bark();
spot.run();
spot.wag();

console.log("--------");
barnaby.bark();
barnaby.run();
barnaby.wag();
barnaby.sit();