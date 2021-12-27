// 배열의 모든 요소의 논리곱을 리턴하라
// 논리곱(conjunction, AND)이란 수리 논리학에서, 주어진 복수 명제 모두가 참인지를 나타내는 논리 연산
// arr은 immutable
// 빈 배열의 논리곱 === true
// my code
function and(arr) {
    if (arr.length === 0) {return true}
    return arr[0] && and(arr.slice(1))
}
  
//! ref code.
function and(arr) {
    if (arr.length === 0) {
      return true;
    }
  
    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
  
    // if (head === false) {
    //   return false;
    // }
  
    return head && and(tail);
  }