//*Write a JavaScript function that generates all combinations of a string.
//*Example string : 'dog'
//*Expected Output : d,do,dog,o,og,g

console.log("*********BRUCE*************");
function getCombination(str) {
  let arr = str.split("");
  const combinedArray = [];
  let startPoint = 0;
  while (startPoint < str.length) {
    arr.reduce((acc, e) => {
      acc.push(e);
      combinedArray.push(acc.join());

      return acc;
    }, []);
    startPoint++;
    arr.shift()
  }

  return combinedArray;
}

console.log(getCombination("dog"));
console.log(getCombination("kare"));
console.log("*********BRUCE*************");

let wrd = "dog";
const arr = []
for (let j = 0; j < wrd.length; j++) {
  for (let index = 1; index <= wrd.length; index++) {
    if (index > j) arr.push(wrd.slice(j, index));
  }
}
console.log(arr.join(","))







console.log("****Another********");
let text = "dog";
let word = "";
let splited = text.split("");
console.log(splited.map((harf, index, array) => array.slice(index)).flat());

console.log(
  splited
    .map((harf, index, array) => array.slice(index))
    .flat()
    .map((harf, index) => {
      if (index > 0 && word.length % splited.length == 0) {
        splited.pop();
        word = "";
      }
      word += harf;
      return word;
    })
);


