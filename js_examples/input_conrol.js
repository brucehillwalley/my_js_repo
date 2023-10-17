let dizi = [];

while (true) {
  let diziStr = prompt(
    "Toplamak istediğiniz sayıları virgülle ayırarak giriniz : "
  ).split(",");
  let hataliGiris = false;

  for (let i = 0; i < diziStr.length; i++) {
    let num = Number(diziStr[i]);
    if (isNaN(num)) {
      alert(
        "Yanlış giriş yaptınız. Lütfen sadece sayıları virgülle ayırarak giriniz."
      );
      hataliGiris = true;
      break;
    }
    dizi.push(num);
  }

  if (!hataliGiris) {
    break;
  }
}

console.log(
  (function sum() {
    let sum = 0;
    for (let index = 0; index < arguments[0].length; index++) {
      sum += arguments[0][index];
    }
    return sum / arguments[0].length;
  })(dizi)
);

//?Bu kodda, while(true) döngüsü ile sürekli olarak 
//?kullanıcıdan giriş alınır. Eğer kullanıcı yanlış bir 
//?giriş yaparsa, hataliGiris değişkeni true olarak ayarlanır 
//?ve döngü kırılır. Ancak hataliGiris false ise (yani kullanıcı 
//?doğru bir giriş yapmışsa), while döngüsü kırılır ve program
//?devam eder.
