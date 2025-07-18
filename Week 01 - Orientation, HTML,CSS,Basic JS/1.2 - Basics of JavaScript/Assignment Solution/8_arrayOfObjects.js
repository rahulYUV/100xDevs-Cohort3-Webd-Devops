// 1. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function takeUser(arr){
  let ans =[];
  for(let i=0;i<arr.length;i++){
    if(arr[i].age >18 ){
      ans.push(arr[i]);
    }
    
  }
  return ans
}

// console.log("this is testing")
let userrr =[
  {name:"rahul", age:19},
  {name:"kirat", age:21},
  {name:"kavya", age:15},
  {name:"sana", age:24}
]


function disp(user){
  console.log(user.name);

}
let data = takeUser(userrr);
console.log(data)// nama and age who is greater than 18
console.log("this is testing");

// Loop through the array and display each user's name
for(let i = 0; i < data.length; i++){
  disp(data[i]);
}



// console.log(takeUser(userrr));
// // print only name ;
// let data  = takeUser(userrr);
// console.log(data);
// function displayName(user){
// console.log(user.name);
// }

// displayName(data);









// // define a function called `getAdultUsers` that takes an array of users as an input
// function getUsers(users) {
//   // using filter method to filter out users who are more than 18 years old and store them in a new array
//   let adultUsers = users.filter((user) => user.age > 18);

//   // returns only the users who are more than 18 years old
//   return adultUsers;
// }

// // define an array of users
// let users = [
//   { name: "Bharat", age: 21 },
//   { name: "Deepak", age: 17 },
//   { name: "Harkirat", age: 27 },
//   { name: "Raj", age: 15 },
//   { name: "Niraj", age: 20 },
// ];

// // calls the function `getAdultUsers` with the array of users as an input
// console.log(getUsers(users)); // [ { name: 'Bharat', age: 21 }, { name: 'Harkirat', age: 27 }, { name: 'Niraj', age: 20 } ]
