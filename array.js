
//we can have different type in one array 
var myArray = [];
console.log(myArray);
myArray[0] = 'selma';
myArray[1] = 25;
console.log(myArray);

//nasted array
var ourArray = [['ime', 1],['prezime', 5]];
console.log(ourArray)

firstArray = ourArray[0];
console.log(firstArray)

firstArray = ourArray[0][1]; // we acces number 1 in array ourArray
console.log(firstArray)

//push on array
var emptyArray =[];
emptyArray.push(1,2);
console.log(emptyArray)

//pop on array -> remove last element form array
var array1 = [1,2,3,4]
array1.pop();
console.log(array1)

//shift on array -> remove first elemnt from array
var array2 = [1,2,3,4]
array2.shift();
console.log(array2)

//unshift -> push data on first eleemnt of array
var array3 = [1,2,3,4]
array3.unshift(0);
console.log(array3)

console.log(JSON.stringify(array1));