function calculateRectangleArea (length, width) {
    // lenth and width are PARAMETERS (placeholders for values)
    return length * width;
}
//5 and 10 are ARGUMENTS (actual values passed to the function)
let rectLength = 10;
let rectWidth = 5;
let area = calculateRectangleArea(rectLength, rectWidth);
console.log('The area of the rectangle  is: ${area}') //output: The area of the rectangle is : 50

function calculateArea(length = 1, width = 1) {
    //length and width have default values of 1
    return length * width;
}
    // With arguments 
    console.log(calculateArea(5, 10)); // Output: 50
    //Without arguments
    console.log(calculateArea());// Output: 1
    // Call the function with only one argument
    console.log(calculateArea(8));// Output: 8

    function greet(name) {
        return "Hello, " + "!";
    }
    let greetingMessage = greet("Ephy");
    console.log(greetingMessage); // Output: Hello, Ephy! 

    // Define a second function called processsgreeting
    //It takes a function (like greet) and a name as parameters
    function processGreeting(greetingFuction, name) {
        //Call the passed-in function with given name
        return greetingsFunction(name);
    }
    // Call processGreeting with greetand your name
    console.log(processGreeting(greet, "Ephy")); // Output: Hello, Ephy!

    //Rewrite greet as an arrow function
    const greet = (name) => {
        return "Hello, " + name +"!";
    };

    //Call and test the arrow function
    console.log(greet("Ephy")); //Output: Hello, Ephy!

    // Define fetchData that takes a callback function as an argument
function fetchData(callback) {
    // Simulate waiting 2 seconds using setTimeout (asynchronous behavior)
    setTimeout(() => {
        // After 2 seconds, call the callback function with a string
        callback("Data successfully fetched!");
    }, 2000);
}

// Define displayData that takes a string and prints it
function displayData(message) {
    console.log(message);
}

// Call fetchData and pass displayData as the callback
fetchData(displayData);

console.log(myVar); // Output: undefined
var myVar = "Hello World";
//The assingment no declaration is hoisted

sayHello(); // Output:"Hello from a function!"
function sayHello() {
  console.log("Hello from a function!");
}
//Functions are hoisted
