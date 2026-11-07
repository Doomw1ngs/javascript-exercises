const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 <= 0 ||
    num2 <= 0
  ) {
    return "ERROR";
  }

  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
