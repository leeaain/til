//async_promiseHell.js의 promise hell문제를 수정한 예
// promise Chaining의 예

function gotoSchool() {
    // promise화 된 함수 : .then으로 이어나갈 수 있다는 의미
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('1. go to school') }, 400)
    })
}

function parking() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  {resolve('2. parking')}, 300)
    })
}

function gotoClassroom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('3. goto Classroom')}, 200)
    })
}

function lecturing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('4. teaching students')}, 100)
    })
}

// promise 지옥은 return 처리를 잘 해주면 해결가능
const printAll = () => {
  gotoSchool()
  .then((data) => {
    console.log(data)
    return parking()
    // return을 통해서 해당 비동기를 다음으로 넘김
    // 이러한 기술을 promise Chaining이라 함
  })
  .then((data) => {
    console.log(data)
    return gotoClassroom()
  })
  .then((data) => {
    console.log(data)
    return lecturing()
  })
  .then((data) => {
    console.log(data)
  })
}

printAll()

