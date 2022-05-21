function sayIt(translator){
    let phrase = translator("Hello");
    console.log(phrase);
}

function hawaiianTranslator(word){
    if(word === "Hello") return "Aloha";
    if(word === "Goodbay") return "Alaho";
}

sayIt(hawaiianTranslator);