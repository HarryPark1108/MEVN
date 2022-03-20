import * as L from "fxjs/Lazy"
import * as C from "fxjs/Concurrency"
import { go } from "fxjs"
import captureWebsite from "capture-website"

const BATCH = 5
const process = ([url, filename]) => captureWebsite
.file(url, filename, {
    fullPage: true
})

async function main() {
    const list = []
    const from =  1442
    const to = 1445
    for (let i = from; i < to; i++) {
        for (let e of ["A", "B", "C", "D"]) {
            const url = `https://codeforces.com/content/${i}/problem/${e}`
            list.push([url, `./img/${i}${e}.png`])
        }
    }
    await go(
        list,
        L.map(process),
        C.takeAll(BATCH),
    )
    console.log("스크래핑이 완료되었습니다.")
}
main()