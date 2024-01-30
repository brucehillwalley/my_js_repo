// Purpose of the this coding challenge is to write a TypeScript code that given TR Identity Number, returns valid or invalid.

// Valid TR Identity Number must follow these rules:
// TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes.
// The ID number cannot start with 0.
// The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
// Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits.
// The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
// When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.

const input = document.getElementById("input") as HTMLInputElement;

const button = document.getElementById("button") as HTMLButtonElement;

button?.addEventListener("click", () => {
  console.log(check(Number(input.value)));
});

function check(tc: number): boolean {
  const tcString = tc.toString();

  if (tcString.length == 11 && tcString[0] !== "0") {
    const rule1 =
      (Number(tcString[0]) +
        Number(tcString[2]) +
        Number(tcString[4]) +
        Number(tcString[6]) +
        Number(tcString[8])) *
      7;

    const rule2 =
      Number(tcString[1]) +
      Number(tcString[3]) +
      Number(tcString[5]) +
      Number(tcString[7]);

    const rule3 = (rule1 - rule2) % 10;

    if (Number(tcString[9]) == rule3) {
      const rule4 =
        tcString
          .split("")
          .slice(0, 10)
          .reduce((sum, i) => sum + Number(i), 0) % 10;

      return Number(tcString[10]) == rule4;

      console.log(rule4);
    }
  }
  return false;
}
