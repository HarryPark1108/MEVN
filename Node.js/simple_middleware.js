// 4.3.1 쉬운 미들웨어 설정
// 1) 어떤 요청에 대해 미들웨어 설정하기

//import express from 'express'
const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {  // 이것이 하나의 미들웨어
    console.log("1 Time: ", Date.now());
    next(); // 다음 미들웨어로 로직이나 매개변수를 넘긴다.
});

app.use((req, res, next) => {  // 이것이 하나의 미들웨어
    console.log("2 Time: ", Date.now());
    next();
});

app.listen(PORT, () => {
    console.log(`서버가 생성되었습니다. ${PORT}`);
});