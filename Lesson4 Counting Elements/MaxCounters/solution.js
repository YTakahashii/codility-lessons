function solution(N = 5, A = [3, 4, 4, 6, 1, 4, 4]) {
  let counter = new Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (max < ++counter[A[i] - 1]) {
        max = counter[A[i] - 1];
      }
    } else if (A[i] > N) {
      counter = counter.map(() => max);
    }
  }

  return counter;
}

console.log(solution());
