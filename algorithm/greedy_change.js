// 거스름돈 동전 개수 구하기

// 편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다.
// 현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다.
// 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최소값을 구하는 함수를 작성해 주세요.

// 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
// const output1 = test1(4000);
// console.log(output1); // --> 8

// 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
// const output2 = test1(4972);
// console.log(output2); // --> 18


function partTimeJob(k) {
    // 선택 절차 : 거스름돈의 동전 개수를 줄이기 위해 현재 가장 가치가 높은 동전을 우선 선택합니다.
    // 적절성 검사 : 1번 과정을 통해 선택된 동전들의 합이 거슬러 줄 금액을 초과하는지 검사합니다. 
    // 초과하면 가장 마지막에 선택한 동전을 삭제하고, 1번으로 돌아가 한 단계 작은 동전을 선택합니다.
    // 해답 검사 : 선택된 동전들의 합이 거슬러 줄 금액과 일치하는지 검사합니다. 
    // 액수가 부족하면 1번 과정부터 다시 반복합니다.
    
    // count 변수 선언
    let count = 0;
  
    // 내림차순으로 정렬
    let coins = [500, 100, 50, 10, 5, 1]
  
    for (let i = 0; i <= coins.length -1; i++) {
      let now = Math.floor(k / coins[i])   //4972 - 9개
      k = k - (coins[i] * now) // 4972 - (9*500) = 472
      count+=now
    }
  
    return count
  }
  