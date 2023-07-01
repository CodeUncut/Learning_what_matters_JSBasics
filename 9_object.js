//object

// ek se jyada bande ki baat ki to vo hua array, but ek bande ke baare mei sari baat ki to vo hua object

// object hai ek bande ki details ko hold karna, in a key value pair

//1. blank obj
var a = {}

// 2. filled Object
// var a ={
//     age :21,
//     name :"vaibhav",
//     email: "saxenavaibhav101@gmail.com",
//     phone: 94565698788,
//     linkedIn: "vaibhav"
// }

// peoperty and mehod
var ghadi= {
    brand: "zebronics",
    price: "3k",
    type: "smart",
    digital: true,
    color: "black", // here color is a property
    kuchbolona : function(){} // here kuchbolona is a method because its value is a fuction
}

console.log(ghadi.brand)

// how to change value of property

ghadi.price = "9k";
console.log(ghadi.price) // value of ghadi price changed from 3k to 9k
