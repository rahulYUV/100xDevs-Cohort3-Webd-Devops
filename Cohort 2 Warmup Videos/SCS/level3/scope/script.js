// {
//     // let a = 10;
// //     var a = 10; // blcoked scoped 
// // }

// console.log(a);


// /*
// js sabse pehle jaise hi aapka fucntion dekhta hai sbse pehle js banata ha exectuation context , ye ek porocess hai jo ki different phases mein chalta hain 
// memory phase and doosre ke naame hai executaion phase 

// */

// // lexical scope ;
// // closure and how var are preserved 
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(123);
//     }
// }

// // it help it preventing the pollution 

// function cnt(){
//     let c = 0;
//     return function(){
//         c++;
//         console.log(c);
//     }
// }
// cnt();
// let fn = cnt();
// fn();
// fn();
// fn();
// 

// class Player{
//     constructor(name,elo){
//         this.name = name 
//         this.elo = elo;
//     }


// }

// let pl = new Player("rahul",3245);
// console.log(pl);
// console.log(pl.name)

function CreatePencil(name,price){
    this.name = name ;
    this.price = price;

}


 let natraj =  new CreatePencil("natraj",10);
 console.log(natraj);
 
 let expsra =  new CreatePencil("expsra",10);
 console.log(expsra);
 showName(expsra);
 function showName(obj){
    console.log(obj.name);
 }
 // prototype;

 CreatePencil.prototype.company ="natraja";

 