// function greet(name){
//     console.log(`hello ${name}`);
// }

// function greetViswas(greetFn){

//     const name ="subbu";
//     greetFn(name)
// }
// greetViswas(greet);

// const eventEmitter= require("node:events")

// const emitter = new eventEmitter();

// emitter.on("order-pizza",(size,topping)=>{

//     console.log(`order recived with ${size} and with ${topping}`)
// });

// emitter.on("order-pizza",(size)=>{
//     if(size==="large"){
//         console.log("give cooldrink");
//     }
// })
// console.log("hi subbu");
// emitter.emit("order-pizza","large","bujjii");


// const buffer = new Buffer.from("subbu");
// console.log(buffer.toJSON());


// Asyncronus java script example 


const fs = require("node:fs")

console.log("first")
const fileContent = fs.readFileSync("./file.txt","utf-8");

console.log(fileContent);

console.log("second")
const subbu =fs.readFile("./file.txt","utf-8",(error, data)=>{
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})
console.log("seventh")
console.log(subbu)

console.log("third")
fs.readFile("./file.txt","utf-8",(error, data)=>{
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log("fourth")

const fileContent1 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent1)
const fileContent2 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent2)

const fileContent3 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent3)
const fileContent4 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent4)
const fileContent5 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent5)
const fileContent6 = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent6)