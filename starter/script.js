"use strict";

// JavaScript Fundamentals – Part 2
// Coding Challenge #1

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// const dolphinsAvg = calcAverage(44, 23, 71);
// const koalasAvg = calcAverage(65, 54, 49);

const dolphinsAvg = calcAverage(85, 54, 41);
const koalasAvg = calcAverage(23, 34, 27);

console.log(dolphinsAvg, koalasAvg);

function checkWinner(dolphinsAvg, koalasAvg) {
  const targetScore1 = koalasAvg * 2;
  const targetScore2 = dolphinsAvg * 2;

  if (dolphinsAvg > koalasAvg && dolphinsAvg == targetScore1) {
    return `Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`;
  } else if (koalasAvg > dolphinsAvg && koalasAvg == targetScore2) {
    return ` Koalas win (${koalasAvg} vs. ${dolphinsAvg})`;
  } else {
    return `Nobody Wins`;
  }
}

const whosTheWinner = checkWinner(dolphinsAvg, koalasAvg);
console.log(whosTheWinner);


// Coding Challenge #2
function calcTip(billAmount) {
  return billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;
}
console.log(calcTip(100));

const billAmount = [125, 555, 4];
const tipsAmount = [calcTip(billAmount[0]) , calcTip(billAmount[1]) , calcTip(billAmount[2]) ];
const totalAmount = [tipsAmount[0] + billAmount[0], tipsAmount[1] + billAmount[1], tipsAmount[2] + billAmount[2]];

console.log(tipsAmount);
console.log(totalAmount);


// Coding Challenge #3
const Mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi;
  },
};

const John = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi;
  },
};

const jBmi = John.calcBMI();
const mBmi = Mark.calcBMI();
console.log(jBmi, mBmi);

if (jBmi > mBmi) {
  console.log(
    `${John.name}'s BMI ${jBmi} is higher than ${Mark.name}'s ${mBmi}!`
  );
} else {
  console.log(
    `${Mark.name} BMI ${mBmi} is higher than ${John.name}'s ${jBmi}!`
  );
}


// Coding Challenge #4
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (var i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(tips);
console.log(total);
