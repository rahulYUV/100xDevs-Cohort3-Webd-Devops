// // //  every thing in js is a object 
// // // array in ja , arr/vec in java . vector in rust 
// // // object in js is the collection of keyValue of pair 
// // let user ={
// //   name:"rahul",

// //   age:25
// // }
// // // console.log(user.name);
// // // console.log(user["name"]);

// // // function greet(user){
// // //   let greett = `goodmorning${ user.name}and your age is${user.age}`
// // //   // console.log(greett);
// // // }

// // // greet(user);

// // function greetWithAge(user){
// //   let age = user.age;
// //   console.log("Hi mr/mrs"+user.name+" "+ user.age);


// // }
// let instaUser=[{
//   name:"rahul",
//   age :19
// },{
//   name:"harkirat",
//   age:28
// }];
// console.log(instaUser[0]);
// console.log(instaUser[0].name+" this is the name ");

const users = [{
  name:"rahul",
  age:21,
  gender:"male"
},{
  name:"kirat",
  age:25,
  gender:"male"
},{
  name:"priya",
  age:"24",
  gender:"female"

}
]

function nameAndAge(arr){
  let ans=[];
  for(let i =0;i<arr.length;i++){
      if(arr[i].age>18 && arr[i].gender === "male"){
        ans.push(arr[i]);
      }}

      return ans;
}
let validate = nameAndAge(users);
console.log(validate);








// let arr = [
//   "Bharat",
//   21,
//   {
//     name: "Bharat",
//     age: 21,
//     cities: [
//       "Delhi",
//       "Mumbai",
//       "Bangalore",
//       {
//         country: "India",
//         population: 1500000000,
//       },
//     ],
//   },
// ];

// console.log(arr[0]); // Bharat
// console.log(arr[1]); // 21
// console.log(arr[2]); // { name: 'Bharat', age: 21, cities: [ 'Delhi', 'Mumbai', 'Bangalore', { country: 'India', population: 1500000000 } ] }
// console.log(arr[2].name); // Bharat
// console.log(arr[2].age); // 21
// console.log(arr[2].cities); // [ 'Delhi', 'Mumbai', 'Bangalore', { country: 'India', population: 1500000000 } ]
// console.log(arr[2].cities[0]); // Delhi
// console.log(arr[2].cities[1]); // Mumbai
// console.log(arr[2].cities[2]); // Bangalore
// console.log(arr[2].cities[3]); // { country: 'India', population: 1500000000 }
// console.log(arr[2].cities[3].country); // India
// console.log(arr[2].cities[3].population); // 1500000000


// // Create a function that takes an array of objects as an input, and returns the users whose age > 18 and are male
// let users = [
//   {
//     name: "Bharat",
//     age: 21,
//     gender: "male",
//   },
//   {
//     name: "Priya",
//     age: 22,
//     gender: "female",
//   },
//   {
//     name: "Rani",
//     age: 15,
//     gender: "female",
//   },
//   {
//     name: "Deepak",
//     age: 24,
//     gender: "male",
//   },
//   {
//     name: "Rahul",
//     age: 17,
//     gender: "male",
//   },
// ];

// // for (let i = 0; i < users.length; i++) {
// //   console.log(users[i]);
// // }

// function getEligibleUsers(users) {
//   let ans = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18 && users[i].gender === "male") {
//       ans.push(users[i]);
//     }
//   }

//   return ans;
// }

// let allUsers = getEligibleUsers(users);
// console.log(allUsers); 