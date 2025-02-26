console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = `Lorenzo`;

console.log(`The driver's name is ${hacker1}`);

let hacker2;

hacker2 = `...still unknown`
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters! `);
}

// Iteration 3: Loops
let currLetter ="";
for (let letter of hacker1) {
    currLetter += letter.toUpperCase() + " ";
}

console.log(currLetter)