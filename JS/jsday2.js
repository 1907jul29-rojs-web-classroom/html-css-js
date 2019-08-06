console.log("checking if JS runs");
//CHECK LOGICAL OPERATORS WITH TRUTH TABLE
let a=true;
let b=false;
//console.log(a&&b);// tnis will be false as per Truth table
//console.log(!a);//this will be false and not (!true=false)

// ARITHMATIC OPERATORS +,-,*,/,%, ++(increment), --(decrement)
//console.log(10+20);
// console.log(10-20);
// console.log(10/20);
// console.log(20%3);//remainder 
//console.log(20/3);
let x=45;
let y=5;
//console.log(x/y);
//console.log(x);
//++x;//x=x+1; first increment the value by 1 and the read it
x++;//x=x+1; first read it and then increment it by 1
//console.log(x);

//+ behaves differently with strings
let firstName, lastName;
firstName="Pushpinder";
lastName="Kaur";
//console.log(firstName+" "+lastName);// concat the 2 strings
//console.log("1"+"2");//12 as both are strings
//console.log(1+"A");// number + string => string
//console.log("1"+2);// string + number => string

// Comparison operators->  >,<,>=,<=, ==,===
//console.log(1>=2);
//console.log(1==1);
//console.log(1=="1");// == check only the value not the type of value
//console.log(1==="1");// === or strict equality operator checks value as well as the type 

// CONDITIONAL OPERATORS ?:
//1<2 ? console.log("Yay!! its correct") : console.log("Boo!! its incorrect");\

// CONDITIONALS:

// if(3>2){// if this is true -> then it will go inside if block
//     console.log("yes it is true");
// }
// console.log("Outside if block");
// debugger;// a debugger is a piece of program that holds the execution and run the code line by line by developer's instructions
// Step Over: F10
// Step in : F11
// Step out : Shift + F11
// if(5>3){
//     console.log("Hey its true and I am in if block");
// }
// else{
//     console.log("Oh no!! this is false and I am from else block");
// }
// console.log("I am outside if-else block");


// ELSE IF
//debugger;
/*let marks;// declare a variable
marks=prompt("Please enter your marks obtained"); // get value from user // dynamic values
//marks=95; // hard - coded/ static value
if(marks>=90 && marks <101){
    console.log("Hey Congrats, You have got A grade");
}
else if(marks>=70 && marks <90){
    console.log("Hey Congrats, you have got B grade");
}
else if(marks>=50 && marks<70){
    console.log("Hey not bad, you have got C grade");
}
else if(marks >100){
    console.log("Marks cannot exceed 100. Please enter valid marks between 0 and 100");
}
else{
    console.log("Sorry, you failed this time, try next time");
}*/

// TRY TO CREATE A PROGRAM IF A NUMBER IS EVEN OR ODD. TAKE INPUT FROM USER

// SWITCH : like else if this also do multiple condition check but with pattern matching

/*let key=prompt("Press key to match the check")
switch (key) {
    case 'A':
        console.log("You pressed A");
        break;// donot go to next case or to avoid fallback case
    case 'B':
        console.log("you pressed B");
        break;
    default:
        console.log("You pressed something")
        break;
}*/

// FUNCTIONS: First class JS objects.
// They are used as building blocks of any program
// DRY- Donot repeat your code
// with function you can encapsulate your logic and thus you can use it again and again
// alert, prompt, console.log etc are predefined functions of JS
// Encapsulate the logic of a program which can be re-used and makes the program modular

/*function showmessage()// function declaration/specification
{
 //function body - it contains the logic of the program
 console.log("Hello Everyone!!");
}
// Call a function
showmessage();*/

// Function which adds 2 numbers
//Typecasting means conversion of 1 type to another -> variable= Datatype1(Datatype2 value)

/*let num1, num2, result;
num1=Number(prompt("Please enter number 1"));// prompt always take input from use as string
num2=Number(prompt("Please enter number 2"));// typecast string to number -> Number(string)
function Add(){
    result=num1+num2;
    console.log(result);
}
Add();// calling the add function*/

