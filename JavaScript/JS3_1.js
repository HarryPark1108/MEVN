// 3.1 함수 성능 비교

// 3.1.1 정수형 변환: parseInt와 비트연산자

let a = 123.456789

b = parseInt(a)
c = ~~(a) // 성능이 더 좋다.

console.log(b)
console.log(c)

// 3.1.2 배열포함 확인: indexOf와 includes

let names = ["홍철", "윤찬", "강우"]

console.log(names.indexOf("강우"))
console.log(names.includes("강우"))

// 3.1.3 객체선언: new Object와 {}

let obj1 = {}
let obl2 = new Object() // 둘다 비슷한 성능