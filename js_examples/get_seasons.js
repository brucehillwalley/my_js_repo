const day = 23;
const month = 12;

if(day< 1 || month<1 || day>31 || month > 12 || isNaN(day) || isNaN(month)){
    alert(`Invalid month or day. Please enter valid values.`)
}

if((day >=21 && month==2) || (month>2 && month<6) ){
    alert(`The season for ${month}/${day} is Spring.`)
}else if((day <=21 && month==9) || (month>=6 && month<9) ){
    alert(`The season for ${month}/${day} is Summer.`)
}else if (
    (month == 9 && day >= 22) ||
    (month < 12 && month > 9) ||
    (month == 12 && day <= 20)
  ) {
    alert(`The season for ${month}/${day} is Fall.`)
  }else{
    alert(`The season for ${month}/${day} is Winter.`)
  }


  //? ALTERNATİF

//   let month = Number(prompt(`please write the months as number`));
// let day = Number(prompt(`please write the day`));
// let season = "";
// if (day > 0 && day < 32 && month > 0 && month < 13) {
//   switch (month) {
//     case 1:
//       season = "Winter";
//       break;
//     case 2:
//       if (day > 20) {
//         season = "Spring";
//       } else {
//         season = "Winter";
//       }
//       break;
//     case 3:
//       season = "Spring";
//       break;
//     case 4:
//       season = "Spring";
//       break;
//     case 5:
//       season = "Spring";
//       break;
//     case 6:
//       season = "Summer";
//       break;
//     case 7:
//       season = "Summer";
//       break;
//     case 8:
//       season = "Summer";
//       break;
//     case 9:
//       if (day > 21) {
//         season = "Fall";
//       }
//       {
//         season = "Summer";
//       }
//       break;
//     case 10:
//       season = "Fall";
//       break;
//     case 11:
//       season = "Fall";
//       break;
//     case 12:
//       if (day > 20) {
//         season = "Winter";
//       } else {
//         season = "Fall";
//       }
//       break;
//   }
//   console.log(`The season for ${String(day)}/ ${String(month)} is ${season}`);
// } else {
//   console.log(`Wrong Format`);
// }


