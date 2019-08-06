console.log('check first run')
// SCOPES: Current Context at the time of execution
// Scopes in JavaScript is of 3 types:
// 1. Global Scope: which can be accessed anywher in the program
// 2. Local Scope:
//      - Function Scope: access anywhere in the function
//      - Block Scope : which is only accessible within a block
name="Pushpinder Kaur"; // Global Scope 

(()=>console.log(`Hello ${name}`))();

(function(n){ // parameter n is in function scope
    console.log(n);
    {
        // block Scope - if block, else  block, for loop block
        console.log('Hello I am in a block '+ n);
       // var a=10; // var declares a variable in function scope 
        let a=10 // let declares a variable in block scope hence it caannot be accessed outside the block
        console.log(a);
    }
    console.log('Outside block '+a); // this gives you error as a is defined in block scope with let keyword
    console.log(name);
})("Carol");

console.log(n);// this gives erroe because n is not in scope out of funtion