// 배열 모든 요소의 논리합(or)을 리턴하라
// 논리합 : 복수 명제에 적어도 1개 이상의 참이 있는지를 나타내는 논리 연산
// 빈 배열의 논리합 === flase
// my code.
function or(arr) {
    if (arr.length === 0) {return false}
    return arr[0] || or(arr.slice(1))
}

//! ref code
function or(arr) {
    if (arr.length === 0) {
      return false;
    }
  
    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
  
    // if (head === true) {
    //   return true;
    // }
  
    return head || or(tail);
  }