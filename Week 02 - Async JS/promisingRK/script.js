// // const user ={
// //     name:"rahul"
// // }


// // class Rectangle{
// //     constructor(height, width){
// //         this.width = width;
// //         this.height = height;

// //     }

// //     area(){
// //         const area = this.width * this.height;
// //         return area;

// //     }
// // }

// // const rect = new Rectangle(4,2);
// // const area = rect.area();

// // console.log(area);


// const date = new Date();
// console.log(date.getMonth()+1);
// console.log(date.getDay());



// // setTimeout(function(){
// //         console.log("we won after 3 second");

// // },3000);


// // def a promise is hard 
// // using a promise is easy 



// // function promiceCallback(resolve){
// //     setTimeout(resolve,3000);

// // }


// function random(wrk){// reolve is also a function 
//    setTimeout(wrk,3000);



// }
// let p = new Promise(random);// random represent when it will happend 

// console.log(p);
// // pending mean it wil eventually give something 
// // when it wil eventually completel 
// p.then(callback);

// function callback(){
//     console.log("promise is happend")
// }

// create a promisified version or a fs.readFile, fs.writeFIle, 




function resolve(resolve){
    setTimeout(resolve,3000);
}
let fsreadd = new Promise(resolve);

fsreadd.then(callback);
function callback(){
    console.log("file is read");

}
// def your own async function 
// how to create more promise 
