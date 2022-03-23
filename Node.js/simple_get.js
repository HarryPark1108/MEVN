// 4.3.2 쉽게 설정할 수 있는 라우팅
// 1) 라우팅 설정하기

const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = 3000;

app.use(logger("tiny"));
const simple_module = require("./simple_module.js")
app.get("/", simple_module.intro)
app.get("/users/:userName/books/:bookName", simple_module.handleBook)

app.listen(PORT, () => {
    console.log(`서버가 생성되었습니다. ${PORT}`);
})