// Stack (primitive) => creates copies
// Heap (Non-primitive) => creatw reference

 let m = "hello";
 let n = m;
 n="helloji";

 console.log(m);
 console.log(n);
 
 let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "client@gmail.com"