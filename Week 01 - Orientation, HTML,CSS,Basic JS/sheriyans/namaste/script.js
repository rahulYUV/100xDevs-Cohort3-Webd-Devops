// ============================================
// JAVASCRIPT FUNDAMENTALS PRACTICE
// ============================================

// ============================================
// 1. VARIABLES AND SCOPE
// ============================================

// Variable declarations and modifications
const student = {name: "rahul kumar"};
student.name = "kirat";
console.log(student.name); // const objects allow property modification

// Scope examples
var a = 12; // Function scoped, added to window object
const discount = 12; // Block scoped, cannot be reassigned
let z = 12; // Block scoped, can be reassigned

const name = "rahul";
const city = "pune";
let age = 19;

// ============================================
// 2. DATA TYPES
// ============================================

// Primitive types: number, string, boolean, null, undefined, symbol, bigint
let String = "rahul kumar";
let flag = true;
let arr = [1, 2, 3, 4, 5];

// Reference types behavior
let brr = arr; // Both variables point to the same array
brr.pop();
brr.pop();
arr.push(5);

// Symbol - unique immutable values
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// u1 and u2 are different even with same description

// Null and type conversion
let std = null;
std = +5; 

// ============================================
// 3. FUNCTIONS
// ============================================

// Function to calculate grades based on marks
function getGrade(marks) {
    if (marks >= 75 && marks <= 100) {
        return "distinction";
    } else if (marks >= 50 && marks < 75) {
        return "first class";
    } else {
        return "below 50 percent";
    }
}

// Example usage:
// console.log(getGrade(75)); // distinction
// console.log(getGrade(55)); // first class
// console.log(getGrade(46)); // below 50 percent

// Function declarations
function calm1() {
    console.log("keep calm");
    console.log("keep calm");
    console.log("keep calm");
}

// Function expressions
let ask = function() {
    console.log("we do");
};

// Arrow functions
let arrow = () => {
    console.log("hurra");
};

// ============================================
// 4. ADVANCED FUNCTION CONCEPTS
// ============================================

// Rest parameters - collect multiple arguments into an array
function restExample(...values) {
    console.log(values);
}
restExample(1, 2, 3, 45, 6, 7, 8);

// First-class functions - functions treated as values
function shout(msg) {
    return msg.toUpperCase();
}

function processMessage(fn) {
    console.log(fn("hello"));
}
processMessage(shout);

// Higher-order function - accepts or returns functions
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

let double = createMultiplier(2);
console.log(double(2)); // 4
console.log(double(3)); // 6

// ============================================
// 5. CLOSURES
// ============================================

// Closure - function that returns a function and uses parent's variables
function createCounter() {
    let count = 0;
    return function() {
        // This is the inner function (the closure)
        count += 1;
        return count;
    };
}

const counter1 = createCounter(); // counter1 is a closure
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

// ============================================
// 6. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ============================================

// IIFE - Functions that execute immediately
(function() {
    // This function runs immediately
})();

(function() {
    // Another IIFE example
})();

(function play() {
    // Named IIFE
})();

(
    function(){
        
    }
)()
// ============================================
// 7. ARROW FUNCTIONS AND DEFAULT PARAMETERS
// ============================================

// Converting regular function to arrow function
function multiply(num1, num2) {
    return num1 * num2;
}

// Arrow function equivalent
let multiplyArrow = (a, b) => {
    return a * b;
};

// Default parameters
function sayHi(name = "guest") {
    console.log("Hi", name);
}
// sayHi(); // Output: Hi guest

// Rest parameters - multiple arguments as array
function calculateSum(...scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum;
}
// console.log(calculateSum(21, 3, 4, 6, 7));


// ============================================
// 8. PRACTICAL EXAMPLES
// ============================================

// BMI Calculator
function calculateBMI(weight, height) {
    return weight / (height * height);
}
console.log(calculateBMI(54, 5.4).toFixed(2));

// Discount Calculator using Higher-Order Functions
function discountCalculator(discount) {
    return function(price) {
        return price - (price * discount / 100);
    };
}

// ============================================
// 9. ARRAY OPERATIONS
// ============================================

// Basic array operations
let marks = [0, 1, 2, 3, 4, 5, 6];
console.log(marks[3]); // Access element at index 3

// Array modification methods
marks.pop(); // Remove last element
marks.splice(2, 2); // Remove 2 elements starting from index 2
let slicedArray = marks.slice(1, 2); // Extract elements without modifying original

// Array iteration with forEach
let numbers = [1, 2, 3, 34, 4, 5];
numbers.forEach(function(value) {
    console.log(value);
});

// Arrow function with forEach
numbers.forEach(element => {
    console.log(element);
});

// ============================================
// 10. ARRAY METHODS (MAP, FILTER, REDUCE)
// ============================================

// Map - transform each element
let numbersArray = [1, 2, 3, 4, 45];
let incrementedNumbers = numbersArray.map(function(val) {
    return val + 1;
});
console.log(incrementedNumbers);

// Filter - select elements based on condition
let evenNumbers = numbersArray.filter((e) => {
    return e % 2 === 0;
});

// Reduce - combine all elements into single value
let arrayForReduce = [1, 2, 3, 4, 5, 6];
const sum = arrayForReduce.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// ============================================
// 11. SPREAD OPERATOR AND ARRAY MANIPULATION
// ============================================

// Spread operator - create copy of array
let originalArray = [1, 2, 3, 4, 5, 6];
let copiedArray = [...originalArray];
copiedArray.pop();
console.log(copiedArray); // Modified copy
console.log(originalArray); // Original unchanged

// Array methods for adding/removing elements
let fruits = ["apple", "banana", "litchi"];
console.log(fruits[1]); // Access element
fruits.unshift("mango"); // Add to beginning
fruits.push("pineapple"); // Add to end
console.log(fruits);

// ============================================
// 12. ARRAY SORTING
// ============================================

// Note: Fixed variable name issue - using 'sortArray' instead of undefined 'arr'
let sortArray = [10, 20, 30];
sortArray.sort((a, b) => {
    return b - a; // Sort in descending order
});
console.log(sortArray);





// object 
 const user ={
    name:"rahul",
    address:{
        city:"patna",
        location:{
            lat:2314,
            lng:77.3
        }
    }
 }
// print lat
console.log(user.address.location.lat)

let userr ={
    name:"rahul",
    age:24,
    email:"test@test.com"
}

for(let key in userr){
    console.log(key);
    console.log(userr[key]);


    
}
let obj={
    name:"this is obj1",
    isLoggesIn:true
}
// console.log(obj);
// const obj2 ={... obj};
// console.log(obj2);

// deep clone 
// we convert in stringfy
// JSON.stringify()

// JSON.stringify(obj)

// let obj3 = JSON.parse(JSON.stringify(obj))
// // console.log(obj3);
// // optinal chaining


let objj={
    name:"this is obj1",
    isLoggesIn:true
}

// console.log(objj?.nammee);

let studentt ={
     name:"rahul",
    age:19,
    isEnrolled:true
}

let key ="admin"
const r ={
    admin:"Rahul "

}
console.log(r[key]);
let{ "admin":adminn }= r;

console.log(adminn);

for(let key in r){
    console.log(key);
}
const courses ={
    title:"js",
    duration:"4 weeks"
}
for(let key in courses){
    console.log(key +" is "+ courses[key]);
}







