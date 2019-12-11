function solution(K, M, A) {
  // M is a red herring
  return minimalLargeSumBinarySearch(K, A);
}

function minimalLargeSumBinarySearch(maxNumBlocks, arra) {
  var lowerBoundLargeSum = Math.max.apply(null, arra);
  var upperBoundLargeSum = arra.reduce((a, c) => a + c, 0);
  var result = -1;

  while (lowerBoundLargeSum <= upperBoundLargeSum) {
    var tentativeLargeSum = Math.floor((lowerBoundLargeSum + upperBoundLargeSum) / 2);
    if (tentativeLargeSumIsPossible(arra, maxNumBlocks, tentativeLargeSum)) {
      result = tentativeLargeSum; // OK, but...
      // try a smaller one
      upperBoundLargeSum = tentativeLargeSum - 1;
    } else {
      // try a larger one
      lowerBoundLargeSum = tentativeLargeSum + 1;
    }
  }
  return result;
}

function tentativeLargeSumIsPossible(arra, maxNumBlocks, tentativeLargeSum) {
  var curBlockSum = 0;
  var numBlocks = 1; // at least...

  for (let elem of arra) {
    if (curBlockSum + elem <= tentativeLargeSum) {
      // make curBlock bigger
      curBlockSum += elem;
    } else {
      // start a new block containing element
      numBlocks++;
      curBlockSum = elem;
    }
    if (numBlocks > maxNumBlocks) return false;
  }
  return true;
}
