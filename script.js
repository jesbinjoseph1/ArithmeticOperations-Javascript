// // Create a program that asks the user for two numbers and prints their sum
// let num1 = 23
// let num2 = 10
// let result=(num1+num2)
// console.log(result);

// // Implement a program that calculates the area of a rectangle using given length and width
// let length =10
// let width =5
// area=length*width
// console.log(area);

// // Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18)
// let age =17
// if (age<18){
//     console.log("not eligible");
// }
// else{
//     console.log("eligible to vote");
// }

// // Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).
// let grade=70
// let x=grade>=60 ? 'pass':'fail'
// console.log(x);

// // Implement a program that checks if a user's entered number is positive, negative, or zero.
// let userInput =-1

// if (userInput > 0) {
//     console.log("The number is positive.");
// } else if (userInput < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// // Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

// let age1 = 62
// if (age1 >= 0 && age1 <= 12) {
//     console.log("You are a child.");
// } else if (age1 >= 13 && age1 <= 19) {
//     console.log("You are a teenager.");
// } else if (age1 >= 20 && age1 <= 59) {
//     console.log("You are an adult.");
// } else if (age1 >= 60) {
//     console.log("You are a senior.");
// } else {
//     console.log("Invalid age entered.");
// }

// // find the square of each number in an array=[1,3,9,12,15,18,21] using loop
// let arr = [1, 3, 9, 12, 15, 18, 21];

// for (let i = 0; i < 7; i++) {
//     arr[i] = arr[i] * arr[i];
// }

// console.log(arr); 

// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )
function oddsum(a) {
    let a = 10;
    let sum = 0;
    let number = 1; 
    for (let i = 0; i < a; i++) {
        sum += number;
        number += 2;
    }
    return sum;
}


console.log("Sum of the first", a, "odd numbers is", oddsum(a));
