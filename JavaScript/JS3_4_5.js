// 3.4.5 파괴적인 함수 쓰지 않기
const a = [1, 2, 3, 4, 5];
let b = a.slice(1)
console.log(a, b)
b = a.splice(1)
console.log(a, b)

// slice를 썼더니 배열 a의 원본 배열이 살아있고, splice를 썼더니 a라는 원본 배열이
// 파괴된 것을 볼 수 있다. 이러한 함수들을 비순수함수라고 한다. 비순수함수에는 reverse,
// sort, fill, pop, push, shift, unshift, splice가 있다.