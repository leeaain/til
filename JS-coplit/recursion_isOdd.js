// num이 홀수인지 여부를 리턴하라
// !my code.
function isOdd(num) {
    if (num < 0) { num = -num}
    if (num <= 1) { return (num === 1)}
    // num-2로 재귀함수를 돌린다.
    return isOdd(num -2)
  }

  // the best code.
  function isOdd(num) {
    if (num === 0) {
      return false;
    } else if (num === 1) {
      return true;
    }
  
    if (num < 0) {
      return isOdd(-num);
    }
    return isOdd(num - 2);
  }