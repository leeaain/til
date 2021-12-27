// 배열의 길이를 리턴하라
// arr.length, 반복문 사용 금지
// arr은 immutable
// arr.isEmpty()로 빈배열 확인가능
// my code
function arrLength(arr) {
    if (arr.isEmpty()) {return 0}
    let newArr = arr.slice(1)
    return 1 + arrLength(newArr)
  }
  
//! ref code.
function arrLength(arr) {
    if (arr.isEmpty()) {
      return 0;
    }
  
    // const [head, ...tail] = arr;
    const tail = arr.slice(1);
    return 1 + arrLength(tail);
  }