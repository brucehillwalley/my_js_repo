/*
// The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

let text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`

let expectedText = `There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words which Don't Look Even Slightly Believable. If You Are Going To Use a Passage Of Lorem Ipsum, You Need To Be Sure There Isn't Anything Embarrassing Hidden In The Middle Of Text. All The Lorem Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The First True Generator On The Internet. It Uses A Dictionary Of Over 200 Latin Words, Combined With A Handful Of Model Sentence Structures, To Generate Lorem Ipsum Which Looks Reasonable. The Generated Lorem Ipsum Is Therefore Always Free From Repetition, Injected Humour, Or non-characteristic Words Etc.`

let words = text.split(" ");

// console.log(words);

Klasik for döngüsü ile

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}

console.log(words.join(" ") == expectedText);

// Function ile

// function title(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
//     }
//     return array
// }

// console.log(title(words).join(" "))

// Map ile

console.log(words.map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(" "));

// Map + Reduce - Join ile

// console.log(words.map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase()).reduce((acc, i) => acc + " " + i));

// You have an array of objects representing books, and each object has properties like "title," "author," and "rating." Your task is to create a JavaScript function that filters the books based on a specific rating threshold and then transforms the filtered books into a new array containing only the "title" and "author" properties of the selected books.

const books = [{
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        rating: 4.2
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.6
    },
    {
        title: "1984",
        author: "George Orwell",
        rating: 4.0
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 4.7
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        rating: 4.5
    },
];

const minRating = 4.5;

let expectedBooks = [{
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen'
    }
]

// For döngüsü ile :

// let result = [];

// for (let i = 0; i < books.length; i++) {
//     if (books[i].rating >= minRating) {
//         delete books[i].rating;
//         result.push(books[i]);
//     }
// }

// console.log(result)

// function ile :

// let result = [];

// const goodRate = function (kitaplar) {
//     for (let i = 0; i < kitaplar.length; i++) {
//         if (kitaplar[i].rating >= minRating) {
//             delete kitaplar[i].rating;
//             result.push(kitaplar[i]);
//         }
//     }
//     return result;
// }

// console.log(goodRate(books));

// filter ile :

console.log(books.filter((book) => book.rating >= minRating && delete book.rating));

// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

const products = [{
        name: "Product 1",
        price: 20,
        category: "Electronics"
    },
    {
        name: "Product 2",
        price: 30,
        category: "Clothes"
    },
    {
        name: "Product 3",
        price: 40,
        category: "Electronics"
    },
    {
        name: "Product 4",
        price: 50,
        category: "Clothes"
    },
    {
        name: "Product 5",
        price: 60,
        category: "Clothes"
    },
    {
        name: "Product 6",
        price: 70,
        category: "Electronics"
    },
    {
        name: "Product 7",
        price: 80,
        category: "Clothes"
    },
    {
        name: "Product 8",
        price: 90,
        category: "Electronics"
    },
];

let expectedProducts = [{
        category: 'Clothes',
        average: 55
    },
    {
        category: 'Electronics',
        average: 55
    }
]
*/

// console.log("Kim Korkar Reduce ' tan...")

// let salaries = [10000, 11000, 12000, 15000];

// let asgariUcret = 11500;

// asgari ücret = 11.500 ise,

// asgari ücretten az alanları ayrı bir listede göster.

// let düsükMaaslar = [];

// for (let i = 0; i < salaries.length; i++) {
//     if (salaries[i] < asgariUcret) {
//         düsükMaaslar.push(salaries[i]);
//     }
// }

// console.log(düsükMaaslar)

// function düsükMaaslılar(array) {

//     let düsükMaaslar = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < asgariUcret) {
//             düsükMaaslar.push(array[i]);
//         }
//     }
//     return düsükMaaslar;
// }

// console.log(düsükMaaslılar(salaries))

// let düsükMaaslar = [];

// const dusuk = function (eleman) {
//     return eleman < asgariUcret;
// }

// console.log(salaries.filter(dusuk));

// salaries.filter((salary) => {
//     salary < asgariUcret && düsükMaaslar.push(salary);
//     // return salary < asgariUcret ? salary : null
//     // return if (salary < asgariUcret) {
//     //         salary
//     //     } else {
//     //         null
//     //     }
// });

// console.log(düsükMaaslar)

// asgari ücretin altında alanlara %20 zam, üstündekilere %10 zam yapılsın. Maaş tablosunun güncel halini ekrana basan program.

// console.log(salaries)

// let dizi = [];

// salaries.filter((salary) => (salary < asgariUcret) && dizi.push((salary * 1.2)))

// console.log(dizi)

// let zamlı = salaries.map((eleman) => Math.round(eleman < asgariUcret ? eleman * 1.2 : eleman * 1.1));

// console.log(zamlı)

// asgari ücretin altında alanlara %20 zam, üstündekilere %10 zam yapılsın. Şirketin ne kadar daha fazla ödemesi gerektiğini ekrana basan kod.

// console.log(salaries.reduce((acc, salary) => acc + salary, 0))

// console.log(salaries.reduce((acc, salary) => salary < asgariUcret ? (acc + salary * 1.2) : (acc + salary * 1.1), 0));

// console.log(salaries.reduce((acc, salary) => salary < asgariUcret ? (acc + salary * 1.2) : (acc + salary * 1.1), 0) - salaries.reduce((acc, salary) => acc + salary, 0))

// acc = 0
// acc *= ilk;
// acc *= iki;

// const isimler = ["jenny", "penny", "danny", "veli", "foreman", "wilkinson", "haci murat"]

// verilen dizideki stringlerin karakter sayisi tek olanlarin son harfi, cift olanlarin ise ilk harfi buyuk harf olarak donsun.

// ayni dizideki stringlerin karakter sayisi 

// tek olanlarin karakter sayilarinin toplamini 

// ve cift olanlarin da karakter sayilarinin karelerinin toplamini veren iki ayri sonuc elde ediniz.

// console.log(isimler.map((isim) => isim.length % 2 == 1 ? isim.slice(0, isim.length - 1) + isim[isim.length - 1].toUpperCase() : isim[0].toUpperCase() + isim.slice(1)))

// console.log(isimler.filter((isim) => isim.length % 2 == 1).reduce((acc, isim) => acc + isim.length, 0))

// console.log(isimler.filter((isim) => isim.length % 2 == 0).reduce((acc, isim) => acc + (isim.length ** 2), 0))