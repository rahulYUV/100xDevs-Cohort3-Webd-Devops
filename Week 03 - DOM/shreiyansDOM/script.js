// ================================
// DOM (DOCUMENT OBJECT MODEL) - BASICS
// ================================

/* 
   DOM = DOCUMENT OBJECT MODEL
   
   What DOM Does:
   1. CHANGE TEXT, ATTRIBUTES, AND STYLES 
   2. MODIFY PAGE CONTENT DYNAMICALLY WITHOUT REFRESHING 
   3. RESPOND TO USER CLICKS, FORM SUBMISSIONS ETC 
   4. ACTS AS A BRIDGE BETWEEN HTML AND JAVASCRIPT

   DOM Methods Hierarchy:
   - document.getElementById() - Returns single element or null
   - document.getElementsByClassName() - Returns HTMLCollection (live)
   - document.getElementsByTagName() - Returns HTMLCollection (live)
   - document.querySelector() - Returns first matching element or null
   - document.querySelectorAll() - Returns NodeList (static)
*/

// ================================
// 1. SELECTING BY ID
// ================================
// getElementById() - Most efficient way to select single element
// Returns: Single element object or null if not found
// let helloDom = document.getElementById("welcome");
// console.log(helloDom); // Logs the element or null

// ================================
// 2. SELECTING BY CLASS NAME
// ================================
// getElementsByClassName() - Returns HTMLCollection (array-like but not array)
// HTMLCollection is LIVE - updates automatically when DOM changes
// Note: You need to loop through or access by index to style individual elements
// let highlight = document.getElementsByClassName("highlight");
// console.log(highlight); // HTMLCollection of all elements with class "highlight"

// ISSUE: This won't work because highlight is a collection, not single element
// highlight.style.backgroundColor = "red";   // ❌ ERROR
// highlight.style.color = "green";           // ❌ ERROR

// CORRECT WAY:
// highlight[0].style.backgroundColor = "red";     // ✅ Style first element
// for(let i = 0; i < highlight.length; i++) {    // ✅ Style all elements
//     highlight[i].style.backgroundColor = "red";
// }

// ================================
// 3. MODERN SELECTOR METHODS
// ================================
// querySelector() - CSS selector syntax, returns FIRST matching element
// More flexible than getElementById, can use any CSS selector
// let h1 = document.querySelector("h1");  // Selects first h1 element
// console.log(h1);  // Logs the h1 element object

// ================================
// 4. TEXT CONTENT MANIPULATION - IMPORTANT DIFFERENCES!
// ================================

// textContent: Gets/sets ALL text including hidden elements, ignores HTML tags
// h1.textContent = "hey this is text content ";

// innerText: Gets/sets visible text only, respects styling (display:none, etc)
// h1.innerText = "this is inner text"

// innerHTML: Gets/sets HTML content, can include tags and will render them
// h1.innerHTML = "<i>this is inner html</i>"  // This will render italic text

/*
   KEY DIFFERENCES FOR REVISION:
   
   textContent vs innerText vs innerHTML:
   
   textContent:
   - Gets/sets plain text
   - Includes hidden text
   - Ignores HTML tags
   - Faster performance
   
   innerText:
   - Gets/sets visible text only
   - Respects CSS styling
   - Slower (triggers reflow)
   
   innerHTML:
   - Gets/sets HTML content
   - Can execute HTML tags
   - Security risk with user input (XSS attacks)
   - Most powerful but use carefully
*/

// ================================
// 5. ATTRIBUTE MANIPULATION
// ================================ 

/*
   ATTRIBUTE METHODS:
   - getAttribute(name) - Gets attribute value
   - setAttribute(name, value) - Sets attribute value  
   - removeAttribute(name) - Removes attribute
   - hasAttribute(name) - Checks if attribute exists
   
   TWO WAYS TO ACCESS ATTRIBUTES:
   1. Method way: element.setAttribute()
   2. Property way: element.href = "value"
*/

// GET ATTRIBUTE - Reading existing attribute values
// let a = document.querySelector("a");
// console.log(a);

// SET ATTRIBUTE - Two ways to do the same thing:
// METHOD 1: Using setAttribute() - Works for any attribute
// a.setAttribute("href","https://www.google.com");

// METHOD 2: Direct property access - Only for standard HTML attributes
// a.href = "https://www.google.com";

// IMAGE ATTRIBUTE MANIPULATION EXAMPLE
// let image = document.querySelector("img");
// image.setAttribute("src","https://images.unsplash.com/photo-1754460916460-94693498b3d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");

