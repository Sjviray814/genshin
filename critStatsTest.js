function calculate(cr, cd){
    let sum = 0;
    let tries = 1000;
    for(let i = 0; i < tries; i++){
        Math.random() < cr ? sum += 1 + (1*cd) : sum += 1;
    }
    return(sum/tries);
}

function try1(){
    return calculate(.95, 1.90);
}
function try2(){
    return calculate(.8, 2.2);
}
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 1000; i++){
    try1() > try2() ? wins1++ : wins2++;
}
console.log("1:2");
console.log(wins1);
console.log("1:3");
console.log(wins2);