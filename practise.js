let str = "hello wOrld";
let control = "upper"; // "lower"

if (control == "upper") {
  // convert str to upper case
  str = str.toUpperCase();
  console.log(str);
} else {
  // convert str to lower case
  str = str.toLowerCase();
  console.log(str);
}
//convert camelCase to upper case
let word = "sUhA";
let  convert= "";

for (let i = 0; i < word.length; i++) {
  if (word[i].toLowerCase() === word[i]) {
  convert += word[i].toUpperCase();
}
  else {
    convert += word[i].toLowerCase();
  }
}
console.log(convert);
