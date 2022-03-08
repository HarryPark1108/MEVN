// 3.4.4 함수 합성
const R = require("ramda");
const f_1 = R.map(a => a + 1);
const f_2 = R.filter(a => a % 2);
const ret = f_2(f_1([1, 2, 3, 4]));
console.log(ret);

// 1) ramda를 이용한 함수 합성 - compose
const ret1 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4); // 뒤에서부터 적용됨
console.log(ret1)

// 2) ramda를 이용한 함수 합성 - pipe
const f2 = R.pipe(R.negate, R.inc);
console.log(f2(3)); // 앞에서부터 적용됨

// 3) fx.js를 이용한 함수 합성 = pipe
const { map, filter, pipe} = require("fxjs");
const f_pipe = pipe (
	map (a => a+1),
	filter (a => a%2)
)
const _ret = f_pipe([1, 2, 3, 4])
console.log(_ret);