import http from 'http'
const PORT = 12010;
const server = http.createServer((req, res) => {
    res.setHeader("content-Type", "application/json; charset=utf-8");
    const obj = {
        "이름": "큰돌"
    }
    res.end(JSON.stringify(obj));
})

setTimeout(() => {
    // 에러를 발생시켜서 1초마다 서버가 중지되게 만듭니다.
    JSON.parse("{Z")
}, 10000)

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});