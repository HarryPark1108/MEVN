// 3.5.3 무겁고 많은 비동기로직을 배치단위로 처리하기

import captureWebsite from "capture-website"

const process = (url, filename) => captureWebsite
.file(url, filename, {
    fullPage: true
})

async function main() {
    const from = 1434;
    const to = 1448;
    for (let i = from; i < to; i++) {
        for (const e of ["A", "B", "C", "D"]) {
            const url = `https://codeforces.com/content/${i}/problem/${e}`
            await process(url, `./img/${i}${e}.png`)
        }
    }
    console.log("스크래핑이 완료되었습니다.")
}
main()

// 이건 좋지 않은 코드이다...
// JS3_5_3_new.js 에서...