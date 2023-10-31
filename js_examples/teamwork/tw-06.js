// The purpose of this coding challenge is to create two dice, shake them the desired number of times, and write a function that prints the results as text.

// Expected Outcome
// if first dice is 1 and second dice is 6, output should be 'one - six'
// For example :

// call this function with dices(10) Yo should display all 10 result.

// And display the result in the following format on the console:

// for Example:

// 1st dice: 2 2nd dice: 3 output => 'two' - 'three'

// 1st dice: 6 2nd dice: 4 output => 'four' - 'six' // Always dsiplay the low dice first.

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// analyze a problem, identify and apply programming knowledge for appropriate solution.

// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

const dices = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
  };
  
  // let result = [dices[guessOne], dices[guessTwo]].sort((a, b) => a - b);
  
  function dicing(number) {
    let result = [];
    let sonuc = [];
    for (let i = 0; i < number; i++) {
      let guessOne = Math.ceil(Math.random() * 6);
  
      let guessTwo = Math.ceil(Math.random() * 6);
  
      result.push(guessOne, guessTwo);
      result.sort((a, b) => a - b);
  
      sonuc += dices[result[0]] + "-" + dices[result[1]] + "\n";
    }
  
    return sonuc;
  }
  
  console.log(dicing(5));

  console.log("*******Another Solving**********");

let diceNumberToString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
}

let rollTheDices = (number) => {
    let result = [];

    for (let i = 0; i < number; i++) {
        let dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1].sort();
        result.push([diceNumberToString[dices[0]], diceNumberToString[dices[1]]].join(" - "))
        
    }
    return result;
}

console.log(rollTheDices(10))