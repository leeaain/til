// 배열의 모든 요소의 곱을 리턴하라
//! my code
function arrProduct(arr) {
    if (arr.length === 0) {return 1}
    return arr[0] * arrProduct(arr.slice(1))
}

// ref code
function arrProduct(arr) {
    if (arr.length === 0) {
      return 1;
    }
  
    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
    return head * arrProduct(tail);
  }
  