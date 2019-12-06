function solution(N = [0]) {
  return N.reduce((oddNum, cur) => oddNum ^ cur, 0);
}

const N = [1, 1, 3, 3, 5, 7, 7];
const result = solution(N);
console.log(result);
