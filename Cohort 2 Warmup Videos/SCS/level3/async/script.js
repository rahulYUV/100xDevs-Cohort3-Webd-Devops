// // setTimeout(()=>{
// //     console.log("hello1");
// // },3000);
// console.log("hello 2");
// console.log("hello 3");



// function lateWorking(){
//     setTimeout(()=>{
//             console.log(Math.random()*100);
//     },Math.floor(Math.random()*1000));
    
// }

// lateWorking();


// ap ek prmoise banate ho jo ki reject hoga ya resolve hog par 
// hame dono k liye code likhna padega
// 



fetch("https://randomuser.me/api/")
.then((rawData)=>{
   return rawData.json();
}).then((data)=>{
    console.log(data.result[0].name);
})
.catch((err)=>{
    console.log("error")
})