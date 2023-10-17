/* -------------------------------------------------------------------------- */
/*                                   Anagram                                  */
/* -------------------------------------------------------------------------- */

// let kelime1 = "Dormitory"
// let kelime2 = "dirty Room"

// console.log(kelime2.toLowerCase().replaceAll(" ","").split(""));

// function areAnagrams(str1,str2){

//     let sortedStr1=str1.toLowerCase().replaceAll(" ","").split("").sort().join()
//     let sortedStr2=str2.toLowerCase().replaceAll(" ","").split("").sort().join()

// // let isAnagram = true

//     if (sortedStr1===sortedStr2) {

//         console.log(`${str1} ve ${str2} anagram kelimelerdir.`);
//     }else{

//         console.log(`${str1} ve ${str2} anagram kelimeler değildir.`);
//     }

// }

// areAnagrams("hello","world")

// function areAnagrams(str1, str2) {
//     //? Remove spaces and punctuation from the strings
//     str1 = str1.replace(/[^\w]/g, "").toLowerCase();
//     str2 = str2.replace(/[^\w]/g, "").toLowerCase();

//     //? Check if the lengths of the strings are equal
//     if (str1.length !== str2.length) {
//       return false;
//     }

//     //? Convert the strings to arrays, sort them, and convert them back to strings
//     const sortedStr1 = str1.split("").sort().join("");
//     const sortedStr2 = str2.split("").sort().join("");

//     //? Compare the sorted strings
//     return sortedStr1 === sortedStr2;
//   }

// function areAnagrams(stringA, stringB) {
//     const formatString = str => str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
//     return formatString(stringA) === formatString(stringB);
// }

// function removeDuplicates(arr) {
//   const uniqueArray = [];

//   for (let index = 0; index < arr.length; index++)
//     if (uniqueArray.includes(arr[index]) == false) {
//       uniqueArray.push(arr[index]);
//     }
//   return uniqueArray;
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = removeDuplicates(arrayWithDuplicates);

// console.log(uniqueArray);

function findIntersection(arr1, arr2) {
  const interSection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !interSection.includes(arr1[i])) {
        interSection.push(arr1[i]);
      }
    }
  }
  return interSection;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 6, 7];

console.log(findIntersection(arr1, arr2));

// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
//     arr3.push(arr1[i]);
//   }
// }
// console.log(arr3);

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = arr1

// // const shallowCopy = arr1.slice();
// // const shallowCopy = [...arr1]  //? rest operation deniyor

// const shallowCopy = Array.from(arr1); //? yine shallow

// console.log(shallowCopy); // [1, 2, 3, 4, 5]

// console.log(arr2);
// console.log(arr1);

// arr1.push(6)
// arr2.push(7)

// console.log(shallowCopy); // [1, 2, 3, 4, 5]

// console.log(arr2);

// console.log(arr1);


const original = {
    a: 1,
    b: {
      c: 2
    }
  };
  
  const shallowCopy = { ...original };
  
  shallowCopy.a = 5;
  shallowCopy.b.c = 3; 
  
  console.log(original.a); // 1 - original'deki a değişmedi
  console.log(original.b.c); // 3 - original'deki b.c değişti (aynı referans)