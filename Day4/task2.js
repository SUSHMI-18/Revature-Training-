//manages a simple student information system. 

const student = {
    name: "",
    age: 0,
    grade: "",
    displayInfo: function() {
      console.log("Student Information:");
      console.log("Name: " + this.name);
      console.log("Age: " + this.age);
      console.log("Grade: " + this.grade);
    }
  };
  student.name = prompt("Enter student's name:");
  student.age = parseInt(prompt("Enter student's age:"));
  student.grade = prompt("Enter student's grade:");
  student.displayInfo();




//print the location of "my" in a string "I am enjoying my training".


const sentence = "I am enjoying my training";
const substring = "my";
const index = sentence.indexOf(substring);
console.log(index);



//print the location of "m" in a string "I am enjoying my training".

const sentence1 = "I am enjoying my training";
const substring1 = "m";
const index1 = sentence1.indexOf(substring1);
console.log(index1);



//extract the complete string from index 3 of the string 

const oldString = "I am enjoying my training";
const startingIndex = 3;
const newString = oldString.substring(startingIndex);
console.log(newString);



//extract string from index 0 to 4 from the string 


const oldString1 = "I am enjoying my training";
const newString1 = oldString1.substring(0,5);
console.log(newString1);




//replace "training" with "journey"


const oldString2 = "I am enjoying my training";
const newString2= oldString2.replace("training","journey");
console.log(newString2);



//- Print all the characters of a string using for loop.
//Using charAt()

const str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}




//Using str[]


const str1 = "Hello, World!";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}




//store string str="a,b,c" into an array.

const str2 = "a,b,c";
const arr = str2.split(',');
console.log(arr);



//removing the spaces

let str3 = "     abc     ";
str3 = str3.trim();
console.log(str3);



//Concat the two strings



const str4 = "Hello";
const str5 = "World";
const concatenatedString = str4.concat(" ", str5);
console.log(concatenatedString);




//check if a given string is a valid email address



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const str6 = "sushmithamurugesh18gmail.com";
  const email2 = "invalid@email";
  console.log(isValidEmail);




  // string starts with a specific substring



const str7 = "Hello, World!";
const substr = "Hello";
const startsWithSubstring = str7.startsWith(substr);
console.log(startsWithSubstring);


//Remove 'e' from the following string:



const str8 = "abcedgedcve";
const modifiedStr = str8.replace(/e/g, '');
console.log(modifiedStr);



//convert the string into array



const str9 = "Hello there I am jack";
const arr1 = str9.split(' ');
console.log(arr1);




//check whether the string is palindrome or not 




function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  const str10 = "racecar";
  console.log(isPalindrome(str10)); 











