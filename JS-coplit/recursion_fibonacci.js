// 피보나치 수열의 num번째 요소를 리턴하라
// 0번째 피보나치 수 === 0
// 1번째 피보나치 수 === 1
// 2번째 피보나치 수부터 바로 직전의 두 피보나치 수의 합
// ! my code.
function fibonacci(num) {
    if (num === 0) {return 0}
    if (num === 1) {return 1}
    return fibonacci(num -1) + fibonacci(num -2)
  }
  
  // the best code.
  function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }