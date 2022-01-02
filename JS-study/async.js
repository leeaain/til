// 비동기 출력
const printStr = (str) => {
    setTimeout(
    () => {
      console.log(str)
    },
    Math.floor(Math.random() * 100) + 1)
  }
  
  const printAll = () => {
    printStr('A')
    printStr('B')
    printStr('C')
  }
  printAll()
  