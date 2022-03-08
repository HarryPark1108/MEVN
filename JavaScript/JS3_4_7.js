// 3.4.7 모나드

// 안전한 함수합성, Promise를 이용한 예 (1)
const g = JSON.parse;
const f = k => k.temp;
const fg = x => new Promise((resolve, reject) => resolve(x)).then(g).then(f);
const log = x => console.log(x);

fg('{ "temp": 36.5 }').catch(_ => 'JSON PARSE is not working').then(log)

// 안전한 함수합성, Promise를 이용한 예 (2)
const log2 = console.log;
const users = [{ name: "큰돌"}, { name: "제호"}, { name: "우람"}, { name: "다빈"}];
const getUserByName = (name) => users.find(u => u.name === name) || Promise.reject("객체에 없습니다.");
const g2 = getUserByName;
const f2 = ({name}) => `${name} 이(가) 춤을 춥니다.`
const fg2 = x => new Promise((resolve, reject) => resolve(x)).then(g2).then(f2);
fg2("큰돌1").catch(_ => _).then(log);
fg2("큰돌").catch(_ => _).then(log);