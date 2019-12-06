function solution(X, Y, D) {
  const start = Number(X);
  const goal = Number(Y);
  const jumpDist = Number(D);

  if (start > goal) {
    return new Error('X should lower than Y.');
  }

  const dist = goal - start;
  const jumps = Math.ceil(dist / jumpDist);

  return jumps;
}

const result = solution(2, 92, 20);
console.log(result);
