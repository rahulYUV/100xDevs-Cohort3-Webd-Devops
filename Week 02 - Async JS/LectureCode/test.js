// Simple test to check if Node.js and file system work
console.log("Testing...");
console.log("Current directory:", process.cwd());

const fs = require("fs");
console.log("File system module loaded successfully");

// Check if a.txt exists
if (fs.existsSync("a.txt")) {
    console.log("✅ a.txt exists");
    const content = fs.readFileSync("a.txt", "utf-8");
    console.log("Content:", content);
} else {
    console.log("❌ a.txt does not exist");
}
