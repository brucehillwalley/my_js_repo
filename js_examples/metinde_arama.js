let text =
  "Ben öğretmenlikten aylık 3000 €, yılda 12000 € bonus ve özel derslerden de ortalama ayda 5000 € kazanıyorum.";

let text_words=text.split(" ")
let paralar = [];
let often = [];

for (let index = 0; index < text_words.length; index++) {
  let content = text_words[index];
  !isNaN(content) ? paralar.push(Number(content)) : null; 

  //? isNaN numara değil mi? nin not'ı sayılarda "!false" durumunu oluşturur true olur  bize sayıları verir. Sayıları paralar dizisine ekler.
}

for (let index = 0; index < text_words.length; index++) {
  !isNaN(text_words[index])
    ? often.push(text_words[index - 1])
    : null;
}

console.log(paralar);
console.log(often);

for (let index = 0; index < often.length; index++) {
  often[index].startsWith("ay") ? (often[index] = 12) : (often[index] = 1);
}

console.log(often);

console.log(
  `Ben yılda ${
    paralar[0] * often[0] + paralar[1] * often[1] + paralar[2] * often[2]
  } € kazanıyorum.`
);

// console.log(
//   `Ben yılda ${
//     paralar[0] * (often[0].startsWith("ay") ? 12 : 1) +
//     paralar[1] * (often[1].startsWith("ay") ? 12 : 1) +
//     paralar[2] * (often[2].startsWith("ay") ? 12 : 1)
//   } € kazanıyorum.`
// );
