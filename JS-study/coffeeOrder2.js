function waitAsync(callback, ms) {
    setTimeout(callback, ms); // ms초 이후 callback함수 실행
}

function drink(person, coffee) {
    console.log(person + '는 ' + coffee + '를 마십니다.');
}

function orderCoffeeSync(coffee) {
    console.log(coffee + '가 접수되었습니다');
    waitSync(2000);
    return coffee;
}

let customers = [{
    name: 'Steve',
    request: '카페라떼'
}, {
    name: 'John',
    request: '아메리카노'
}];

function orderCoffeeAsync(menu, callback) {
    console.log(menu + '가 접수되었습니다');
    waitAsync(function() { callback(menu) }, 2000);
}

customers.forEach(function(customer) {
    orderCoffeeAsync(customer.request, function(coffee) {
        drink(customer.name, coffee);
    }) // 곧바로 drink(customer.name, coffee)를 전달하지 않고 굳이 function을 전달하는 이유는? --> 전자는 일 한 결과를 넘겨주게 되기 때문. 후자처럼 callback의 형태로 해야 할 일 그 자체를 꾸러미로 넘겨주게 된다.
})