//map filter reduce 
//rest operator
// spread operator
//this.name
//getter setter

const people = [
    {
        name: "Selma",
        age: 25,
        occupation: "Web developer"
    },
    {
        name: "Amy",
        age: 65,
        occupation: "Nurse"
    },
    {
        name: "Bruce",
        age: 35,
        occupation: "Electrician"
    }
];

//map a new array with just a name from people 
//() here is a function that will be applyed on every object in array
// new array is the same size as an old one
const names = people.map(person => {
    return person.name;
})

console.log(names);

//filter method doesn't have the same size as an old array
const ages = people.filter(person => {
    return person.age > 25;
})
console.log(ages);

//reduce
//racunamo zbir godina, total je kao neki counter a person je svaki objekat u nizu, 0 u zagradi znaci da totel=0 i da je pocetna vr 0
const totalAge = people.reduce((total,person)=>{
    return total + person.age;
},0)

console.log(totalAge)