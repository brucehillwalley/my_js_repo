let ay = prompt("Bir ay ismi giriniz").toLowerCase();
let ayDeger;
switch (ay) {
  case "ocak":
    ayDeger = 1;
    break;
  case "şubat":
    ayDeger = 2;
    break;
  case "mart":
    ayDeger = 3;
    break;
  case "nisan":
    ayDeger = 4;
    break;
  case "mayıs":
    ayDeger = 5;
    break;
  case "haziran":
    ayDeger = 6;
    break;
  case "temmuz":
    ayDeger = 7;
    break;
  case "ağustos":
    ayDeger = 8;
    break;
  case "eylül":
    ayDeger = 9;
    break;
  case "ekim":
    ayDeger = 10;
    break;
  case "kasım":
    ayDeger = 11;
    break;
  case "aralık":
    ayDeger = 12;
    break;
  default:
    alert(`${ay} adinda bir ay bulunmamaktadir.`);
}
alert(`${ay}'in degeri ${ayDeger}'dir`);
