var totalMoney = function (n) {
  let total = 0;
  let current = 1;

  for (let i = 1; i <= n; i++) {
    total += current;
    current++;

    if (i % 7 === 0) {
      // Reset to 1 on Mondays
      current = Math.floor(i / 7) + 1;
    }
  }

  return total;
};

console.log(totalMoney(20)); // 96

console.log(totalMoney(4)); // 10
