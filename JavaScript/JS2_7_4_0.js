// Promise의 에러 처리

const a = (c = "naver") => {
    return new Promise((resolve, reject) => {
        // 비동기 함수 로직
        throw new Error("[큰돌에러]")   // 에러를 발생시키는 방법 1
        reject(new Error("[큰돌에러]")) // 에러를 발생시키는 방법 2
        reject("[큰돌에러]")            // 에러를 발생시키는 방법 3
        setTimeout(() => {
            resolve(`${c}로 부터 받은 사랑`)
        }, 1000)
    })
}

a().then(ret => {
    return a("kakao")
}).then(ret => {
    console.log(ret)
}).catch(e => {
    console.log(`${e}라는 에러가 발생했어..!`)
})