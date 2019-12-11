function goldenMaxSlice(A = [5, -7, 3, 5, -2, 4, -1]) {
  let maxEnding = 0;
  let maxSlice = 0;
  for (const value of A) {
    maxEnding = Math.max(0, maxEnding + value);
    maxSlice = Math.max(maxSlice, maxEnding);
    console.log('maxEnding: ', maxEnding);
    console.log('maxSlice: ', maxSlice);
  }

  return maxSlice;
}

goldenMaxSlice();

function quadraticMaxSlice(A = [5, -7, 3, 5, -2, 4, -1]) {
  const n = A.length;
  let result = 0;
  for (let p = 0; p < n; p++) {
    let sum = 0;
    for (let q = p; q < n; q++) {
      sum += A[q];
      result = Math.max(result, sum);
    }
  }

  return result;
}

console.log(quadraticMaxSlice());
