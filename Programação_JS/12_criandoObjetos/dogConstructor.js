function Dog(name, breed, wight) {
    this.name = name;
    this.breed = breed;
    this.wight = wight;
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for(let i = 0; i < dogs.length; i++){
    var size = "small";
    if(dogs[i].wight > 10) {
        size = "large";
    }

    console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
}