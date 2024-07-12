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


//const fs = require("node:fs")

//  console.log("first")
//  const fileContent = fs.readFileSync("./file.txt","utf-8");

//  console.log(fileContent);

//  console.log("second")
//  fs.readFile("./file.txt","utf-8",(error, data)=>{
//      if(error){
//          console.log(error)
//      } else {
//          console.log(data)
//      }
//  })
//  console.log("seventh")
// // console.log(subbu)

//  console.log("third")
//  fs.readFile("./file.txt","utf-8",(error, data)=>{
//      if(error){
//          console.log(error)
//      } else {
//          console.log(data)
//      }
//  })

//  console.log("fourth")

// const fileContent1 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent1)
// const fileContent2 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent2)

// const fileContent3 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent3)
// const fileContent4 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent4)
// const fileContent5 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent5)
// const fileContent6 = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContent6)

// fs.writeFileSync("./greet.txt","hello world")


// const { error } = require("node:console");
// const fs = require("node:fs/promises")

// async function readfile()
// {
// try{
//     const data = await fs.readFile("./file.txt","utf-8")
//     console.log(data)

// } catch(err)
// {console.log(err)}

// }

// readfile();



//streams means transfer data from one file to another file///////

// const fs = require("node:fs")

// const readable = fs.createReadStream("./file.txt",{encoding :"utf-8"})

// const writable = fs.createWriteStream("./file2.txt");

// readable.on("data",(chunk)=>{
//    console.log(chunk);
//    writable.write(chunk);
// });
// same stream program used for pipes and added bleow line and commented readable. on
// readable.pipe(writable);


const http = require("node:http")

const server = http.createServer((req,res)=>{
    //res.writeHead(200);
    res.end("hello web server");
});

server.listen(3000,()=>{
    console.log("server created successfully on port 300")
});

