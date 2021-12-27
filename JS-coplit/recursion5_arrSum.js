// 배열의 모든 요소의 합을 리턴하라
//! my code
function arrSum(arr) {
    if (arr.length === 0) { return 0 }
    return arr[0] + arrSum(arr.slice(1))
  }
  
// ref code.
function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }