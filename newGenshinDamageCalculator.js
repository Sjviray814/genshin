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
    //console.log(sum/tries);
    return(sum/tries);
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
    //console.log(sum/tries);
    
    return(sum/tries);
}

// calculate(.692, 1.42, 32133);

function try1(){
    return calculate2(14254, 4992, .594);
}
function try2(){
    return calculate2(30349 ,12499, .758);
}
// console.log("Pyro hat:")
// calculate2(32133, 13276, .692);
// console.log("physical hat:")
// calculate2(30349 ,12499, .758);
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 10000; i++){
    try1() > try2() ? wins1++ : wins2++;
}
console.log("Pyro hat:");
console.log(wins1);
console.log("physical hat:");
console.log(wins2);