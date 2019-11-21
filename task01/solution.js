function solution(N = 0) {
  const binaryArray = N.toString(2).split('');
  let binaryGap = 0;
  const gaps = [];

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === '1') {
      gaps.push(binaryGap);
      binaryGap = 0;
    } else if (binaryArray[i] === '0') {
      binaryGap++;
    }
  }

  const maxBinaryGap = gaps.reduce((a, b) => Math.max(a, b), 0);
  return maxBinaryGap;
}

const result = solution(1041);
console.log(result);
