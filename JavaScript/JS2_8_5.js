// 2.8.5 제너레이터를 이용한 지연평가

const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const ret = _.go(
    a,
    _.map(a => a),
    _.filter(a => a % 2),
    _.take(2)
);
console.log(ret)