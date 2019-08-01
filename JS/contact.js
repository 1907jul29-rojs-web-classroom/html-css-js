// Single line comment
/*
multi
line
.
.
.
Comments
*/
// alert is an inbuilt JS function which gives you a pop-up message
//alert("Hi, I am calling from External JS file")

// console.something -> will give you output in the console window of developer tools of the browser
// press F12 to see developer tools window
// console.log("Hello World");
// console.error("Oh, there is a blunder, please fix this asap");
// console.warn("This is not so serious but it will be good to give a fix");
// console.info("This is developer related small information/status");

//VARIABLES: starts with letters, _ , $ . Convention: variables named in camelCase
//var and let are used to create variables. let is newly introduced with ES6
nameOfTeacher="Pushpinder Kaur"; //Global Variables
console.log(nameOfTeacher);

var company;//declaring a variable -> create a space in memory
company="Revature LLC";//assignation -> assigns a value in that memory
company="Walmart";// value is overridden
company="Apple";
company=1234; //JS is loosely typed because we can any type of value in our variables
console.log(company);

let city="Reston"; //declaration and assugnation together
console.log(city);

//CONSTANTS: the values donot change. convention says use UPPER case to  create variables
const PI = 3.14;
//PI="Hello world!";//this is going to give error because CONSTANTS Should not be re-assigned.
console.log(PI);


// DATATYPES: what kind/type of data should be stored.
/*
string : array or collection of characters. We placed them in " " or ' '
number : They are numeric values it could be whole number,integers, rational number, real number, decimal, NaN (Not a Number) -> a/1= NaN, infinity -> 1/0 etc....
boolean : true(1 or non-zero) or false (0)
null : nothing it comes under type object;
Object : customized type or user-defined type. Animal, Car, Person
undefined: when no value is assigned or initialized to a variable
Symbol : new datatype in ES6
*/
var sayYesOrNo=true;
var a=null;
var b;
console.log(typeof(a));// object
console.log(b);
console.log(typeof(a/0));//Number
console.log(a/0);//NaN
console.log(2/0);//Infinity
console.log(typeof(2/0));// Number