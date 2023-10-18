//? code challenge


let arr1 = [100, 4, 200, 1, 3, 2];
let arr2 = [5, 7, 8, 10, 2, 3, 6];
let consectiveArray = [];
const consective = (arr) => {
  let sorted = arr1.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] - sorted[i + 1] == -1) {
      if (!consectiveArray.includes(sorted[i])) {
        consectiveArray.push(sorted[i]);
      }

      consectiveArray.push(sorted[i + 1]);
    }
  }
  return consectiveArray;
};

console.log(consective(arr2));
