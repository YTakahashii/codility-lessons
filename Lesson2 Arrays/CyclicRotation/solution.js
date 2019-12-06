function solution(A = [0], K = 0) {
  if (A.length > 100 || K < 0 || K > 100) {
    throw new Error('N and K are integers within the range [0..100]');
  }

  const arr = A;
  const shiftTimes = K % arr.length;

  return [...arr.slice(arr.length - shiftTimes), ...arr.slice(0, arr.length - shiftTimes)];
}

try {
  const arr = [1, 2, 3, 4, 5, 6];
  const shiftTimes = -1;
  const result = solution(arr, shiftTimes);
  console.log('arr:', arr);
  console.log('shiftTimes:', shiftTimes);
  console.log('result:', result);
} catch (e) {
  console.log(e);
}
