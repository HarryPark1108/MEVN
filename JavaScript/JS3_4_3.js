// 3.4.3 커링 (currying)
// 어떤 함수의 예상되는 여러 개의 매개변수보다 적은 수의 매개변수를 받아서
// 매개변수가 완젆히 채워지지 않은 함수가 실행되지 않고 넘겨지다가 모든
// 매개변수가 채워지면 그때서야 실행하는 기법

// ramda를 이용한 예
// R.add의 경우 처음에 매개변수 1을 넣고 나중에 2를 넣어 매개변수가 완성되었을 때 실행된다.
const R = require("ramda");
const a = R.add(1);
const b = a(2);
console.log(b);

const addFourNumbers = (a, b, c, d) => a + b+ c+ d;
const curriedAddFourNumbers = R.curry(addFourNumbers);
const g = f(3);
console.log(g(4));

const curry = fn => a => b => fn(a, b);
/* 위 코드는 아래와 같음
var curry = function (fn)) {
	return function(a){
		return function(b) {
			return fn(a, b)
		}
	}
}
*/
const f1 = curry((a, b) => a. b);
const f2 = f1 (1);
const ret = f2(2);
console.log(ret);