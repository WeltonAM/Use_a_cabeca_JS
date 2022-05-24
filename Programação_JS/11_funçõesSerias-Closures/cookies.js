function makeTimer(doneMessage, n){
    setTimeout(function() {
        console.log(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 1000);