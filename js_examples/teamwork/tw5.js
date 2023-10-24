//? The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

let text = `There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected humour, 
or randomised words which don't look even slightly believable. If you are going 
to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
predefined chunks as necessary, making this the first true generator on the Internet. It uses 
a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
free from repetition, injected humour, or non-characteristic words etc.`;

let expectedText = `There Are Many Variations Of Passages Of Lorem Ipsum Available, But The
Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words which
Don't Look Even Slightly Believable. If You Are Going To Use a Passage Of Lorem Ipsum, You 
Need To Be Sure There Isn't Anything Embarrassing Hidden In The Middle Of Text. All The Lorem 
Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The
First True Generator On The Internet. It Uses A Dictionary Of Over 200 Latin Words, Combined With
A Handful Of Model Sentence Structures, To Generate Lorem Ipsum Which Looks Reasonable. 
The Generated Lorem Ipsum Is Therefore Always Free From Repetition, Injected Humour, Or non-characteristic Words Etc.`;

let words = text.split(" ");

// console.log(words);

//* map ile çözüm

console.log(
  words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
);

console.log("**************************************************************");

//* Klasik for döngüsü ile

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }

// console.log(words.join(" ") == expectedText);
// //expected de ilk harfi büyük olmayan var false geliyor

console.log("**************************************************************");

//* Function ile

// function title(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
//     }
//     return array
// }

// console.log(title(words).join(" "))

//*map+ reduce

console.log(
  words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .reduce((acc, word) => acc + " " + word)
);
console.log("XX**************************************************************");

//? Burada ["of", "as", "in", "are", "the", "is", "or"] bunları hariç tutmak istiyorsak

const newSentence = text
  .split(" ")
  .map((word) =>
    ["of", "as", "in", "are", "the", "is", "or"].includes(word.toLowerCase())
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1)
  )
  .join(" ");
console.log(newSentence);



console.log("**************************************************************");

//? You have an array of objects representing books, and each object has properties like
//?"title," "author," and "rating." Your task is to create a JavaScript function that
//? filters the books based on a specific rating threshold and then transforms the filtered
//? books into a new array containing only the "title" and "author" properties of the selected books.

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 4.2 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.6 },
  { title: "1984", author: "George Orwell", rating: 4.0 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.7 },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.5 },
];
const minRating = 4.5;
//Expected Output
[
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

function selectBook(arr) {
  return arr.filter(
    (bookObj) => bookObj.rating >= minRating && delete bookObj.rating
  );
}

// console.log(selectBook(books));
//? burada rating e göre filtreledik truelar için short circuit ile rating i sildik

//? For döngüsü ile :

// let result = [];

// for (let i = 0; i < books.length; i++) {
//     if (books[i].rating >= minRating) {
//         delete books[i].rating;
//         result.push(books[i]);
//     }
// }

// console.log(result)

//? function ile :

const goodRate = function (kitaplar) {
  let result = [];

  for (let i = 0; i < kitaplar.length; i++) {
    if (kitaplar[i].rating >= minRating) {
      delete kitaplar[i].rating;
      result.push(kitaplar[i]);
    }
  }
  return result;
};

console.log(goodRate(books));
