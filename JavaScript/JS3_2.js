// 3.2 올바르게 객체 복사하기

// 3.2.1 스프레드 연산자와 Object.assign

const a = {"b": 1}
let b = {...a}
let c = Object.assign({}, a)
c.b = 3
b.b = 3
console.log(a) // b의 값이 변하지 않는다.

const a2 = {
    "b": 1,
    "c": {
        "d": 2
    }
}
let b2 = {...a2}
let c2 = Object.assign({}, a2)
c2.c.d = 3
console.log(a2) // 2단계 짜리 객체의 경우 d의 값이 변한다.

// 완벽하게 직접복사를 해서 원본 객체가 수정되지 않게 하려면??

// 3.2.2 재귀함수 <- 첫 번째 방법

const copy = o => {
    let out = {}
    let value, key
    for(key in o) {
        value = o[key]
        out[key] = (typeof value === "object" && value != null ? copy(value) : value)
    }
    return out
}
const a3 = {
    "b": 1,
    "c": {
        "d": 2
    }
}
let b3 = copy(a3)
b3.c.d = 4
console.log(a3)


// 3.2.3 JSON.parse와 JSON.stringify

const a4 = {
    "b": 1,
    "c": {
        "d": 2
    }
}
let b4 = JSON.parse(JSON.stringify(a4))
// 객체 a를 JSON.stringify를 이용해 문자열로 만들고, 다시 JSON.parse를 통해 객체로 만들었다
// 이후 복사한 b4를 수정해도 a4는 변하지 않는다.
b4.c.d = 4
console.log(a4)

// JSON.stringify의 활용법
// JSON.stringify(value, replacer, space)

const obj = {
    "name": "주홍철",
    "tall": 173
}
const ret = JSON.stringify(obj, null, 3)
console.log(ret)

const replacer = (key, value) => {
    return (typeof value === "string" ? undefined : value)
}
const ret2 = JSON.stringify(obj, replacer, 6)
console.log(ret2)


// 3.2.4 JSON의 기초
let obj2 = '{ "이름": "큰돌" }'
console.log(typeof obj2)
console.log(obj2.이름)
obj2 = JSON.parse(obj2)
console.log(typeof obj2)
console.log(obj2.이름)


// 3.2.5 JSON 직렬화

const obj3 = {
    "이름": "큰돌",
    "나이": 27,
    "나이2": undefined
}
console.log(obj3.이름)
const name3 = "이름"
console.log(obj3[name3])
console.log(obj3["이름"])
console.log(obj3["나이2"])