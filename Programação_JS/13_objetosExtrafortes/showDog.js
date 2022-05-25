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

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if(this.sitting) {
        console.log(`${this.name} is already sitting.`)
    } else {
        this.sitting = true;
        console.log(`${this.name} is now sitting.`)
    }
}

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function() {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

let fido = new Dog("Fido", "Mixed", 38);

console.log("-------------");
if(fido instanceof Dog) {
    console.log("Fido is a DOG.");
}

if(fido instanceof ShowDog) {
    console.log("Fido is a SHOWDOG.");
}

if(scotty instanceof Dog) {
    console.log("Scotty is a DOG.");
}

if(scotty instanceof ShowDog) {
    console.log("Scotty is a SHOWDOG.");
}

console.log("-------------");
console.log(`Fido constructor is ${fido.constructor}`)
console.log(`Scotty constructor is ${scotty.constructor}`)