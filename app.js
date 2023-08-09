// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

// Function to check the fuel level
function checkFuelLevel(fuel) {
    if (fuel < 0.25) {
        console.log("Please refill the fuel in your car.");
    } else {
        console.log("Fuel level is sufficient.");
    }
}

// Main function
function main() {
    try {
        const remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters: "));
        if (isNaN(remainingFuel)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            checkFuelLevel(remainingFuel);
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

// Call the main function
main();




// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).
function showAlertMessages() {
    var remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters:"));

    if (isNaN(remainingFuel)) {
        alert("Invalid input. Please enter a valid number.");
    } else if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car.");
    } else {
        alert("Fuel level is sufficient.");
    }
}

// Call the function to start the test
showAlertMessages();



// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
function calculateGrade() {
    var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    // Calculate total marks obtained
    var totalObtainedMarks = subject1 + subject2 + subject3;

    // Calculate percentage
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    // Determine the grade and remarks based on the percentage
    var grade, remarks;
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Satisfactory";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Pass";
    } else {
        grade = "F";
        remarks = "Fail";
    }

    // Display the result
    alert("Total Marks Obtained: " + totalObtainedMarks +
          "\nPercentage: " + percentage.toFixed(2) + "%" +
          "\nGrade: " + grade +
          "\nRemarks: " + remarks);
}

// Call the function to calculate grade and display remarks
calculateGrade();



// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

// Array of literals
const literalArr = [null, undefined, true, false];

// Array of strings
const stringArr = ["apple", "banana", "orange", "grape"];

// Array of numbers
const numberArr = [1, 2, 3, 4, 5];

// Array of booleans
const boolArr = [true, false, true, true];

// Array with mixed data types
const mixedArr = [1, "hello", true, null, undefined, "world", 42, false];

// Array of qualifications
const qualificationArr = ["Bachelor's degree", "Master's degree", "Ph.D.", "Diploma"];

// Printing the arrays to see their contents
console.log("literalArr:", literalArr);
console.log("stringArr:", stringArr);
console.log("numberArr:", numberArr);
console.log("boolArr:", boolArr);
console.log("mixedArr:", mixedArr);
console.log("qualificationArr:", qualificationArr);




// 5)Write a program to store phone manufacturers in an array.
// Array to store phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus", "Huawei", "Sony", "Nokia", "LG"];

// Printing the array to see its contents
console.log("Phone Manufacturers:", phoneManufacturers);




// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

// Array to store student scores
const studentScores = [85, 92, 78, 95, 88, 70, 83, 91, 87, 76];

// Function to sort the array in ascending order
function sortScoresAscending(scores) {
    return scores.sort((a, b) => a - b);
}

// Sorting the studentScores array in ascending order
const sortedScores = sortScoresAscending(studentScores);

// Printing the sorted array to see its contents
console.log("Student Scores (Original):", studentScores);
console.log("Student Scores (Sorted in Ascending Order):", sortedScores);




// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

// Given array
const wordsArray = ["This", "is", "my", "cat"];

// Create a single string from the array using the join() method
const combinedString = wordsArray.join(" ");

// Printing the single string
console.log("Combined String:", combinedString);




// 8)Implement the FIFO (First In First Out) approach using arrays.

// FIFO Queue class
class FIFOQueue {
    constructor() {
        this.queue = [];
    }

    // Add an element to the end of the queue (enqueue)
    enqueue(element) {
        this.queue.push(element);
    }

    // Remove and return the first element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.queue.shift();
    }

    // Get the first element in the queue without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.queue[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.queue.length;
    }

    // Clear the queue
    clear() {
        this.queue = [];
    }
}

// Example usage:
const fifoQueue = new FIFOQueue();
fifoQueue.enqueue("A");
fifoQueue.enqueue("B");
fifoQueue.enqueue("C");

console.log("Queue size:", fifoQueue.size()); // Output: 3
console.log("First element:", fifoQueue.peek()); // Output: "A"

console.log(fifoQueue.dequeue()); // Output: "A"
console.log(fifoQueue.dequeue()); // Output: "B"
console.log(fifoQueue.dequeue()); // Output: "C"

console.log("Queue size:", fifoQueue.size()); // Output: 0
console.log("Is queue empty:", fifoQueue.isEmpty()); // Output: true





// 9)// Implement the LIFO (Last In First Out) approach using arrays.

// LIFO Stack class
class LIFOStack {
    constructor() {
        this.stack = [];
    }

    // Add an element to the top of the stack (push)
    push(element) {
        this.stack.push(element);
    }

    // Remove and return the top element from the stack (pop)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.stack.pop();
    }

    // Get the top element in the stack without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }

    // Clear the stack
    clear() {
        this.stack = [];
    }
}

