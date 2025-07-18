// var a =10;
// var a =30;
// console.log(a);
const student ={name:"rahul kumar"};
student.name="kirat";
console.log(student.name);// const obj allow modification 

// {
//     let x =10;
//     var y =23;
//     let y =34;
//     // console.log(y); syntax error
// }

// console.log(y);
// console.log(x)// reference error
var a =12;
// window mein add karta hai 
// it is function scope

//const protect the variable 
const discount =12;

// temporal DEAD Zone 
// console.log(z);

let z =12;

const name="rahul";
const city="pube";
let age =19;


// primitives  
//number , float , boolean , null , undefined, symbol,biginit

// referece types , non primitives 
// arr , obj , function 

// let a = 12;// primitve // number 
let String = "rahul kumar"
let flag = true;
let arr=[1,2,3,4,5];
let brr = arr;
brr.pop();
brr.pop();
arr.push(5);
// console.log(arr);
// console.log(arr);

// '' singlw quote 
// " backticks "=? ``
// double ticks =""

let std =null;
std =+5;
// console.log(std);?//
// symbol -> unique immutable vaue;
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// they are different 

// bigInt
// very large number 


// reference type{bracket dikhe()};

let ab = [1,2,3];
let user ={};
// let userr=(a);
// console.log(typeof(a));

// early return value pattern 


// early return value ;

function getval(){
    if(num ==2){
        return num;
    }
}
function fetGrade(marks){
    if(marks >=75 && marks<=100){
        return `distinction`
    }else if(marks>=50 && marks<75){
        return `first class`;

    }
    else{
        return ` below 50 percent`;
    }
}
// console.log("grade start from here");
// console.log(fetGrade(75));// distincation 
// console.log(fetGrade(76));// distincation 
// console.log(fetGrade(55));// first class
// console.log(fetGrade(46));// below
// console.log(fetGrade(10));// below


// let i =0;
// 
// for(let i =1;i<=10;i++){
//     console.log(i);
// }
// let zz =1;
// while(zz!=10){
//     console.log(zz);
//     zz++;
// }

let sum =0;
for(let i=1;i<=100;i++) {
    sum += i;


}

//   let value = prompt("enter a number "); 
//   console.log(value);     

// console.log(sum);
// console.log("this is clear");
// divisible by 3 
// for(let k = 1;k<=50;k++){
//     if(k%3==0){
//         console.log(k);
//     }
// }
// reversh a string 


// fucntion 

function calm1(){
    console.log("keep calm");
    console.log("keep calm");
    console.log("keep calm");
}

calm1();

let ask = function(){
    console.log("we do");
}

ask(); // we do
// console.log(ask);// [Function: ask]

// fn dec 
// fn name (){};// fmc expresion 

// ()=>{};
// let varr = ()=>{console.log("hurra")};
// varr();

// rest amd spread;

function restt(... val){
    console.log(val);

}
restt(1,2,3,45,6,7,8);
// ... if its appleid in fucntiaon parameter then its known as rest 
// / ... attach with fucnation and object then its know as  spread
// first class function 
// exist in js , thosse funcation which can be treate as a value 
// funcation that can treated as a value 
let abcd = function(){

}

// first class funcation 
function shout(msg){
    return msg.toUpperCase();

}
function processMessage(fn){
    console.log(fn("hello"));
}
processMessage(shout)

 // a high order function is a function that accept a funcation as a argument or return a function 

// high order function 
// those function which can return or except a fucnation in her parameter 
// pure function 
// a funcation which can not change the outside value
// a function which can change the outsider value 
// known as impure function 
// clousers = a function who return a fun and the return func who use parent 

function creteMul(x){
    return function(y){
        return x*y;
    }
}
let double = creteMul(2);
console.log(double(2));

console.log(double(3));


// closure 
// a function that return a function and user a vairrable of parents 

function createCounter(){
    let count =0;
    return function(){
        // this is the inner function (the clouser)
        count+=1;
        return count ;
    }
}

const counter1 = createCounter(); // counter one is a clouser
console.log(counter1());
console.log(counter1());


const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());


// iife 10 time 

(
    function(){

    }
)();
(
    function(){

    }
)();
(function play(){

})();

(
    function(){
        // this is function body;
    }
)();

(
    function(){
        // this is funcation body as well 
    }
)();// this is iife

(
    function(){
        // this is function body
    }
)();


// (
//     function hurra(){
//             console.log("hurra");
//     }
// )();
console.log(" we are using by its name")

//hurra();// im using this out side of its scope 

function mull(num1,num2){
    return num1*num2;

}
// convert this inot arrow function
 let ans = (a,b)=>{
    return a*b;
 }
//  console.log(ans(5,6));

function sayHI(name="guest"){
    console.log("hi",name);

}
// sayHI();// hi guest // defualt value 
//... mean it can take multiple argument => rest operatore 
// and the arguemnt is the array

function takeEasy(... score){
    let sum =0;

    for(let i =0;i<score.length;i++){
        console.log(score[i]);
       sum += score[i];


    }
    return sum ;

}
// console.log("all clear");
//  console.log(takeEasy(21,3,4,6,7));
