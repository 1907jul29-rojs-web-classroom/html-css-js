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

// FOR LOOP is better version of while loop as it is convinient syntax wise
/**
 for(initialization of variable; condition to be checked; increment/decrement of variable initialized){
     // logic 
 }
 */
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
var marks = [80, 90, 25, 39, 98, 92];
console.log(`Length of array is ${marks.length}`);
// to read any elements of an array we use index(position of that element)
console.log(`first element ${marks[0]}`);
console.log(`last element ${marks[marks.length - 1]}`);

// to add/insert more elements into the array: Push
//marks.push(78);
marks.pop();// this is used to remove an element from the array
marks.unshift(88);// inserts the element from front;
marks[3] = null;// remove element at postion 2 and replace it by null
console.log(`Length of array is ${marks.length}`);
console.log(`last element ${marks[marks.length - 1]}`);

// how to read all elements of an array
for (i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
//  Given an array: var marks = [80,90, 25, 39, 98,92];
//  1. Print the all the elements of the array in reverse order
console.log("Read array in reverse order");
for (let i = marks.length - 1; i > 0; i--) {
    console.log(marks[i]);
}
//  2. Print all even elements of the array
console.log("Print all even elements of the array")
for (let i = 0; i < marks.length; i++) {
    if(marks[i]%2==0 && marks[i] !=null && marks[i]!="")
        console.log(marks[i]);
}
// OBJECTS: All datatypes are derived from Object in JavaScript
// Global Objects 
//document
// console.log(typeof document);
// //window
// console.log(typeof window);
//     //window.alert()
// //location
// console.log(typeof location);
// //console
// console.log(typeof console);
// // Array is also object
// console.log(typeof console.log);

// In JS you can create your own objects as well
// using Object initializer way to create objects
// var obj={}; // blank/empty object
// console.log(typeof obj);
// Anything which is a real time entity:
// Object can have values (static or dynamic) and some behaviour (defines the action of the object)
// Eg: Car can be created as an object
// Values: wheels (fixed hence they are static values), glasses (fixed hence they are also static values),
//          mileage (dynamic as it keeps on changing), speed (dynamic)
// behaviour: Run (transport from one place to another), Shelter (covers you from bad weather)



var car = {
    name: "Mazda 6",
    wheels: 5,
    mileage: 26,
    speed: 120,
    Run: function () {
        console.log('It runs on road and take me to destination ');
    }
};

console.log(car.name);// call a property
car.name = "Audi";
console.log(car.name);// call a property
console.log(car.Run());// call a function

/*
Employee:
values: Static- name, ssn, id
        dynamic- salary, position, performance
behaviour: Work, Services, Deliverables, Ideas, Security
*/
// Create an employee object using above discussed properties and functions
const name="Test Name";
const ssn="1234567";
const id="test@revature.com"
var Employee1={
    name: name,
    ssn:ssn,
    id:id,
    salary:2345.67,
    position:"Junior developer",
    performance:8.5,
    work:function(){
        console.log("Junior developer fixes small bugs of revpro");
    },
    services:function(){
        console.log("fixing bugs, coordinating with senior team, attending daily scrum");
    },
    deliverables:function(){
        console.log("Delievers bug fixes within due date, contributes to business values");
    },
    getInfo:function(){
        console.log(`Name: ${Employee1.name} - SSN: ${Employee1.ssn} - Id: ${Employee1.id}\nPosition: ${Employee1.position}\nSalary: ${Employee1.salary}`);
    }
}

console.log(Employee1.name);
Employee1.getInfo();
console.log('after promotion');
Employee1.position="Developer";
Employee1.salary=5467.89;
Employee1.getInfo();
Employee1.deliverables();

// Add a function to employee object
Employee1.Perks=function(){
    console.log(`Revature employees are entitled for any free training based on their areas of interests`);
}

Employee1.Perks();