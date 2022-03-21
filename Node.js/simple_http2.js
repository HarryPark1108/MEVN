// 4.1.2 http 객체로 웹서버 만들기
// 2) http 객체를 이용해 서버 만들어보기 (2)

import http from 'http'
const PORT = 12010;
const server = http.createServer((req, res) => {
    res.setHeader("content-Type", "application/json; charset=utf-8");
    const obj = {
        "이름": "큰돌"
    }
    res.end(JSON.stringify(obj));
})

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});