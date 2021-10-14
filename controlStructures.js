//declariation three variables, assign to number
var num1 = 10;
var num2 = 8;
var num3 = 7;

//compare num1 and num2, display larger value.
if (num1 > num2) {
  console.log(`The largest number between ${num1} and ${num2} is ${num1}`);
} else {
    console.log(`The largest number between ${num1} and ${num2} is ${num2}`);
}

// determine whether “num1” is odd or even,displays the result
let x = num1 % 2;
if (x != 0) {
  console.log(`${num1} is odd`);
} else {
  console.log(`${num1} is even`);
}

// with conditional statment sort the three numbers from largest to smallest.

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`From largest to smallest(${num1} , ${num2} , ${num3})`);
  } else {
    console.log(`From largest to smallest(${num1} , ${num3} , ${num2})`);
  } // if num1 is the largest then compare btw num2 and num3 

} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(`From largest to smallest(${num2} , ${num1} , ${num3})`);
  } else {
    console.log(`From largest to smallest(${num2} , ${num3} , ${num1})`);
  }// if num2 is the largest then compare btw num1 and num3 

} else if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(`From largest to smallest(${num3} , ${num1} , ${num2})`);
  } else {
    console.log(`From largest to smallest(${num3} , ${num2} , ${num1})`);
  }
}// if num3 is the largest then compare btw num1 and num2


//Write a variables called amount . print "Please enter a positive number" if it is not positive.
//and print "Please enter a number" if the type of the argument is not a number. otherwise print the number.
let amount = "3d";
if (amount<0){
    console.log("Please enter a positive number");
}
else if (isNaN(amount)) {
    console.log("Please enter a number");
} else {
    console.log(amount);
}
// Write two string variables , username and password,
// and print a string "login successful" if the username length is more than 6 and password length is more than or equal to 8 otherwise print "login failed."
let username = "Suhaa4d";
let password = "sasa4444";
if ((username.length > 6) && (password.length >= 8)) {
  console.log("login successful");
} else {
  console.log("login failed.");
}

//Now write a JavaScript while loop that will display the numbers 0 - 20.
let num0to20 = "";
for (let i = 0; i <= 20; i++) {
  num0to20 += i + " ";
}
console.log(num0to20);

//Write a JavaScript for loop that will display the numbers 20 - 0.
let num20to0 = "";
for (let i = 20; i >= 0; i--) {
  num20to0 += i + " ";
}
console.log(num20to0);

//display all even numbers between 1 and 20.
let evenNumber = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    evenNumber += i + " ";
  }
}
console.log(evenNumber);

//Write two variable startRange and endRange Assign each variable a number value like (5,8) or (6,18) .
// print a string of all the numbers in between the two values in an acceding order,
//start and end are included example if we assign (5,8) the output will be "5, 6, 7, 8"
let startRange = [5, 8];
let diff=startRange[0]-startRange[1];
let endRange = [6, 18];
let a1 = startRange[0];
let a2 = startRange[1];
let str2 = "";
for (let i = a1; i <= a2; i++) {
  str2 += ` ${i} `;
}
console.log(str2);

//Stars *

let star = "";
for (let i = 5; i > 0; i--) {
  star += "*";
  console.log(star);
}


console.log("---End of tasks---");