function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.make = "ObjectsRUs";
Robot.prototype.erroMessage = "All systems go.";
Robot.prototype.reportError = function() {
    console.log(`${this.name} says ${this.erroMessage}`);
};
Robot.prototype.spillWater = function() {
    this.erroMessage = "I appear to have a short circuit!";
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("erroMessage"));
console.log(rosie.hasOwnProperty("erroMessage"));