function solution(A = [1, 2, 3, 1, 1, 1]) {
  const n = A.length;
  let check = new Array(n);
  if (n === 1) {
    if (A[0] === 1) {
      return 1;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < n; i++) {
    // 要素外にアクセスしないようにチェック
    if (A[i] > n) {
      return 0;
    }

    // undefinedなら0で初期化
    if (!check[A[i] - 1]) {
      check[A[i] - 1] = 0;
    }

    if (check[A[i] - 1] > 0) {
      return 0;
    } else {
      check[A[i] - 1] += 1;
    }
  }

  return 1;
}

console.log(solution());
