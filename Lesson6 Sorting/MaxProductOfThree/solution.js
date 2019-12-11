function solution(A = [-5, 5, -5, 4]) {
  if (A.length === 3) {
    return A[0] * A[1] * A[2];
  }

  let max1 = -1001;
  let max2 = -1001;
  let max3 = -1001;
  let min1 = 1001;
  let min2 = 1001;

  for (let i = 0; i < A.length; i++) {
    if (max1 < A[i]) {
      max3 = max2;
      max2 = max1;
      max1 = A[i];
    } else if (max2 < A[i]) {
      max3 = max2;
      max2 = A[i];
    } else if (max3 < A[i]) {
      max3 = A[i];
    }

    if (min1 > A[i]) {
      min2 = min1;
      min1 = A[i];
    } else if (min2 > A[i]) {
      min2 = A[i];
    }
  }

  const triplets1 = max1 * max2 * max3;
  const triplets2 = max1 * min1 * min2;

  return Math.max(triplets1, triplets2);
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
