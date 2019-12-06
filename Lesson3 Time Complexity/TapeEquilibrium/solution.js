function solution(A = [1, 3]) {
  const arr = [...A];
  const sum = arr.reduce((sum, cur) => sum + cur, 0);
  let firstPartSum = 0;
  let secondPartSum = sum;
  let minDiff = Number.MAX_VALUE;

  if (arr.length === 2) {
    return Math.abs(arr[0] - arr[1]);
  }

  for (let p = 0; p < arr.length; p++) {
    firstPartSum += arr[p];
    secondPartSum -= arr[p];
    const diff = Math.abs(firstPartSum - secondPartSum);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

const result = solution();
console.log(result);
