var outWear ='T-shirt';

function whatToWear(){
    var outWear = 'skirt';
    return outWear;
}
console.log(whatToWear()) //skirt
console.log(outWear) //T-shirt



function razlika(number){
    return number-2;
}
console.log(razlika(10));

function trueOrFalse(itstrue){
    if(itstrue){
        return "it's true."
    }
        return "it's false."
}

console.log(trueOrFalse(true));


function check(value){
    if(value>10){
        return "grater than 10";
    }
    if(value<5){
        return "smaller than 5";
    }
}

console.log(check(2))

export const export_function =  (value) =>{
    if(value>10){
        return "grater than 10";
    }
    else if(value<5){
        return "smaller than 5";
    }
    else{
        return "between 5 and 10"
    }
}
