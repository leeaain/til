// 소수 = prime number

const isPrimeNumber = function (num) {
    let count = 0;
    
    // 소수는 1과 자신 외에는 나누어 떨어지지 않는다.
    for (let i = 2; i < num; i++) { 
    // 2부터 num-1까지 각 숫자들로 num을 나눠서 딱 떨어질 때 count에 1씩 더한다.
      if (Number.isInteger(num / i)) count++
    }
    if (count > 0) {    // count가 0보다 크다면 소수가 아니라는 의미.
      return false; // 소수가 아닐 경우 false를 반환한다.
    }
    return true // 소수일 경우 true를 반환한다.
  }
  
  isPrimeNumber(2) // true
  isPrimeNumber(3) // true
  isPrimeNumber(4) // false
  isPrimeNumber(5) // true
  isPrimeNumber(6) // false
  isPrimeNumber(7) // true
  isPrimeNumber(8) // false
  isPrimeNumber(9) // false
  isPrimeNumber(10) // false
  isPrimeNumber(11) // true