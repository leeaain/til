// 비동기식 출력의 순서를 제어하고 싶을 때
// 아이러니하게도 비동기식을 다시 동기식으로 바꾸게 되지만
// 때로 이렇게 비동기식의 순서를 제어해야 할 때 이런 방식을 사용
const printStr = (str, callback) => {
    setTimeout(
        () => {
            console.log(str)
            callback()
        },
        Math.floor(Math.random() * 100) + 1
    )
}

const printAll = () => {
    printStr("A", () => {
        printStr("B", () => {
            printStr("C", () => {})
        })
    })
}

printAll()