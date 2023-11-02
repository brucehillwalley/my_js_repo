//? what is the out put?
console.log(("55" < 56 && 67 === "67") || (253 % 11 && !false));

// Let's break down the expression step by step:

// 1. `"55" < 56` evaluates to `true` because the string "55" is converted to a number and compared with the number 56. Since 55 is less than 56, this part of the expression is `true`.

// 2. `67 === "67"` evaluates to `false` because the strict equality comparison operator (`===`) checks for both value and type equality. The number 67 is not equal to the string "67" because they are of different types. Therefore, this part of the expression is `false`.

// 3. `253 % 11` evaluates to `0` because the modulo operator (`%`) calculates the remainder of the division of 253 by 11, which is 0.

// 4. `!false` evaluates to `true` because the logical NOT operator (`!`) negates the boolean value. Since `false` is negated, it becomes `true`.

// Now, combining the above results:

// - `"55" < 56 && 67 === "67"` is `true && false`, which evaluates to `false`.
//! - `253 % 11 && !false` is `0 && true`, which evaluates to `0`.

// Finally, `false || 0` evaluates to `0`.

// Therefore, the correct output of `console.log("55" < 56 && 67 === "67" || 253 % 11 && !false)` is `0`.
console.log(0 && false);
console.log(0 && true);
console.log(1 && true);

console.log("*********BRUCE*************");


//?What is the output of ?
console.log((15 * 2) / 3 + 8 === 18 || (10 % 3) ** 2 >= 4 && !(5 > 7))

// Let's break down the expression step by step:

// 1. `(15 * 2) / 3 + 8 === 18` evaluates to `true` because it follows the order of operations. First, `15 * 2` is calculated as `30`. Then, `30 / 3` is calculated as `10`. Finally, `10 + 8` is calculated as `18`. Since `18` is equal to `18`, this part of the expression is `true`.

// 2. `(10 % 3) ** 2 >= 4` evaluates to `true` because it follows the order of operations. First, `10 % 3` is calculated as `1`. Then, `1 ** 2` is calculated as `1`. Finally, `1 >= 4` is evaluated, which is `false`. Since `1` is not greater than or equal to `4`, this part of the expression is `false`.

// 3. `!(5 > 7)` evaluates to `true` because the greater than operator (`>`) compares `5` and `7`, which is `false`. The logical NOT operator (`!`) negates this result, so `false` becomes `true`.

// Now, combining the above results:

//! - `(15 * 2) / 3 + 8 === 18` is `true`.
// - `(10 % 3) ** 2 >= 4` is `false`.
// - `!(5 > 7)` is `true`.

// Finally, `true || false && true` evaluates to `true`.

// Therefore, the output of `console.log((15 * 2) / 3 + 8 === 18 || (10 % 3) ** 2 >= 4 && !(5 > 7))` is `true`.

//? using flat() [[]]=>[]  
let text = "dog";
let word = "";
let splited = text.split("");
console.log(splited.map((harf, index, array) => array.slice(index)).flat());

console.log("*********BRUCE*************");
// AND opratörü
// her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

console.log(true && 1);  // 1
console.log(false && 1); // false

// OR opratörü
// değerlerden biri true ise ilk true değeri döndürür, aksi takdirde her ikisi de false ise son false değeri döndürür
console.log(1 || false); // 1
console.log(false || 0); // 0