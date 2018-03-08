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