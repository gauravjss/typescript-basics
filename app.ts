// String
let myName = 'Gaurav';
//myName = 28;

//Number (Can be Integer or Float)
let myAge = 33;
//myAge = 'KD';

//Boolean
let hasHobbies = true;
//hasHobbies = 1;

// Assign types (This is anytype just like Javascript)
let myRealAge;
myRealAge = 29;
myRealAge = '27';

// Assign types
let myYouthAge : number;
myYouthAge = 16;
//myYouthAge = '16';

// Array
let hobbies: any[] = ['Exploring Cities','Music'];
hobbies = [100];
console.log(typeof hobbies);

//Tuples
let address: [string,number] = ['Renner Road', 22];
console.log(address);

//Enum
enum Color {
    Red, //0
    Green = 100, //100
    Blue = 2 //2 , Else this would be 101 (Continues incrementing from last number)
}
let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car : any = 'BMW';
console.log(car);
car = {brand :'BMW',series:4};
console.log(car);

// functions
function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void{
    //Cannot return anything concrete
    return;
}

//argument types
function multiply(value1: number, value2 : number):number{
    return value1 * value2;
}
console.log(multiply(2,4));

//function types
let myMultiply : (a: number,b: number)=> number;

/*myMultiply = sayHello;
myMultiply();*/
myMultiply = multiply;
console.log(myMultiply(5,2));

//Objects
let userData : {name: string,age:number} = {
    name : 'KD',
    age : 33
};
// Typed to name and age , cannot change the name
/*userData = {
    a = "Hello",
    b =22
};*/

// Complex Object
let complex: { data: number[]; output: (all: boolean) => number[] };
complex = {
    data: [100, 3.99, 10],
    output: function (isReady: boolean): number[] {
        return this.data;
    }
};

// type Alias
type Complex = { data: number[]; output: (all: boolean) => number[] };
let complex2 : Complex = {
    data: [100, 3.99, 10],
    output: function (isReady: boolean): number[] {
        return this.data;
    }
};

//union Types
let myRealRealAge : number | string  = 27;
myRealRealAge = "27";
//myRealRealAge = true;


//check types
let finalValue = 25;
if(typeof finalValue == 'number'){
    console.log('Final Value is a Number');
}

//never type
function neverReturns():never{
    throw new Error('An Error !');
}

// non-nullable type
let canBeNull: number | null = 12;
canBeNull = null;
// This is undefined and not null
let canAlsoBeNull;
canAlsoBeNull = null;
let canBeAny = null;
canBeAny = 12;


