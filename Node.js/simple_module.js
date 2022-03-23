// 4.3.2 쉽게 설정할 수 있는 라우팅
// 2) 컨트롤러 설정하기

module.exports.handleBook = (req, res) => {
    console.log(req.params);
    res.send(req.params);
}

module.exports.intro = (req, res) => {
    res.send(`우리의 Express로 만든 서버입니다!`)
}