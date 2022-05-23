let passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "premium" },
]

function processPassengers(passengers, testFunction) {
    for(let i = 0; i < passengers.length; i++){
        if(testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
    let message = passenger.name;
    if(passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    
    console.log(message);
    return false;
}
console.log("-----------IfPaid--------------")
processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    let orderFunction;

    if(passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log(`${passenger.name}, would you like a cocktail or wine?`);
        };
    
    } else if(passenger.ticket === "coach") {
        orderFunction = function(){
            console.log(`${passenger.name}, your choice is cola or water.`);
        };
    } else {
        orderFunction = function(){
            console.log(`${passenger.name}, would you like wine, cola or water?.`);
        }
    }
    return orderFunction;
}

function createDinnerOrderFunction(passenger){
    let orderFunction;

    if(passenger.ticket === "firstclass"){
        orderFunction = function() {
            console.log(`${passenger.name}, would you like chiken or pasta?`);
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log(`${passenger.name}, would you like snack box or cheese plate?`)
        }
    } else {
        orderFunction = function() {
            console.log(`${passenger.name}, would you like peanuts or pretzels?`)
        }
    }
    return orderFunction;
}


function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrderFunction(passenger)
    getDrinkOrderFunction();

    getDinnerOrderFunction()
}

function servePassengers(passengers){
    for(let i = 0; i < passengers.length; i++){
        serveCustomer(passengers[i]);
    }
}
console.log("--------Drink and Food----------")
servePassengers(passengers);