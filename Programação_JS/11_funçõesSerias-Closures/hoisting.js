let migrating = true;
if(migrating) {
    quack(4);
    fly(4); // TypeErro: undefined is no a function
}

let fly = function(num) {
    for(let i = 0; i < num; i++){
        console.log("Flying!");
    }
};

function quack(num) {
    for(let i = 0; i < num; i++){
        console.log("Quack!");
    }
}