// GET ATTRIBUTE VALUE
// let data = image.getAttribute("src");
// console.log(data); // Logs the src URL

// REMOVE ATTRIBUTE
// image.removeAttribute("src"); // Image will disappear
// console.log(data); // Still logs old value (variable doesn't change)

// ================================
// 6. DYNAMIC DOM MANIPULATION
// ================================

/*
   CREATING & ADDING ELEMENTS:
   - document.createElement(tagName) - Creates new element
   - appendChild(child) - Adds as last child
   - append(child) - Modern way, can add text/multiple elements
   - prepend(child) - Adds as first child
   - insertBefore(newElement, referenceElement)
   
   REMOVING ELEMENTS:
   - removeChild(child) - Old way
   - element.remove() - Modern way (removes itself)
*/

// CREATE NEW ELEMENT
// let h1 = document.createElement("h1");
// h1.textContent = "this is h1";
// document.body.appendChild(h1); // Adds to end of body

// CREATE PARAGRAPH ELEMENT  
// let p = document.createElement("p");
// p.textContent = "this is a new paragraph";

// TWO WAYS TO ADD ELEMENTS:
// OLD WAY: appendChild() - only accepts elements
// document.body.appendChild(p);

// NEW WAY: append() - accepts elements AND text
// let body = document.querySelector("body");
// body.append(p);
// console.log(p);
// console.log(body);

// REMOVING ELEMENTS:
// OLD WAY: parent.removeChild(child)
// NEW WAY: element.remove()

// ================================
// 7. CSS STYLING WITH JAVASCRIPT
// ================================

/*
   STYLING METHODS:
   1. element.style.property = "value" - Inline styles
   2. element.className = "class-name" - Change class
   3. element.classList.add/remove/toggle() - Manipulate classes
   
   IMPORTANT NOTES:
   - CSS properties with hyphens become camelCase in JS
   - CSS: background-color → JS: backgroundColor
   - CSS: text-transform → JS: textTransform
   - CSS: border-radius → JS: borderRadius
*/

// let h1 = document.querySelector("h1");
// console.log(h1);

// // BASIC COLOR STYLING
// h1.style.color = "red";                    // Text color
// h1.style.backgroundColor = "green";        // Background color  
// h1.style.borderColor = "yellow";          // Border color

// // TEXT TRANSFORMATION - Note: "upperCase" should be "uppercase"
// h1.style.textTransform = "uppercase";     // ✅ CORRECT: lowercase, uppercase, capitalize

/*
   COMMON CSS PROPERTIES IN JS:
   
   Text Properties:
   - fontSize: "16px"
   - fontFamily: "Arial, sans-serif"
   - fontWeight: "bold"
   - textAlign: "center"
   - lineHeight: "1.5"
   
   Box Model:
   - width: "200px"
   - height: "100px"  
   - padding: "10px"
   - margin: "20px"
   - border: "2px solid black"
   
   Positioning:
   - position: "absolute"
   - top: "10px"
   - left: "20px"
   - display: "block"
   - visibility: "hidden"
   
   Advanced:
   - borderRadius: "10px"
   - boxShadow: "2px 2px 5px gray"
   - transform: "rotate(45deg)"
   - transition: "all 0.3s ease"
*/

// ALTERNATIVE: Using classList (Better Practice)
// h1.classList.add("highlight");     // Add CSS class
// h1.classList.remove("highlight");  // Remove CSS class  
// h1.classList.toggle("highlight");  // Toggle CSS class


// what is DOM ? how does it reperest hte html structure 
// dom is api that help in structuring the content of html dynmacilly 
// it is a tree like a structure 


// name and type node in the dom tree 
// 
// element node and text node 
// p tag is a element node and where p text is the text node 
// inspect the 
// get element by id 
// qyuery selector it is a query selector ;
// get element by classlist 
// return a arraylike strucutre // html collection 

//   let h1= document.querySelector("h1");
//    console.log(h1);

//    h1.textContent = "hi shry";


// let ul = document.querySelectorAll("ul");
// console.log(ul);
// ul.forEach(function(val){
//       console.log(val.textContent);
// })

            // let imgSRc = document.querySelector("img");
            // let data = imgSRc.getAttribute("src");
            // console.log(data);
            // data++;
            // console.log(data);

            // imgSRc.setAttribute("src","this is new ");
            
            // imgSRc.setAttribute("alt","none ");
