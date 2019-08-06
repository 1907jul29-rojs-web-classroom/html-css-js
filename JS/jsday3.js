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
// console.log('In forward order');
// for(num=1;num<11;num++){
//     console.log(num);
// }
// console.log('In reverse order');
// for(num=10;num>0;num--){
//     console.log(num);
// }
// for(;;){// infinite for loop - and also a bad practise
//     console.log('hello world');
// }

// ARRAYS: Data Structure which is used to store items (elements of an array) in contigious memory location
//var marks = [];// this is an empty array
 var marks = [80,90, 25, 39, 98,92];
 console.log(`Length of array is ${marks.length}`);
 // to read any elements of an array we use index(position of that element)
 console.log(`first element ${marks[0]}`);
 console.log(`last element ${marks[marks.length-1]}`);

 // to add/insert more elements into the array: Push
 //marks.push(78);
marks.pop();// this is used to remove an element from the array
 console.log(`Length of array is ${marks.length}`);
 console.log(`last element ${marks[marks.length-1]}`);
 
 // how to read all elements of an array
 for(i=0;i<marks.length;i++){
     console.log(marks[i]);
 }
//  Given an array: var marks = [80,90, 25, 39, 98,92];
//  1. Print the all the elements of the array in reverse order

//  2. Print all even elements of the array