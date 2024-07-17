"use strict";
function Cooking(cb) {
    console.log("Cooking started...");
    setTimeout(() => {
        console.log("Cooking Done");
        cb();
    }, 4000);
}
function FlyingChappal(cb) {
    console.log("Flying chappal coming...");
    setTimeout(() => {
        console.log("Flying Chappal Done");
        cb();
    }, 500);
}
function Smiling() {
    console.log("Smiling started");
    setTimeout(() => {
        console.log("Smiling");
    }, 0);
}
// function Washing(callback:()=>void){
//     console.log("Washing Started...!");
//     setTimeout(()=>{
//         console.log("Washing Done...!");
//         callback()
//     },5000)
// }
// function Saoking(callback:()=>void){
//     console.log("Saoking Started...!");
//     setTimeout(()=>{
//         console.log("Saoking Done...!");
//         callback()
//     },3000)
// }
// function Drying(){
//     console.log("Drying Started...!");
//     setTimeout(()=>{
//         console.log("Drying Done...!");
//     },2000)
// }
// // console.log("Folding Laundary");
// // Washing(()=>{
// //     Saoking(()=>{
// //         Drying()
// //     })
// // })
// // console.log("I am making biryani");
function callback(action, delay, cb) {
    setTimeout(() => {
        console.log(action);
        cb();
    }, delay);
}
console.log("cooking started");
callback("cooking done", 4000, () => {
    console.log("flying chappal");
    callback("flying chappal done", 500, () => {
        console.log("similing started");
        callback("smiling", 0, () => {
        });
    });
});
// Cooking(()=>{
//     FlyingChappal(()=>{
//         Smiling()
//     })
// })
