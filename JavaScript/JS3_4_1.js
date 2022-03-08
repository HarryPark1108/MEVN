// 3.4.1 순수함수와 참조 투명성

const b = 1;
const pure = (a, b) => {
    return a + b;
};
const not_pure = (a) => {
    return a + b;
};
console.log(pure(1, 3));
console.log(not_pure(1));

// 전역변수를 참조할 때의 순수함수
let c = 0;

// 나쁜 예 : 매개변수로 받지도 않고 전역변수를 변환하고 반환한다.
const bad_f = () => {
    return c++
};
bad_f();
console.log(c);

let d = 0;
// 좋은 예 : 매개변수로 받아 +1을 한다.
const f = (d) => d + 1;
console.log(f(d));
