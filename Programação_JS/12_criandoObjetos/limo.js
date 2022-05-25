var limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };

    this.stop = function() {
        this.started = false;
    }

    this.drive = function() {
        if(this.started) {
            console.log(`${this.make} ${this.model} goes zoom zoom!`);
        } else {
            console.log("Start the engine first.");
        }
    };
}

var limo = new Car(limoParams);

console.log(`${limo.make} ${limo.model} is a ${typeof limo}`);