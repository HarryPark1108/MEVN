// 4.1.2 http 객체로 웹서버 만들기
// 1) http 객체를 이용해 서버 만들어보기 (1)

import http from 'http'
const PORT = 12010;
const server = http.createServer((req, res) => {
    // 응답값은 텍스트임을 나타내는 헤더 정보를 설정
    res.setHeader("content-Type", "text/plain; charset=utf-8"); 
    // 사용자의 요청에 대한 응답으로 문자열은 보낸다.
    res.end("안녕하세요. MEVN 프로젝트입니다.");
})

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});