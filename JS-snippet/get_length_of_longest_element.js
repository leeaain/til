function getLengthOfLongestElement(arr) {
    let longestLen = 0
    for (let el of arr) {
      if (longestLen < el.length ) longestLen = el.length   
    }
    return longestLen;
  }
  
  let arr = ['hey', 'girls', 'follow', 'me', 'in to the real world', 'hey', 'guys', 'open', 'your eyes', 'so no more tricks']
  
  // getLengthOfLongestElement(arr)
  // 20