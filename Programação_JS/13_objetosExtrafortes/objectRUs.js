function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectRUs";
Robot.prototype.speak = function() {
    console.log("Warning warning!!");
};
Robot.prototype.makeCoffee = function() {
    console.log("Making coffee");
};
Robot.prototype.blinkLights = function() {
    console.log("Blink blink");
};


SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = function() {
    console.log(`${this.name} says Sir, If I may venture an opinion...`);
};
SpaceRobot.prototype.pilot = function() {
    console.log(`${this.name} says Thrusters? Are they important?`);
};

let c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(`${c3po.name} was made by ${c3po.maker}`);

let simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();