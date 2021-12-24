const printString = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(str)
                resolve()
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

const printAll = () => {
    printString("A")
    .then(() => {
        return printString("B")
    })
    .then(() => {
        return printString("C")
    })
}
printAll()