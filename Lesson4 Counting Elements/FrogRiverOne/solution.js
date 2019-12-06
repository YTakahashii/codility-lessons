// 1~X、までの整数がすべて出てきた時間を返す
function solution(X = 5, A = [1, 2, 1, 4, 2, 3, 5, 4]) {
  let second = -1;
  let sum = (X * (X + 1)) / 2;
  let check = new Array(X);

  for (let i = 0; i < A.length; i++) {
    // 要素外にアクセスしないようにチェック
    if (A[i] > X) {
      continue;
    }

    // undefinedなら0で初期化
    if (!check[A[i] - 1]) {
      check[A[i] - 1] = 0;
    }

    if (check[A[i] - 1] === 0) {
      sum -= A[i];
    }

    if (sum === 0) {
      second = i;
      break;
    }

    check[A[i] - 1] += 1;
  }

  return second;
}

console.log(solution(2, [2, 2, 2]));
