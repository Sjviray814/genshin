function calculate(cr, cd){
    let sum = 0;
    let tries = 1000;
    for(let i = 0; i < tries; i++){
        Math.random() < cr ? sum += 1 + (1*cd) : sum += 1;
    }
    return(sum/tries);
}

function try1(){
    return calculate(.559, 1.832);
}
function try2(){
    return calculate(.357, 2.275);
}
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 1000; i++){
    try1() > try2() ? wins1++ : wins2++;
}
console.log("old");
console.log(wins1);
console.log("new");
console.log(wins2);