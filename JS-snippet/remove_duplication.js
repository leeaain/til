const dupArr = [1, 2, 3, 1, 2];

// indexOf()는 배열에서 특정값이 '처음으로' 나타나는 index를 리턴함.
const uniqueArr = dupArr.filter((element, index) => {
    return dupArr.indexOf(element) === index;
});
// 최초의 index에 위치한 값(element)만 남기는 필터링