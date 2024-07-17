function abc(callback:(name:string)=>void, dynamicName:string){
    callback(dynamicName)
}

function abc1(name:string){
    console.log(`Hello ${name}`);
    
}


abc(abc1 , "Ali")
abc(abc1 , "Sara")


//Understanding callbacks
function parentFunction(func:()=>void){
    console.log("I am the parent Fucntion");
    func()
}
function childFunction(){
    console.log("I am the child function");
    
}
//passing a function as an argument to another function called Callback function.
// parentFunction(()=> {console.log("I am the child function")}) //passing an inline callback function
parentFunction(childFunction)

//Two attribute of callbacks
//1= the function passing to another function as an argument or parameter.
//2= the parent function has the control to invoke the callback. callback it self can not call 

//Practice 01 from slides
function processUserInput(callback:(name:string)=>void , initialName:string){
    callback("Sara") //static string
    callback(initialName) //dynamic string
}
function childCallback(name:string){
    console.log(`Hello ${name}`);
    
}

processUserInput(childCallback, "Naimal")
processUserInput(childCallback, "Salahuddin")


