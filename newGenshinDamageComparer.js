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
    return calculate2(4368, 9336, .571);
}
function try2(){
    return calculate2(4244 ,8612, .567);
}
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 10000; i++){
    try1() > try2() ? wins1++ : wins2++;
}
function labelWins(label, callback){
    console.log(label);
    console.log(callback);
}

labelWins("atk cup:", wins1);
labelWins("pyro cup", wins2);