// Create a modular function
/*function Addition(number1, number2){
    return number1+ number2;// return keyword gives the output/result of the function
}

let output=Addition(50,70);// to hold the output of function we can store it in a variable
*/
//console.log(output);

// function to check even odd
/*let number=prompt("Enter a number to check for even or odd");
function evenorodd(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
evenorodd(number);*/

// Write a function in jS to:
// 1. Check if a number is divisible by 3
/*function checkdivisiblityby3(number){
    if(number%3==0){
        // ` -> backtick -> this with $ sign is used to extrapolate the string (means place any variable inside a string)
        console.log(`${number} is divisible by 3`);
    }
    else {
        console.log(`${number} is not divisible by 3`);
    }
}
let numeral = prompt('please enter a number to check its divisibilty by 3');
checkdivisiblityby3(numeral);*/

// 2. Check if user is eligible to get a driver's license
/*function iseligiblefordriverlicense(age){
    if(age>=16){
        //ES6 introduced string extrapolation which creates a placeholder for the variables that we want to place in the strings
        console.log(`Age ${age} is elgible for getting a driver's license`);
        return true;
    }
    else{
        console.warn(`Age ${age} is not eligble for driver's license. Try at the age of 16` );
        return false;
    }
}
let age=prompt('What is your age?');
iseligiblefordriverlicense(age);*/

/*var name="pushpinder kaur";
console.log(name.toUpperCase());

var Name;// JS is case - sensitive

var company="REVATURE";
console.log(company.toLowerCase());
*/

// MORE ABOUT FUNCTIONS IN JS
// Named functions
// Named functions with parameters
// Function which returns a value
// ANONYMOUS FUNCTIONS - Functions without any name

// Variable Show mesage holds the refernce of the anonymous function
// They are used when we want them to be used/called/invoked for once i.e. we don't want them to be re-used
/*var ShowMessage=function(name){
    // strings with backtick is called template literal which are used for string interpolation
    console.log(`Hello ${name}`);
    //console.log('Hello ${name}');    
}
// Invoke/call a function
// We can call the variable as a function to invoke anoymous function (because it hold the reference of anonymous function)
console.log(ShowMessage);// this will return you the definition of the anonymous function
ShowMessage("Pushpinder Kaur");*/

// ES6 created shorthand for anonymous functions known as ARROW FUNCTIONS
/*var showmsg=(name)=>console.log(`Hello ${name}`);
showmsg("Fred Belotte");

// ARROW FUNCTION WHICH RETURNS SOME COMPUTATION
var addnums=(number1, number2)=>number1+number2;
console.log(addnums(10,20));*/

// ARROW FUNCTION TO CHECK FOR EVEN OR ODD
// if arrow function need more than one line on RHS use { } to encapsulate the logic of the code
/*var checkevenodd=(num)=>{
    if(num%2==0)
        return 'Even'; // one line statement after if block don't require {}, but more than one line statements need {}
    else
        return 'Odd';
}
console.log(checkevenodd(30));
*/

//IIFE : Immediate Invoked Function Expresions
// A function which is called with its definition. These function don't need to be invoked/called explicitly
// IIFE as Named function
(function Welcome(){
    console.log('Hello World');
})();   

// IIFE function as anonymous function
(function(name){
    console.log(`Hello ${name}`);
})('Pushpinder Kaur');

// IIFE with arrow function inside
(()=>console.log('Hello World'))();
// => this denotes arrow function
// >= this denotes greater than equals to
// <= this denotes less than equals to


// CALLBACK FUNCTIONS: a function that can be passed as a paramter to calling function
// Callback functions are used with DOM events 
function Combine(fName, mName, lName){
    return `${fName} ${mName}  ${lName}`;
}

function Display(firstName, middleName, lastName, Combine){
    return `Hello ${Combine(firstName,middleName,lastName)}`;
}

console.log(Display("Marc","S.", "Jacob",Combine));