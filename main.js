let raceNumber = Math.floor(Math.random() * 1000); // let the computer randomly assign a number

const runnerRegisteredEarly = true; // change be changed to false or true

const runnerAge = (Math.floor(Math.random() * 100) + 5); // decided to let the computer randomly assign an age
// const runnerAge = 18;

// console.log(raceNumber);
console.log(`Your age is ${runnerAge}.`);

if (runnerAge > 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
}

// console.log(raceNumber);

if (runnerAge > 18 && runnerRegisteredEarly) {
  console.log(`Your race will begin at 9:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !runnerRegisteredEarly) {
  console.log(`You race will begin at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`All youth registrants will begin race at 12:30 pm and your race number is ${raceNumber}.`);
} else if (runnerAge === 18) {
  console.log('Please see the registration desk!');
}
