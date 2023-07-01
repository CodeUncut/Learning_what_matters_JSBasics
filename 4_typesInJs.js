// types in JS ✔

//Two types:
// 1. Primitive - number, string, null, undefined, boolean
// 2. Reference- {}, [], ()


// Refernce- it is something, if real value is passed in another variable then its original value also changes.
// Primitve - is something, if real value is passed in another variable then its original value doesnot changes.

/* Primitive type example
var a = 15; // iss a ke pass khud ki value hai
var b = a; is b ke pass khud ki value hai, aur agar b me change karenge to a change mein nhi hoga

b +=2;
console.log(b);
conole.log(a)*/


var a = [10, 12, 15]; // a ke pass khud ki value hai
var b = a; // iss b ke paas khudki koi value nhi hai, a ki value hai aur agar b me change karenge to a mein bhi change honge

b.pop(); // value of a is the reference value for b here 
console.log(b);


// check primitive and reference
/* if brackets then reference, if no brackets then primitive*/

// var abcd = "5454654" //primitive
// var abc = NAN // primitive

// var abc = {} //reference