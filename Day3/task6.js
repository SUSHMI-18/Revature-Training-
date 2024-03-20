var play = prompt("Do you want to play the Game?? ")
    if(play==="yes"||play==="Yes"){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    var guesses=[];
    for(let i=1;i<=5;i++){
        console.log(randomNumber)
    var guess = prompt(`Enter the ${i} guess: `)
    if(guess<randomNumber){
        prompt("Choose higher")
        guesses.push(`${guess}`)
        console.log("Your previous guesses: "+guesses)
 
    }
    else if(guess>randomNumber){
        prompt("Choose lower")
        guesses.push(`${guess}`)
        console.log("Your previous guesses: "+guesses)
    }
    else{
        prompt("Correct! You Won!!")
        guesses.push(`${guess}`)
        console.log("Your previous guesses: "+guesses)
        break;
    }
    if(guesses.length==5){
        prompt("Sorry you're out of guesses")
    }
}
}
else{
    console.log("Sorry you chose not to play")
}






//Find number 2 in the following array. 


const arr = [1, 2, 3, 4, 5, 6];
function findNumberTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            return i; 
        }
    }
    return -1; 
}
const index = findNumberTwo(arr);
if (index !== -1) {
    console.log(index);
} else {
    console.log("Element not found in array.");
}





//Remove "apple" from the following array:

const fruits = ["banana", "mango", "apple", "kiwi"];
function removeApple(arr) {
    const index = arr.indexOf("apple");
    if (index !== -1) {
        arr.splice(index, 1);
    } else {
        console.log("'apple' not found in the array.");
    }
}
removeApple(fruits);
console.log(fruits);



//Reverse the numbers


const numbers = [23, 45, 12, 67, 89, 34];
function reverseArray(arr) {
    return arr.reverse();
}
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);


//Return the maximum value



const numbers = [23, 45, 12, 67, 89, 34];
function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}
const maximumValue = findMax(numbers);
console.log(maximumValue);




//Find the second largest number

const numbers = [10, 5, 8, 20, 15, 12];
function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
const secondLargest = findSecondLargest(numbers);
console.log("Second-largest number:", secondLargest);


//Sum of the even nos in an array 


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let number of arr) {
        if (number % 2 === 0) {
            sum += number; 
        }
    }
    return sum;
}
const sumOfEven = sumOfEvenNumbers(numbers);
console.log(sumOfEven);



//Add 3 student objects to it.

const students = [];
students.push({ name: "John", age: 20 });
students.push({ name: "Alice", age: 22 });
students.push({ name: "Bob", age: 21 });
console.log(students);