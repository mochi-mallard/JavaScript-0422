// alert("hello");

// prompt("what is your name?");

// let age = 22;
// const name = null;

// alert(name);

// console.log(name);

// const object = {
//   name: "Stefan",
//   age: "31",
//   city: "Glasgow"
// };

// console.log(`my name is $(name)`);

// let rating = 7.5;

// console.log(rating);

// let hasShowFinished = true;

// let name = " mandy";
// let text = "hello, my name is";

// let sentence = text + name;

// console.log(sentence);

// let userInput = prompt("Would you like to RSVP?");
// console.log(userInput);

// if (userInput == "yes") {
//   console.log("Welcome");
// } else {
//   console.log("Bleh");
// }

// let userInput = prompt("Would you like to RSVP?");
// console.log(userInput);

// if (userInput == "yes") {
//   console.log("Welcome");
// } else if (userInput == "no") {
//   console.log("Bleh");
// }

// let countries = ["Japan", "Taiwan", "Thailand"];
// console.log(countries);

// countries.push("Scotland");

// countries.pop(); Removes the array element at the end of an array

// let countries = ["Japan", "Taiwan", "Thailand"];

// countries.splice(2, 0, "Switzerland");
// console.log(countries);

let name = "Mandy";

let userInput = prompt(`Did you medidate today, ${name}?`);

if (userInput == "Yes") {
  console.log("That's great!");
} else if (userInput == "No") {
  console.log("Please meditate, first.");
}
