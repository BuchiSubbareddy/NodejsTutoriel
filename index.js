// function greet(name){
//     console.log(`hello ${name}`);
// }

// function greetViswas(greetFn){

//     const name ="subbu";
//     greetFn(name)
// }
// greetViswas(greet);

const eventEmitter= require("node:events")

const emitter = new eventEmitter();

emitter.on("order-pizza",(size,topping)=>{

    console.log(`order recived with ${size} and with ${topping}`)
});

emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("give cooldrink");
    }
})
console.log("hi subbu");
emitter.emit("order-pizza","large","bujjii");