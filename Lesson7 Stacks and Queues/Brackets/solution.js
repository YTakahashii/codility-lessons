function solution(S = '({{{{}}}})') {
  if (S.length === 0) {
    return 1;
  }
  const stack = [];
  for (const s of S) {
    switch (s) {
      case '(':
      case '[':
      case '{':
        stack.push(s);
        break;
      case ')':
        if (stack.pop() !== '(') {
          return 0;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return 0;
        }
        break;
      case '}':
        if (stack.pop() !== '{') {
          return 0;
        }
        break;
      default:
        return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution());
