//this problem wants us to calculate the total amount of money you will have in your bank account after n weeks
//the first monday you will have 1 dollar in your bank account
//the second monday you will have 2 dollars in your bank account


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
