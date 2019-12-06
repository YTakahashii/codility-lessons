function solution(A = [1, 3, 2, 5]) {
  let missing = 1;
  const counter = new Set();

  for (const num of A) {
    if (num > 0) {
      counter.add(num);
    }
  }

  for (let i = 1; i < A.length + 1; i++) {
    if (!counter.has(i)) {
      return i;
    }
  }

  if (A.length === counter.size) {
    missing = A.length + 1;
  }

  return missing;
}

console.log(solution());
