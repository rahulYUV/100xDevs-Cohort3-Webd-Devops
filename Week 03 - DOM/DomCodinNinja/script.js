// // dom  ;
// // represent the logical structure of webpage 
// // it is collection of object
// // get element by id 

// // let head1 = document.getElementById("head1");
// // console.log(head1);

// // head1.style.color = "red"; 
// // head1.style.backgroundColor="black";

// // var head = document.querySelectorAll("h3");
// // head.style.color="blue";
// // console.log(head);

// // let's start 
// // Method 1: Select by ID (returns single element)
// // let ele = document.getElementById("head3");
// // console.log(ele);
// // ele.style.color = "blue";

// // // Method 2: Select by ID using querySelector (returns single element)
// // let eleById = document.querySelector("#head3");
// // console.log(eleById);

// // // Method 3: Select by class (returns NodeList)
// // let classes = document.querySelectorAll(".hClass");
// // console.log(classes);

// // To style NodeList elements, you need to loop through them
 

















// let h3 = document.querySelector("h3");
// // console.dir(h3);
// // h3.innerText ="red";

// let a = document.querySelector("a");


// a.href="https//google.com";
// console.log(a);
// // set and get attribute 

// a.setAttribute("href","https://www.google.com");
// let fb = document.querySelector("#facebook");
// console.log(fb)
// fb.setAttribute("href","https://www.facebook.com");

// let img = document.querySelector("#im");
// console.log(img);

// // img.src ="https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";

// // img.setAttribute("src","https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8");

// // console.log(img.getAttribute("src"));

// let h1 = document.createElement("h1");
// h1.innerText="this is appending";
// document.querySelector("body").append(h1);
  
// // let para = document.createElement("p");
// // para.textContent="this is pra";
// // document.querySelector("body").appendChild(para);
// // document.querySelector("body").removeChild(para);
// // document.querySelector("body").removeChild(h1);

// document.getElementById("head2").innerHTML="welcome to the josh";

const li = document.querySelectorAll("li");
console.log(li);

// for(let i=0 ;i<li.length;i++){
//     console.log(li[i].textContent);
// }

let data = document.querySelectorAll("img");
console.log(data);
let dataa = data.getAttribute("src");
console.log(dataa)

