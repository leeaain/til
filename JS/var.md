# JS, 변수
> ## JS에서 변수 선언 단계
### 선언 → 초기화 단계를 거쳐 수행된다.
* 선언 단계: 변수명을 등록하여 자바스크립트 엔진에 변수의 존재를 알린다.
* 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.
---
> ## 호이스팅

- 변수 선언이 어디에 있든 상관없이 다른 코드보다 먼저 실행되는 특징. <br>
(자바스크립트 엔진은 소스코드를 한 줄씩 순차적으로 실행하기에 앞서, 변수 선언을 포함한 모든 선언문(ex. 변수 선언문, 함수 선언문 등)을 찾아내 먼저 실행)
---
> ## 변수 자료형 바꾸기
~~~ javascript
function convertToNumber(data) {
  return Number(data);
}

convertToNumber('100')
// 100
~~~
---
~~~ js
function convertToString(anything) {
  return String(anything);
}

convertToString(123)
// '123'
~~~