console.log("test connection");
//Events: they are user-defined actions which are raised/fired whenever a user interacts with a web page using mouse, keyboard, touch etc...
//whenever events are raised they are handled by event handler/listener (simple a block of code which runs on firing of an event)
// Eg of events are:
/*
mouse click
mouse hover
keypress
key release
scroll (up, down, left, right)
change
*/
// window.onload=function(){ 
//     window.alert('Hello World');
// }
//window.onload=()=>alert('hello world');
function show(){// event handler
    alert('hello world');
} 
//window.onload=show;// registering an event to an event handler

// DOM  Manipulation: It's used to manipulate html and css for a document using JS DomApi
//1. To get reference we have methods from document object.
/*document.queryselector('mention selector as #id, .class, tag')- mordern way of selecting elements by is id, class name, tagsname using the CSS selectors
  document.getElementById("id")
  document.getElementByTagsName("p")
  document.getElementByClassName("foo")
*/

var btn1 = document.querySelector("#btn1");// this will give you reference of HTMLElement button
//btn.onclick=show;
btn1.addEventListener('click',show);// another way to register an event

var btn2=document.getElementById("btn2");// this fetches the element by id only
btn2.onclick=()=>{
    var name=prompt('Enter your full name');
    document.write("Welcome "+name);// write function is used to write in the body of the web page
}

var addCars= document.querySelector("#btnAddCars");

addCars.addEventListener('click',addCarsToList);

function addCarsToList(){
    var carName= prompt('Enter the car name');
    var li=document.createElement('li');
    li.textContent=carName;
    var list=document.querySelector("#lstCars");
    list.appendChild(li);
}
// This checks the validation of the form
var btnsubmit=document.querySelector("#submit");
btnsubmit.addEventListener('click', validateForm);
function validateForm(){
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var query=document.querySelector("#query").value;
    if(name==""||name==null)
        alert('Name field cannot be blank');
    if(email==""||email==null)
        alert('Email field cannot be blank');
    if(query==""||query==null)
        alert('Query field cannot be blank');    
}

//Changes the name field value to uppercase
var nameField=document.querySelector("#name");
nameField.onkeyup=()=>{
    nameField.value=nameField.value.toUpperCase();
    nameField.style.background="yellow";
    nameField.style.color="blue";
    //alert(nameValue.toUpperCase());
}