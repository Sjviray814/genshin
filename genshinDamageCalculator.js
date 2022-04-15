function calculate(atk, flatDmg, dmgPercent, cr, cd){
    let sum = 0;
    let tries = 1000;
    for(let i = 0; i < tries; i++){
        let critMulti = 1;
        Math.random() < cr ? critMulti = 1 + cd : critMulti = 1;

        sum += ((atk + flatDmg) * (1 + dmgPercent)) * critMulti;
    }
    return sum/tries;

}

// .5cr => .3 cd
// .6cr =>
function try1(){
    return calculate(2200, 0, .9, .6, 1);
}
function try2(){
    return calculate(2000, 0, .9, .6, 1.25);
}
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 1000; i++){
    try1() > try2() ? wins1++ : wins2++;
}
console.log("More Atk");
console.log(wins1);
console.log("More Cd");
console.log(wins2);