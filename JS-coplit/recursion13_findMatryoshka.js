// 마트료시카 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴하라
// my code
function findMatryoshka(matryoshka, size) {
    // boolean타입을 리턴하며 빈 객체를 입력받은 경우, false를 리턴
    if (matryoshka.length === undefined) {return false}
    // matryoshka.size가 size와 동일할 때 true를 리턴
    // matryoshka.matryoshka가 null일 때 stop
    if (matryoshka.size === size) {return true}
    return 
  }
  
  //! ref code.
  function findMatryoshka(matryoshka, size) {
    // recursive case
    if (matryoshka.size === size) {
      return true;
    } else if (matryoshka.matryoshka && matryoshka.size > size) {
      return findMatryoshka(matryoshka.matryoshka, size);
    }
  
    // base case
    return false;
  }