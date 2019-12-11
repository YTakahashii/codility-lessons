function solution(A = [0, 1, 0, 1, 1]) {
  let east = 0;
  let passingCars = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      east++;
    } else {
      passingCars += east;
      if (passingCars > 1000000000) {
        passingCars = -1;
        break;
      }
    }
  }
  return passingCars;
}

console.log(solution());
