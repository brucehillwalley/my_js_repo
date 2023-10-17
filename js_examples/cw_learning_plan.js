let gun = prompt(`Lütfen bir gün giriniz.`);

switch (gun) {
  case "pazartesi":
  case "salı":
  case "çarşamba":
  case "perşembe":
    gun = "inclass";
    break;

  case "cuma":
    gun = "teamwork";
    break;

  case "cumartesi":
    gun = inclass + workshop;
    break;

  case "pazar":
    gun = "self study";
    break;

  default:
    alert("gün giriniz");
    break;
}

alert(gun);