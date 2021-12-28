// 고차함수
function each(arr, iterator) {
    for (let i = 0; i < arr.length; i++){
      let el = arr[i]
      iterator(el, i, arr)
    }
  }
  
  // 콜백함수
  function printEl(el, num, data) {
    console.log(`${el}, ${num} of [${data}]`)
  }
  
  // 콜백함수를 고차함수의 인자로 넣고 실행함
  each(['hello', 'world'], printEl)