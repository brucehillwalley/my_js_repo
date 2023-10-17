// alert("Enter three number ")
// let num1 =parseInt(prompt("Enter number 1 : "));
// let num2 = parseInt(prompt("Enter number 2 : "));
// let num3 = parseInt(prompt("Enter number 3 : "));
// let add = num1 + num2 + num3
// let multi = num1 * num2 * num3
// let min;
// let max;
// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     alert("Please enter valid numbers.");
// } else {
//     if (num1 > num2 && num1 > num3) {
// 			max = num1;
//         alert(`${num1} is the biggest number!`);
//     } else if (num2 > num1 && num2 > num3) {
// 				max = num2;
//         alert(`${num2} is the biggest number!`);
//     } else if (num3 > num1 && num3 > num2) {
// 				max = num3;
//         alert(`${num3} is the biggest number!`);
//     } else {
//         alert("All numbers are equal.");
// 				max = num3
//     }

//   }

// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     alert("Please enter valid numbers.");
// } else {
//     if (num1 < num2 && num1 < num3) {
// 			min = num1;
//     } else if (num2 < num1 && num2 < num3) {
// 				min = num2;
     
//     } else if (num3 < num1 && num3 < num2) {
// 				min = num3; 
//     } else {
//         alert("All numbers are equal.");
// 				min = num3
//     }
//   }
// console.log(`3 sayinin,\ntoplami ${add},\nCarpimi: ${multi},\nEn buyuk: ${max},\nEn Kucuk: ${min}`);


//?----------------NOAH HOCA ÇÖZÜMÜ-----------


const n1 = 4
const n2 = 3
const n3 = 2



//? 1.YÖNTEM

if (n1>=n2 && n1>=n3) {
  console.log("En büyük:", n1);
  
}else if (n2>=n1 && n2>=n3) {
  console.log("En büyük:", n2);
  
}else if (n3>=n1 && n3>=n2) {

  console.log("En büyük:", n3);
  
}

//? 2.YÖNTEM eşitliklerde tekrar yazdırır.

if(n1>=n2){
  if(n1>=n3){
    console.log("En büyük:", n1);
  }
}if(n2>=n1){
  if (n2>=n3) {
    console.log("En büyük:", n2);
  }
}if (n3>=n1) {
  if (n3>=n2) {
    console.log("En büyük:", n3);
  }
  
}