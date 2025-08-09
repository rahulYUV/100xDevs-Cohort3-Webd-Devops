// ================================
// ASYNC JAVASCRIPT - COMPLETE GUIDE WITH SOLUTIONS
// ================================

console.log("🚀 Async JavaScript Learning - Solutions & Explanations");

// ================================
// 1. CALLBACK PRACTICE
// ================================

/*
CONCEPT: Callbacks
- A callback is a function passed as an argument to another function
- It gets executed after some operation is completed
- Foundation of asynchronous programming in JavaScript
*/


function callbackk(a,b,callback){
    let sum = num1 + num2;
    callback(sum);
   
}

function addWithCallback(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum); // Execute the callback with the result
}

// Usage Example:
addWithCallback(5, 3, function(result) {
    console.log("1. Callback Result:", result); // Output: 8
});

// Arrow function version:
addWithCallback(10, 20, (result) => {
    console.log("1. Arrow Callback Result:", result); // Output: 30
});

// ================================
// 2. SIMULATE SETTIMEOUT
// ================================

/*
CONCEPT: setTimeout
- setTimeout(function, delay) - executes code after a delay
- It's asynchronous - doesn't block the main thread
- Returns a timer ID that can be used with clearTimeout
*/

function delayedHello() {
    setTimeout(() => {
        console.log("2. Hello after 2 seconds! ⏰");
    }, 2000);
    
    console.log("2. This runs immediately (before the timeout)");
}

delayedHello();

// ================================
// 3. PROMISE BASICS
// ================================

/*
CONCEPT: Promises
- Promise represents eventual completion/failure of async operation
- Three states: Pending, Resolved (fulfilled), Rejected
- Better than callbacks - avoids callback hell
*/

function createSuccessPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3. Success! Promise resolved! ✅");
        }, 1000);
    });
}

// Using the promise:
createSuccessPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// ================================
// 4. PROMISE CHAINING
// ================================

/*
CONCEPT: Promise Chaining
- .then() returns a new promise
- Allows sequential async operations
- Each .then() gets the result of the previous one
*/

function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 500);
    });
}

function multiplyByTen(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * 10);
        }, 500);
    });
}

// Chaining the promises:
getNumber()
    .then(number => {
        console.log("4. First promise result:", number);
        return multiplyByTen(number);
    })
    .then(result => {
        console.log("4. Final chained result:", result); // Output: 50
    })
    .catch(error => {
        console.log("4. Chain error:", error);
    });

// ================================
// 5. ASYNC/AWAIT PRACTICE
// ================================

/*
CONCEPT: Async/Await
- Syntactic sugar over promises
- Makes async code look synchronous
- Must use 'await' inside 'async' function
- Easier to read and debug than .then() chains
*/

async function asyncAwaitExample() {
    try {
        console.log("5. Starting async function...");
        
        const result = await createSuccessPromise();
        console.log("5. Async/await result:", result);
        
        const number = await getNumber();
        const multiplied = await multiplyByTen(number);
        console.log("5. Async/await chained result:", multiplied);
        
    } catch (error) {
        console.log("5. Async error:", error);
    }
}

// Call the async function:
asyncAwaitExample();

// ================================
// 6. FETCH API
// ================================

/*
CONCEPT: Fetch API
- Modern way to make HTTP requests
- Returns a promise
- Need to call .json() to parse JSON response
- .json() also returns a promise
*/

async function fetchExample() {
    try {
        console.log("6. Fetching data from API...");
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        
        console.log("6. Fetched data:", data);
        console.log("6. Todo title:", data.title);
        
    } catch (error) {
        console.log("6. Fetch error:", error);
    }
}

// Call fetch example:
fetchExample();

// Alternative with .then():
fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(data => {
        console.log("6. Alternative fetch result:", data.title);
    })
    .catch(error => {
        console.log("6. Alternative fetch error:", error);
    });

// ================================
// 7. ERROR HANDLING
// ================================

/*
CONCEPT: Error Handling in Async Code
- Promises: use .catch() method
- Async/await: use try/catch blocks
- Always handle errors to prevent crashes
*/

function errorPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("7. Something went wrong! ❌"));
        }, 1000);
    });
}

// Method 1: Using .catch()
errorPromise()
    .then(result => {
        console.log("7. This won't run");
    })
    .catch(error => {
        console.log("7. Caught with .catch():", error.message);
    });

