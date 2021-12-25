// promise의 syntactic sugar
// await로 비동기 함수들을 동기적인 것처럼 사용가능
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

const printAll = async() => {
    const first = await gotoSchool();
    console.log(first)

    const second = await parking();
    console.log(second)

    const third = await gotoClassroom();
    console.log(third)

    const fourth = await lecturing();
    console.log(fourth)
}

printAll();