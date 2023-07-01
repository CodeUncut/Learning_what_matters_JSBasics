// hoisting ✔

// variable ko banane se pahele use kar sakte hai
// hoisting and hosting are two different entitites
// hoisitng - variable and functions are hoisted which means their declartion is moved on the top

/*var a = 15;*/
//Js converts this code into 
console.log(a); // In another languages it will give an error // will return undefined in JS
var a; //Initiationalization
a = 15; // Declaration
console.log(a); // return 15
console.log(b); // return not defined

//Difference between not-defined vs undefined


// not-defined - something which does not exists
//undefined - something which exists but it's value is not present at the moment