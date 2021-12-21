// numbers, 오름차순
const num = [1, 3, -1, 11, 333]
num.sort((a, b) => a-b)
// numbers, 내림차순
num.sort((a, b) => b-a)

// strings, 오름차순
const str = [ 'zoo', 'opera house', 'play ground', 'school']
str.sort()
// lnline compare function
str.sort(function(firstEl, secondEl) {
    if (firstEl < secondEl) {return -1}
    if (firstEl > secondEl) {return 0}
})