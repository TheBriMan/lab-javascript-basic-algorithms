console.log("I'm ready!");

//Iteration 1: Names and Input
let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Angela';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  };

//Iteration 3.1
let answer = '';
for(i = 0; i < hacker1.length; i++){
  answer+= hacker1[i].toUpperCase() + ' ';
};

//Iteration 3.2
let answer2 = '';  
for(i = hacker2.length - 1; i >= 0; i--){
  answer2 += hacker2[i];
};

//Iteration 3.3
if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`What?! You both have the same name?`);
};