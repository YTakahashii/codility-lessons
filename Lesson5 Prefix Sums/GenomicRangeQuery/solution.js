// O(N^2)
function badSolution(S = ['C', 'A', 'G', 'C', 'C', 'T', 'A'], P = [2, 5, 0], Q = [4, 5, 6]) {
  const impactFactor = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const mins = [];

  for (let i = 0; i < P.length; i++) {
    const begin = P[i];
    const end = Q[i];
    let min = impactFactor['T'];
    for (let j = begin; j < end + 1; j++) {
      min = Math.min(min, impactFactor[S[j]]);
    }
    mins.push(min);
  }

  return mins;
}

// O(N)
function solution(S = 'AC', P = [0, 0, 1], Q = [0, 1, 1]) {
  const impactFactor = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const nucleotides = [];
  const nucleotidesCounter = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  const mins = [];

  // 先にS[i]までの各要素の出現数を計算する
  // 最初は0で埋める
  for (let i = 0; i <= S.length; i++) {
    nucleotides.push({ ...nucleotidesCounter });
    if (S[i]) {
      nucleotidesCounter[S[i]]++;
    }
  }

  for (let i = 0; i < P.length; i++) {
    const from = P[i];
    const to = Q[i] + 1;

    if (nucleotides[to].A - nucleotides[from].A > 0) {
      mins.push(impactFactor.A);
    } else if (nucleotides[to].C - nucleotides[from].C > 0) {
      mins.push(impactFactor.C);
    } else if (nucleotides[to].G - nucleotides[from].G > 0) {
      mins.push(impactFactor.G);
    } else if (nucleotides[to].T - nucleotides[from].T > 0) {
      mins.push(impactFactor.T);
    }
  }

  return mins;
}

// console.log(badSolution());
console.log(solution());
