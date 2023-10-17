let sayi1 = Number(prompt(`1.sayiyı giriniz`));
let sayi2 = Number(prompt(`2.sayiyı giriniz`));
let operator = prompt(`lütfen işlemi seçiniz`);

if (operator == `+`) {
  alert(`${sayi1 + sayi2}`);
} else if (operator == `-`) {
  alert(`${sayi1 + sayi2}`);
} else if (operator == `*`) {
  alert(`${sayi1 * sayi2}`);
} else if (operator == `/`) {
  alert(`${sayi1 / sayi2}`);
} else {
  alert(`${operator} hatalı operator`);
}
