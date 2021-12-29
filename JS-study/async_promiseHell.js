function gotoSchool() {
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

