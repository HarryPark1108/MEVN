// 3.4.2 고차함수

// 1) map
const a = (a) => {
    return a + 10;
};
const b = [1, 2, 3].map(a);
console.log(b);

// 2) 함수를 실행하여 반환하는 _call
const _call = (a, b) => a() + b();

// 3) 함수를 반환하는 함수
const c = val => () => val;
/*
위 코드는 아래 코드와 같은 의미이다.
function(val) {
    return function() {
        return val
    }
}
*/
console.log(a_lazy()); // ??? a_lazy() ???