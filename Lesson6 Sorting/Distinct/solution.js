function solution(A = [2, 1, 1, 2, 3, 1]) {
  if (A.length === 0) {
    return 0;
  }

  const arr = [-1000001, ...A.sort()];
  let distinct = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      distinct++;
    }
  }
  return distinct;
}

console.log(solution([]));
