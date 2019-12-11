function solution(N = 26, P = [1, 4, 16], Q = [26, 10, 20]) {
  let sieve = new Array(N + 1).fill(true);
  sieve[0] = sieve[1] = false;
  let i = 2;

  while (i * i < N) {
    if (sieve[i]) {
      let k = i * i;
      while (k <= N) {
        sieve[k] = false;
        k += i;
      }
    }
    i++;
  }

  i = 2;
  const semiprimes = new Array(N + 1).fill(0);
  while (i * i < N) {
    if (sieve[i]) {
      let k = i;
      while (i * k <= N) {
        if (sieve[k]) {
          semiprimes[i * k] = 1;
        }
        k++;
      }
    }
    i++;
  }

  // 0 < i < N までのsemiprimeの合計を計算
  // 差が範囲の個数になる
  const semiprimeCounts = [];
  semiprimeCounts.push(0);
  for (let i = 1; i <= N; i++) {
    semiprimeCounts.push(semiprimeCounts[i - 1] + semiprimes[i]);
  }

  const result = [];
  for (let j = 0; j < P.length; j++) {
    result.push(semiprimeCounts[Q[j]] - semiprimeCounts[P[j] - 1]);
  }

  return result;
}

console.log(solution());
