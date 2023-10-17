let a = Number(prompt("Notunuzu giriniz:"));
switch (true) {
  case a >= 0 && a <= 25:
    a = "FF";

    break;
  case a > 25 && a <= 45:
    a = "DD";

    break;
  case a > 45 && a <= 65:
    a = "CC";

    break;
  case a > 65 && a <= 75:
    a = "BB";

    break;
  case a > 75 && a <= 90:
    a = "BA";

    break;
  case a > 90 && a <= 100:
    a = "AA";

    break;
  default:
    alert("0-100 arasında sayı giriniz");
    break;
}

alert(`notunuz: ${a}`);


//!-----------------------------------------------------------------------

// let notu = 75;
// let harfNotu;
// switch (true) {
//   case (notu >= 90 && notu <= 100):
//     harfNotu = "AA";
//     break;
//   case (notu >= 80 && notu < 90):
//     harfNotu = "BA";
//     break;
//   case (notu >= 70 && notu < 80):
//     harfNotu = "BB";
//     break;
//   case (notu >= 60 && notu < 70):
//     harfNotu = "CB";
//     break;
//   case (notu >= 50 && notu < 60):
//     harfNotu = "CC";
//     break;
//   case (notu >= 40 && notu < 50):
//     harfNotu = "DC";
//     break;
//   case (notu >= 30 && notu < 40):
//     harfNotu = "DD";
//     break;
//   default:
//     harfNotu = "FF";
//     break;
// }
// console.log("Sınav notunuz: " + notu + ", harf notunuz: " + harfNotu);


//!------------------------------------------------------------------------

//? inline HTML-------------

// <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
// <title>Seyfettin Kahveci</title>
 
// <script type="text/javascript" language="javascript">
// function sifirla(){
// var a=document.getElementById("texta").value;
// switch(true)
// {
// case (a>1&&a<=49):document.getElementById("textb").value="FF";break;
// case (a>50&&a<=59):document.getElementById("textb").value="DD";break;
// case (a>60&&a<=64):document.getElementById("textb").value="DC";break;
// case (a>65&&a<=69):document.getElementById("textb").value="CC";break;
// case (a>70&&a<=74):document.getElementById("textb").value="CB";break;
// case (a>75&&a<=79):document.getElementById("textb").value="BB";break;
// case (a>80&&a<=84):document.getElementById("textb").value="BA";break;
// case (a>84&&a<=100):document.getElementById("textb").value="AA";break;
// default :document.getElementById("textb").value="0-100 arasında sayı giriniz";break;
// }
// }
// </script>
// </head>
// <body>
//   not
//     <input id="texta" type="text" name="textfield" onblur="sifirla()">
//     <input id="textb" type="text" name="textfield" >
// </body>
// </html>

