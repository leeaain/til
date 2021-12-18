// n * n 크기의 보드판위에서 operation 문자열대로 조작하여 머문 자리의 점수들을 합산한다.
// operation은 UDLR로 구성된 문자열이다.
// U는 up, D는 down, L은 left, R은 right로 한칸 움직임을 뜻한다.
// 좌표 왼쪽 상단(0,0)에서 출발하며 이 자리는 항상 0 값을 가진다.,
// 그 외의 칸들은 숫자 0 혹은 1 이다.
// 주의 : 말이 보드 밖으로 나가는 경우 즉시 'OUT'을 반환한다.

// 입출력 예시)
// const board1 = [
//     [0, 0, 0, 1],
//     [1, 1, 1, 0],
//     [1, 1, 0, 0],
//     [0, 0, 0, 0]
//   ]
//   const output1 = boardGame(board1, 'RRDLLD');
//   console.log(output1); // 4
  
  
//   const board2 = [
//     [0, 0, 1],
//     [1, 1, 1],
//     [1, 0, 0]
//   ]
//   const output2 = boardGame(board2, 'UUUDD');
//   console.log(output2); // 'OUT'
  
//   const board3 = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0]
//   ]
//   const output3 = boardGame(board3, 'DDRRRUDUDUD');
//   console.log(output3); // 0




function boardGame(board, operation) {
    // x:2차 배열의 index / y:1차 배열의 index 
    // targetScore:현재 머문자리의 점수 / score:총점
    let x = 0, y = 0, targetScore = 0, score = 0;
    // 구조분해할당으로 string인 operation을 배열로 변환한다.
    let arr = [...operation]  
    
    for (let el of arr) {
      // D = y를 +1하고 x 유지.
      // U = y를 -1하고 x 유지.
      // L = x를 -1한다. y는 유지.
      // R = x를 +1한다. y는 유지.
      if (el === "D") y++
      if (el === "U") y--
      if (el === "L") x--
      if (el === "R") x++ 
  
      // 예외조건 : x나 y가 0 미만이 되면 'out' 반환.
      if ( x < 0 || y < 0) return 'OUT'
  
      targetScore = board[y][x] // y, x 좌표의 점수를 targetScore에 할당
      score+= targetScore;  // 총점에 누적
    }
    return score; // 총점 반환
  };
  