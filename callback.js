"use strict";
// function abc(callback:(name:string)=>void, dynamicName:string){
//     callback(dynamicName)
// }
// function abc1(name:string){
//     console.log(`Hello ${name}`);
// }
// abc(abc1 , "Ali")
// abc(abc1 , "Sara")
function parentFunction(func) {
    console.log("I am the parent Fucntion");
    func();
}
function childFunction() {
    console.log("I am the child function");
}
//passing a function as an argument to another function called Callback function.
// parentFunction(()=> {console.log("I am the child function")}) //you can write it like this too.
// parentFunction(childFunction)
//Two attribute of callbacks
//1= the function passing to another function as an argument or parameter.
//2= the parent function has the control to invoke the callback. callback it self can not call 
//Practice 01 from slides
function processUserInput(callback, initialName) {
    callback("Sara"); //static string
    callback(initialName); //dynamic string
}
function childCallback(name) {
    console.log(`Hello ${name}`);
}
// processUserInput(childCallback, "Naimal")
// processUserInput(childCallback, "Salahuddin")
