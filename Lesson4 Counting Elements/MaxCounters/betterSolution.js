function solution(N = 5, A = [3, 4, 4, 6, 1, 4, 4]) {
  let counters = Array(N).fill(0);
  let currentMax = 0;
  let lastIncrease = 0;

  for (const counter of A) {
    if (counter > N) {
      lastIncrease = currentMax;
    } else {
      let i = counter - 1;
      counters[i] = Math.max(counters[i], lastIncrease);
      counters[i]++;
      currentMax = Math.max(currentMax, counters[i]);
    }
  }
  console.log(counters);

  return counters.map(c => Math.max(c, lastIncrease));
}

console.log(solution());

// とりあえず更新対象だけMax似合わせて、残されたやつは最後に更新する方針
