var num1 = 1;
var num2 = 4;
var num3 = 5;

if (num1 > num2) {
  console.log(` The largest number is ${num1}`);
} else {
  console.log(` The largest number is ${num2}`);
}

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`(${num1} , ${num2} , ${num3})`);
  } 
  else {
    console.log(`(${num1} , ${num2} , ${num3})`);
  }
} 
else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(`(${num2} , ${num3} , ${num1})`);
  } 
  else {
    console.log(`(${num2} , ${num3} , ${num1})`);
  }
} 
else if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(`(${num3} , ${num2} , ${num1})`);
  } else {
    console.log(`(${num3} , ${num2} , ${num1})`);
  }
}

let evenNumber = "";

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    evenNumber += i + " ";
  }
}
console.log(evenNumber);

//stars *

let star = "";
for (let i = 5; i > 0; i--) {
star +="*";
console.log(star);
}
