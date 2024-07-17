//Practice 01
function Cooking(cb:()=>void){
    console.log("Cooking started...");
    setTimeout(() => {
        console.log("Cooking Done");
        cb()
    }, 4000);
}

function FlyingChappal(cb:()=>void){
    console.log("Flying chappal coming...");
    setTimeout(()=>{
        console.log("Flying Chappal Done");
        cb()
    }, 500)
}

function  Smiling(){
    console.log("Smiling started");
    setTimeout(() => {
        console.log("Smiling");
        
    }, 0)
}

//Invoking Function
Cooking(()=>{
    FlyingChappal(()=>{
        Smiling()
    })
})

//Practice 02
function Washing1(callback:()=>void){
    console.log("Washing Started...!");
    setTimeout(()=>{
        console.log("Washing Done...!");
        callback()
    },5000)
    
}
function Saoking(callback:()=>void){
    console.log("Saoking Started...!");
    setTimeout(()=>{
        console.log("Saoking Done...!");
        callback()
    },3000)
    
}
function Drying1(){
    console.log("Drying Started...!");
    setTimeout(()=>{
        console.log("Drying Done...!");
        
    },2000)
}
//Invoking Function
console.log("Folding Laundary");

Washing1(()=>{
    Saoking(()=>{
        Drying1()
    })
})
console.log("I am making biryani");


//Achieve concurrency using Callback Hell with a single function
function callback(action:string, delay:number ,cb:()=>void){
    setTimeout(() => {
        console.log(action);
        cb()
    }, delay);
}

console.log("cooking started");
callback("cooking done",4000,  ()=>{
    console.log("flying chappal");
    callback("flying chappal done" , 500,()=>{
        console.log("similing started");
        callback("smiling" ,0 ,  ()=>{

        })
    })
})




















