function solution(A = [23171, 21011, 21123, 21366, 21013, 21367]) {
  let maxProfit = 0;
  let minPrice = 200001;

  for (const price of A) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

console.log(solution());
console.log(solution([0, 0, 0, 0, 0]));
