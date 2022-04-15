function calculate(cr, cd, dmg){
    let sum = 0;
    let tries = 1000;
    
    for(let i = 0; i < tries; i++){
    if(Math.random() < cr) {
        sum += dmg;
    }
    else{
        sum += dmg/cd;
    }
    }
    console.log(sum/tries);
}

function calculate2(high, low, cr){
    let sum = 0;
    let tries = 1000;
    
    for(let i = 0; i < tries; i++){
    if(Math.random() < cr) {
        sum += high;
    }
    else{
        sum += low;
    }
    }
    console.log(sum/tries);
}

// calculate(.692, 1.42, 32133);
console.log("Pyro Goblet:")
calculate2(32133, 13276, .692);
console.log("HP Goblet:")
calculate2(30349 ,12499, .758)