// Example usage:
const lifoStack = new LIFOStack();
lifoStack.push("A");
lifoStack.push("B");
lifoStack.push("C");

console.log("Stack size:", lifoStack.size()); // Output: 3
console.log("Top element:", lifoStack.peek()); // Output: "C"

console.log(lifoStack.pop()); // Output: "C"
console.log(lifoStack.pop()); // Output: "B"
console.log(lifoStack.pop()); // Output: "A"

console.log("Stack size:", lifoStack.size()); // Output: 0
console.log("Is stack empty:", lifoStack.isEmpty()); // Output: true




// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

// Sample array (you can replace it with your desired array)
const itemList = ["apple", "banana", "orange", "grape", "mango", "pear"];

// Function to search for an item in the array
function searchItem() {
    const userInput = prompt("Enter an item to search for:");

    // Convert user input to lowercase for case-insensitive search
    const searchQuery = userInput.toLowerCase();

    // Use the Array includes() method to check if the item is found in the list
    const isFound = itemList.includes(searchQuery);

    // Display the result to the user
    if (isFound) {
        alert(`Yes, "${userInput}" is found in the list.`);
    } else {
        alert(`No, "${userInput}" is not found in the list.`);
    }
}

// Call the searchItem function to start the search
searchItem();




// 11)Write a program to identify the largest number in the given array.

// Sample array (you can replace it with your desired array)
const numbersArray = [10, 24, 6, 93, 47, 18, 75, 82];

// Function to find the largest number in the array
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "The array is empty.";
    }

    let largestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }

    return largestNumber;
}

// Call the function to find the largest number
const largestNumber = findLargestNumber(numbersArray);

// Display the result to the user
console.log("The largest number in the array is:", largestNumber);




// 12)Write a program to identify the smallest number in the given array.

// Sample array (you can replace it with your desired array)
const numbersArray = [10, 24, 6, 93, 47, 18, 75, 82];

// Function to find the smallest number in the array
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        return "The array is empty.";
    }

    let smallestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }

    return smallestNumber;
}

// Call the function to find the smallest number
const smallestNumber = findSmallestNumber(numbersArray);

// Display the result to the user
console.log("The smallest number in the array is:", smallestNumber);




// 13)Write a program to print multiples of 5 ranging from 1 to 100.
// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

// Program to print multiples of 5 ranging from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Program to add two numbers and show the result in the browser
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

const sum = num1 + num2;

document.write(`<h2>The sum of ${num1} and ${num2} is: ${sum}</h2>`);




// 14)Repeat task1 for subtraction, multiplication, division & modulus.

// Function to perform arithmetic operations
function performArithmeticOperations(num1, num2) {
    const additionResult = num1 + num2;
    const subtractionResult = num1 - num2;
    const multiplicationResult = num1 * num2;
    const divisionResult = num1 / num2;
    const modulusResult = num1 % num2;

    document.write(`<h3>Arithmetic Operations on ${num1} and ${num2}:</h3>`);
    document.write(`<p>Addition: ${additionResult}</p>`);
    document.write(`<p>Subtraction: ${subtractionResult}</p>`);
    document.write(`<p>Multiplication: ${multiplicationResult}</p>`);
    document.write(`<p>Division: ${divisionResult}</p>`);
    document.write(`<p>Modulus: ${modulusResult}</p>`);
}

// Get user input for two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Call the function to perform arithmetic operations and display the results
performArithmeticOperations(num1, num2);




//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

// Function to welcome the user based on the city name
function welcomeUser(cityName) {
    if (cityName.toLowerCase() === "karachi") {
        alert("Welcome to the city of lights.");
    } else {
        alert(`Welcome to ${cityName}.`);
    }
}

// Get user input for the city name
const cityName = prompt("Enter the city name:");

// Call the function to welcome the user
welcomeUser(cityName);




// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

// Function to greet the user based on their gender
function greetUser(gender) {
    if (gender.toLowerCase() === "male") {
        alert("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        alert("Good Morning Ma'am.");
    } else {
        alert("Unknown gender. Please enter 'Male' or 'Female'.");
    }
}

// Get user input for the gender
const gender = prompt("Enter your gender (Male/Female):");

// Call the function to greet the user
greetUser(gender);





//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."

// Function to display the appropriate message based on the color
function checkTrafficSignal(color) {
    if (color.toLowerCase() === "red") {
        alert("Must Stop.");
    } else if (color.toLowerCase() === "yellow") {
        alert("Ready to move.");
    } else if (color.toLowerCase() === "green") {
        alert("Move now.");
    } else {
        alert("Invalid color. Please enter 'Red', 'Yellow', or 'Green'.");
    }
}

// Get user input for the traffic signal color
const color = prompt("Enter the color of the traffic signal:");

// Call the function to check the traffic signal color and display the message
checkTrafficSignal(color);

