function solution(A = [3, 4, 3, 2, 3, -1, 3, 3]) {
  const n = A.length;
  const stack = [];
  let lastIndex = 0;
  for (let i = 0; i < n; i++) {
    if (stack.length > 0) {
      const last = stack.length - 1;
      if (stack[last] === A[i]) {
        stack.push(A[i]);
      } else {
        stack.pop();
      }
    } else {
      stack.push(A[i]);
      lastIndex = i;
    }
  }

  if (stack.length === 0) {
    return -1;
  }

  let count = 0;
  for (const value of A) {
    if (value === stack[0]) {
      count++;
    }
  }

  if (count > Math.floor(n / 2)) {
    return lastIndex;
  }

  return -1;
}

console.log(solution());
