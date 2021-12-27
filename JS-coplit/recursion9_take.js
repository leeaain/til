// arr에서 num개의 요소만 포함된 new array를 리턴하라
// num 값이 배열의 길이보다 큰 경우, 재귀 호출을 실행하지 않을 수도 있습니다
//! ref code.
function take(num, arr) {
  if (num >= arr.length) {
    return arr;
  }

  if (num === 0 || arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);

  return [head].concat(take(num - 1, tail));
}