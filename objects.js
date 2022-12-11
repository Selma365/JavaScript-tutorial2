// objects
// property:value

var dog = {
    "name":"Lory",
    "legs": 4,
    "age": 15,
    "friends": ["people","cats"]
};

//bracket notation
console.log(dog["name"])
dog["age"]= 16
console.log(dog["age"])

//this is how we acces property in object 
var nameOfDog = dog["name"];
console.log(nameOfDog)

//dot notation
console.log(dog.name)
dog.age= 20
console.log(dog.age)

//add new property with bracket or dot notation

dog["colour"] = "black";
dog.lastName = "hoho";
console.log(dog)

//delete property from object

delete dog.lastName;
console.log(dog)


