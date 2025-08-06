// // // // normal function in js 

// // // function sum(a,b){
// // //     let sum = a+b;
// // //     console.log(sum);
// // //     return sum;

// // // }

// // // sum(523,5235);
// // // sum("what",5235);

// // // // sum of 1 to a number 

// // // function fum1ton(n){
// // //     let ans =0;
// // //     let i =0;
// // //     for(i=0;i<=n;i++){


// // //         ans +=i;

// // //     }
// // //     return ans;

// // // }
// // // console.log(fum1ton(3));
// // // // n(n-2)+1;

// // // const fs = require("fs");

// // // // ========================================
// // // // SYNCHRONOUS (BLOCKING) - Current approach
// // // // ========================================
// // // console.log("Before reading file synchronously");
// // // const contents = fs.readFileSync("a.txt","utf-8");
// // // console.log("Sync contents:", contents);
// // // console.log("After reading file synchronously");

// // // // ========================================
// // // // ASYNCHRONOUS (NON-BLOCKING) - Better approach
// // // // ========================================
// // // console.log("\nBefore reading file asynchronously");

// // // fs.readFile("a.txt", "utf-8", function(err, data) {
// // //     if (err) {
// // //         console.log("Error reading file:", err);
// // //         return;
// // //     }
// // //     console.log("Async contents:", data);
// // // });

// // // console.log("After starting async file read (this prints immediately)");

// // // // ========================================
// // // // WITH PROPER ERROR HANDLING (SYNC)
// // // // ========================================
// // // try {
// // //     const safeContents = fs.readFileSync("a.txt", "utf-8");
// // //     console.log("Safe sync contents:", safeContents);
// // // } catch (error) {
// // //     console.log("Error occurred:", error.message);
// // // }

// // // const f1 = require("fs");
// // // const content = f1.readFileSync("a.txt","utf-8");
// // // console.log(content);
// // // const contentb = f1.readFileSync("b.txt","utf-8");
// // // console.log(contentb);

// // const t1 = require("fs");
// // t1.readFile("a.txt","utf-8", function(err, data) {
// //     if (err) {
// //         console.log("Error:", err);
// //     } else {
// //         console.log(data);
// //     }
// // });

// // function read(err,data){
// //     console.log(data);
// // }

// // fs.readFile("a.txt","utf-8",read);


// // // functionl argumnetsl'


// // function operation(a,b,fn){
// //     fn(a,b);
// //     console.log(fn(a,b));
    
// // }
// // function add(a,b){
// //     return a+b;

// // }

// // console.log("done");


// const fs = require("fs");

// function read(err,data){
//     if(err){
//         console.log(err);
//         console.log("data is missing");

//     }else{
//      console.log(data);
//     }
   
// }

// fs.readFile("z.txt","utf-8",read);

// // readFile =
// // readFile - (filepath , encoding , op);

// sync code are those code that are exectured in a sequence 
/*

*/

setTimeout(()=>{
            console.log("hn hi hm hi hain settimeout");
},5000);


console.log("what we can do");

// call back is the argugemtn of anohter funcain 


// function calc(a,b, callbackFn){
//     callbackFn(a,b);



// }

// function sum(a,b){
//     console.log(a+b);
// }
// calc(453,634,sum);

setTimeout(
function getdata(data){
    console.log("tring to acces data"+data);
    

},3000);