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

// promise 지옥
gotoSchool()
.then(data => {
    console.log(data)
    
    parking()
    .then(data => {
        console.log(data)

        gotoClassroom()
        .then(data => {
            console.log(data)

            lecturing()
            .then(data => {
                console.log(data)
            })
        })
    })
})
//.then안에서 return 처리를 잘 해주면 promise hell에 빠질 일이 없음
// const 
