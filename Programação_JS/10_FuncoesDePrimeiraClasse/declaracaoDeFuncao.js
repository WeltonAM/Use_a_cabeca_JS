let migrating = true;

let fly = function(num){ //expressão de função
    for( let i = 0; i < num; i++){
        console.log("Flying!");
    }
};

function quack(num) { //declaração de função
    for(let i = 0; i < num; i++){
        console.log("Quack!")
    }
};

if(migrating){
    quack(4);
    fly(4)
}; 