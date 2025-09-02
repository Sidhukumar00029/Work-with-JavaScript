let s = "32";
let p = null
console.log(typeof s); //define by value
console.log(typeof(s)); //define by method

let valueInNumber = Number(s);
console.log(typeof s);
console.log( valueInNumber);
console.log( p);

let isLoggedIn = 1;
let isLoggedInHere = "";
let booleanILoggesIn = Boolean(isLoggedIn);
console.log(booleanILoggesIn);

let someNumber = 45;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


/*
If we convert
"33" => 33
"33av" => NaN/ Not a Number
true => 1
false => 0
"" => false
"Sidharth" =>true 
*/