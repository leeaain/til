// 1부터 num까지의 합을 리턴하라
function sumTo(num) {
    if (num === 0) {return 0}
    return num + sumTo(num -1);
  }

// the best solv.
function sumTo(num) {
    if (num <= 1) {
      return num;
    }
  
    return num + sumTo(num - 1);
  }