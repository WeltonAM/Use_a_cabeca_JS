let winner = function() { console.log("WINNER!")};
let loser = function() { console.log("LOSER!")};

winner();
let a = winner;
let b = loser;
let c = loser;

a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();