// Method 2: Using async/await with try/catch
async function handleErrorWithTryCatch() {
    try {
        const result = await errorPromise();
        console.log("7. This won't run either");
    } catch (error) {
        console.log("7. Caught with try/catch:", error.message);
    }
}

handleErrorWithTryCatch();

// ================================
// 8. MULTIPLE PROMISES (Promise.all)
// ================================

/*
CONCEPT: Promise.all
- Runs multiple promises in parallel
- Waits for ALL promises to resolve
- If ANY promise rejects, Promise.all rejects
- Much faster than running promises sequentially
*/

function createPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved with: ${value}`);
        }, delay);
    });
}

async function multiplePromisesExample() {
    try {
        console.log("8. Starting multiple promises...");
        
        const promises = [
            createPromise("Data A", 1000),
            createPromise("Data B", 2000),
            createPromise("Data C", 1500)
        ];
        
        // All promises run in parallel
        const results = await Promise.all(promises);
        
        console.log("8. All promises completed:");
        results.forEach((result, index) => {
            console.log(`8. Result ${index + 1}: ${result}`);
        });
        
    } catch (error) {
        console.log("8. Promise.all error:", error);
    }
}

multiplePromisesExample();

// ================================
// 9. CUSTOM DELAY FUNCTION
// ================================

/*
CONCEPT: Creating Utility Functions
- Common pattern: wrapping setTimeout in a Promise
- Useful for adding delays in async functions
- Reusable utility function
*/

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Usage examples:
async function delayExample() {
    console.log("9. Starting delay example...");
    
    await delay(1000);
    console.log("9. 1 second passed");
    
    await delay(2000);
    console.log("9. 3 seconds total passed");
    
    await delay(500);
    console.log("9. 3.5 seconds total - Delay example complete! ⏱️");
}

delayExample();

// ================================
// 10. CALLBACK HELL EXAMPLE
// ================================

/*
CONCEPT: Callback Hell
- When callbacks are nested deeply
- Makes code hard to read and maintain
- This is WHY promises and async/await were created
- Also called "Pyramid of Doom"
*/

console.log("10. Callback Hell Example:");

// BAD EXAMPLE - Callback Hell:
setTimeout(() => {
    console.log("10. Step 1 completed");
    
    setTimeout(() => {
        console.log("10. Step 2 completed");
        
        setTimeout(() => {
            console.log("10. Step 3 completed");
            console.log("10. ☠️ This is callback hell - hard to read!");
        }, 1000);
        
    }, 1000);
    
}, 1000);

// GOOD EXAMPLE - Using async/await:
async function betterSequentialExecution() {
    await delay(3500); // Wait for callback hell to finish
    
    console.log("10. Better approach with async/await:");
    
    await delay(1000);
    console.log("10. ✅ Step 1 completed (clean)");
    
    await delay(1000);
    console.log("10. ✅ Step 2 completed (clean)");
    
    await delay(1000);
    console.log("10. ✅ Step 3 completed (clean)");
    console.log("10. 🎉 Much cleaner and readable!");
}

betterSequentialExecution();

// ================================
// BONUS: ADVANCED PATTERNS
// ================================

// Promise.race - First promise to settle wins
async function raceExample() {
    const fastPromise = delay(1000).then(() => "Fast winner!");
    const slowPromise = delay(3000).then(() => "Slow loser");
    
    try {
        const winner = await Promise.race([fastPromise, slowPromise]);
        console.log("🏁 Race winner:", winner);
    } catch (error) {
        console.log("Race error:", error);
    }
}

setTimeout(() => raceExample(), 8000);

// ================================
// KEY TAKEAWAYS FOR REVISION:
// ================================

/*
1. CALLBACKS: Functions passed to other functions
2. PROMISES: Better than callbacks, avoid callback hell
3. ASYNC/AWAIT: Syntactic sugar for promises, easiest to read
4. ERROR HANDLING: Always use .catch() or try/catch
5. PROMISE.ALL: Run multiple promises in parallel
6. PROMISE.RACE: Get result from fastest promise
7. FETCH: Modern way to make HTTP requests
8. SETTIMEOUT: Execute code after delay

EVOLUTION: Callbacks → Promises → Async/Await
*/

console.log("📚 All async examples completed! Check the console for results.");
