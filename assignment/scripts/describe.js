// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
/*
We're creating a variable called name and setting it to the string 'Dane'.
We are then creating a condition statement that checks the variable name. If it is equal to the string 'Mary', the console log will print 'Hi, Mary!'. If it is anything but 'Mary', the console will print 'How do you do?'. In this case because the variable is set to 'Dane', the console will print 'How do you do?'.
*/

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}

// This will console.log "How do you do?"

*/

// 2. WRITE YOUR DESCRIPTION HERE
/*
We are creating the variable secret, but we're keeping it empty.
We then create another variable which is set to the number 123.
We then create a conditional statement that checks the variable code. If the variable code is equal to 123, the variable secret now holds the string 'super' as its value, and the value of the variable code is reassigned to be its original value multiplied by two.
The console will log the string 'super'.
*/

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}
*/



// 3. WRITE YOUR DESCRIPTION HERE
/*
We create a variable named isStudent and set it equal to the boolean value: true.
We create a variable named age and set it equal to the integer 34.
We create a variable named zip and set it equal to the integer 55407.

We then begin a conditional statement that checks the value of the variable isStudent AND we check the variable zip. 
If isStudent is defined as true AND zip is defined with a number greater than 80000, the console will print 'You're a student on the West Coast!'

If those conditions aren't met, the conditional statement checks to see if isStudent is defined as false OR if the variable age is defined as a number less than 30.
If those conditions are met, the console will print 'What are your hobbies?'.

If that condition isn't met either, it checks to see if the variable isStudent is set equal to true.
If that condition is met, the console will print 'Welcome to Prime!'.

If none of the above conditions are met, the console will print 'How about the weather?'.

Console log (isStudent) will console log 'Welcome to Prime!'.
*/

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

console.log(isStudent);
*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/


//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//4. Correct behavior:
/*
colorOne is incorrectly defined as 'red' and should be defined as 'blue'.
colorTwo is incorrectly defined as 'blue' and should be defined as 'red'.
colorTwo also needs to be set to purple inside of the conditional statement.
*/

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//5. Correct behavior:
/*
The conditional statement uses the incorrect logical. Right now it is checking if the temp is greater than 39 OR if the time is greater than or equal to 4. 
The logical should be changed to &&. (temp > 39 && time >= 4)
*/

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//6 Correct behavior:
/*
The conditional statement as it stands states that if minAge is less than or equal to, it will print 'no entry.'
This is incorrect. The prompt states that age should be greater than or equal to minAge. 
That first conditional statement should be if(age < minAge). 
*/

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

