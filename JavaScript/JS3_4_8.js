// 3.4.8 클로저

// 1) 클로저의 예 (1)
const test = (function() {
    let count = 0;
    return {
        increase() {
            count++
        },
        decrease() {
            count--
        },
        getValue() {
            console.log(count)
        }
    }
})()
test.increase()
test.increase()
test.increase()
test.decrease()
test.increase()
test.getValue()

// 2) 클로저의 예 (2)
const add = (function() {
    let counter = 0;
    return function() {
        counter += 1
        return counter
    };
})();
console.log([add(), add(), add()])