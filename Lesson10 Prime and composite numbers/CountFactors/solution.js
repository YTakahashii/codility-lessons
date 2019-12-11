function solution(N = 24) {
  let i = 1;
  let factors = 0;
  while (i * i < N) {
    if (N % i === 0) {
      factors += 2;
    }
    i++;
  }

  if (i * i === N) {
    factors++;
  }

  return factors;
}

console.log(solution(49));
