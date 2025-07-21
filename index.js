// console.log("Start");
// fetch("https://github.com/praveen67566").then((data)=>{
//     console.log(data)
// });
// console.log("End");

// Blocking code---> this is sync javascript code which is a blocking code which blocks the main thread

// function fn(){
//     for(let i=0;i<10000000;i++){
//         console.log('hello there')
//     }
// }

// console.log('start ')
// fn();
// console.log('End');

//<----- Promise ----->

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("Data received"),1000)
});
promise.then((data)=> console.log(data));
