// n-factorial 값을 리턴하라
// n!은 1부터 n까지 1씩 증가한 모든 값의 곱이다
// ! my code.
function factorial(num) {
    if (num === 0) {return 1}
    return num * factorial(num -1)
}

// ref code.
function factorial(num) {
    if (num <= 1) {
      return 1;
    }
  
    return num * factorial(num - 1);
  }