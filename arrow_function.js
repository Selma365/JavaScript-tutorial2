import {export_function} from "./functions"

//anonimus function does not have a name
var magic1 = function(){
    return new Date();
}


//we can change it in arrow function
// we miss the name 'function' and add '=>'
var magic2 = () => {
    return new Date();
}

//if we have just one line on return we can avoid {} and return 
const magic = () => new Date();


var example = function(arr1,arr2){
    return arr1.concat(arr2);
};

var arrow_example = (arr1,arr2) => arr1.concat(arr2);
console.log(example([1,2],[3,4]));
console.log(arrow_example([1,2],[3,4]));

//import and export instead of require(...)
const ispis = export_function(8);
console.log(ispis)