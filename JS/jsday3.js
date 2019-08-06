console.log('check first run')
// SCOPES: Current Context at the time of execution
// Scopes in JavaScript is of 3 types:
// 1. Global Scope: which can be accessed anywher in the program
// 2. Local Scope:
//      - Function Scope: access anywhere in the function
//      - Block Scope : which is only accessible within a block
/*name="Pushpinder Kaur"; // Global Scope 

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

console.log(n);// this gives erroe because n is not in scope out of function
*/

// LOOPS: Iteration/ repetition
//debugger;
//var num =11;
/*while(num<11){
    console.log(num);
    num++;
}*/
/*while(true){// infinite loop
    console.log(num);
    num++;
}*/
// while(false){// non looped forever 
//     console.log(num);
//     num++;
// }

// do-while 

/*do {
    console.log(num);
    num++;
} 
while (num<11);*/

// write a program that prints reverse of integers 10 to 1
// var num = 10
// while (num>0) {
//     console.log(num);
//     num--;// or num = num -1;
// }

// write a program to print all evens from 1 to 10
// var num = 1;
// while(num < 11) {
//     if (num % 2 == 0) {
//         console.log(num);        
//     }     
//     num++;        
// }

// FOR LOOP is better version of while as it is convinient synatx wise
console.log('In forward order');
for(num=1;num<11;num++){
    console.log(num);
}
console.log('In reverse order');
for(num=10;num>0;num--){
    console.log(num);
}
// for(;;){// infinite for loop - and also a bad practise
//     console.log('hello world');
// }
