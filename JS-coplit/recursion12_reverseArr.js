// 배열의 순서를 뒤집어서 리턴하라
// my code.
function reverseArr(arr) {
    // 배열의 맨 뒤 요소가 맨 앞으로 와야 한다
    let n = arr.length;
    if (n === 0) {return arr}
    const head = arr[n-1];
    const tail = arr.slice(0, n-1)
    return [head].concat(reverseArr(tail)) 
  }
  
  //! ref code.
  // 레퍼를 보면 매우 신기함...
  // tail을 head뒤에 붙이냐 앞에 붙이냐에 따라 순차가 달라짐.......
  function reverseArr(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
    return reverseArr(tail).concat(head);
  }