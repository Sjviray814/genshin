function calculate(cr, cd){
    let sum = 0;
    let tries = 10000;
    for(let i = 0; i < tries; i++){
        Math.random() < cr ? sum += 1 + (1*cd) : sum += 1;
    }
    return(sum);
}


function normalize(cr, cd){
    let closest = [0, 0, 1];
    let calculated = calculate(cr, cd);

    for(let crTest = 0; crTest <= 1; crTest += .005){
        // calculates the error value for this tested cr
        let error = Math.abs(calculated - calculate(crTest, 2*crTest)) / calculated;
        
        //finds smallest error value and puts the variables into closest
        if(error < closest[2]) closest = [crTest, crTest * 2, error];
    }
    
    if(closest[2] <= 0.01){
        // rounds the values:
        let newCr = Math.round(1000*closest[0])/10;
        let newCd = Math.round(1000*closest[1])/10;
        return [newCr, newCd, closest[2]];
         //return closest;
    }
    else{
        return normalize2(cr, cd, closest[2]);
    }

   
}


//  Normalizes if ratio is better than 100/200:
function normalize2(cr, cd, error){
    let newClosest = [cr, cd, error];
    let newCalculated = calculate(cr, cd);
    for(let cdTest = 1.95; cdTest <= 5; cdTest += .01){
        // calculates the error value for this tested cr
        let error = Math.abs(newCalculated - calculate(1, cdTest)) / newCalculated;
        
        //finds smallest error value and puts the variables into closest
        if(error < newClosest[2]) newClosest = [100, cdTest*100, error];
    }
    // rounds the values:
    let newNewCd = Math.round(1000*newClosest[1])/1000;
    return([100, newNewCd, newClosest[2]]);
}

function getCvArr(arr){
    let ans = 0;
    arr[0] < 1 ? ans = (arr[0]*200 + arr[1]*100) : ans = (arr[0]*2 + arr[1]);
    return ans;
}

function getCv(cr, cd){
    let ans = 0;
    cr < 1 ? ans = (cr*200 + cd*100) : ans = (cr*2 + cd);
    return ans;
}

function label(label, cr, cd, callback){
    console.log(label);
    console.log(callback(cr, cd));
}

label("keqing:", .559, 1.832, normalize);

label("yae:", .567, 1.767, normalize);
// console.log(normalize(.567, 1.767));
// console.log(getCv([56.7, 176.7]));


//console.log(normalize(.4, 3));
