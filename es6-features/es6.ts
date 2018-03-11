/*
//let & const
console.log('LET and CONST');
let variable = "test";
console.log(variable);
variable = 'another value';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;

// Block scope
function reset(){
    let variable = null;
    console.log(variable,'inside');
}
reset();
console.log(variable);

// Arrow Functions
console.log('ARROW FUNCTIONS');
const addNumbers = function (number1:number,number2:number):number{
    return number1*number2;
};
console.log(addNumbers(10,3));

//ES6 Single Line Function (Single line inside function)
const multiplyNumbers = (num1:number,num2:number)=> num1*num2;

// No Argument Function
const greet = () =>{
    console.log('hello');
}

// Single Argument Function
const greetFriend = friendName =>{
    console.log('hello'+friendName);
}
console.log(greetFriend('Manu'));

//Adding a type to the function
const multiplyTwoNumbers : (num1:number,num2:number) => number =
    (num1,num2)=>{
    return num1*num2;
};
console.log(multiplyTwoNumbers(2,4));

//Default Parameters
console.log("Default Parameters");
const countdown = (start:number = 10) : void =>{
    console.log(start);
    while(start >0){
        start--;
    }
    console.log("Done", start);
}
// Call without parameter , makes function to use default
countdown();

//Rest and Spread Operators
console.log("REST and SPREAD");
const numbers = [1,10,99,-5];
console.log(Math.max(33,99,19,-3));
// Spread ... spreads the items of arrays into a list.
console.log(Math.max(...numbers));
// Rest ... combines the list of arguments into an array
function makeArray(name:String, ...args: number[]){
    return args;
}
console.log(makeArray("KD",2,6,-5));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ['Music','Gadgets'];
const [hobby1,hobby2] = myHobbies;

console.log(myHobbies);
console.log(hobby1,hobby2);

// Destructuring Objects
const userDb = {userName :'KD', age:33};
const {userName,age} = userDb;
console.log(userName,age);

// Template Literals
console.log("Template Literals");
const userNames = 'KD';
const greeting = `Hello I'm ${userNames}
 I using back-ticks
 and using multi line without using any + sign `;
console.log(greeting);


*/
