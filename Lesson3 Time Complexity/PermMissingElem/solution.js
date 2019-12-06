function solution(A = [1, 2, 3, 4, 6]) {
  const n = A.length;
  const sum = ((n + 1) * (n + 2)) / 2;

  return A.reduce((missing, num) => missing - num, sum);
}

const result = solution();
console.log(result);
