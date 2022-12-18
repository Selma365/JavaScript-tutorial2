//rest operator
// spread operator
//this.name
//getter setter


// spread operator or expands array pocecava broj eleemnata
//1. //dodaje samo elemente iz prvog niza u drugi a ne niz 
var dodati = ['dva','tri'];
var nizBrojeva = ['jedan', ...dodati, 'cetri'];
console.log(nizBrojeva);

//2. // proslijediti elemente u funkciju
function addThreeNumber(x,y,z){
    return x+y+z;
}
var argumenti =[0,1,2];
console.log(addThreeNumber(...argumenti));

//3. concatenate arrays
var array1 =[0,1,2];
var array2 =[3,4,5];
array1 = [...array1, ...array2];
console.log(array1)



//rest operator
// znamo da je rest ako je proslijedjen u funkciju kao parametar

function multiply(multiplier, ...theArgs){
    return theArgs.map(el => {
        return multiplier * el;
    });
}
//prvi broj je multiplier a drugi brojevi su theArgs elementi
console.log(multiply(2, 4,5));


//.this keyword
//if a function is part of an object we call that function method
// then it represents object itself method -> obj

//if a function is not part od object (regular function)
//then it represents function -> global(window,global)

const video = {
    title: 'First video',
    play(){
        console.log(this);
    }
};

video.play();
// this represents object video itself


function playVideo(){
    console.log(this);
}
//we will have global object in node or window object in browser
playVideo();

//if we want to refuse window,global object we can construct new object 

function Video(title){
    this.title = title;
    console.log(this);
}
// this represents a new empty object 
const v = new Video('naziv');
