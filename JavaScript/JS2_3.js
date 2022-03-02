// 2.3.1 forEach, map, filter, reduce

const func1 = (e, index) => {
  console.log(`index ${index} : element ${e}`);
};
const func2 = (e, index) => e * 2;
const func3 = (prev, curr, index) => prev + curr;
const func4 = e => e % 2;

const a = [1, 2, 3, 4, 5].forEach(func1);
console.log(a);

const b = [1, 2, 3, 4, 5].map(func2);
console.log(b);

const c = [1, 2, 3, 4, 5].reduce(func3);
console.log(c);

const d = [1, 2, 3, 4, 5].filter(e => e % 2)
console.log(d);

// 2.3.2 every, some
const numbers = [1, 3, 5, 4];
const isAllOdd = numbers.every(e => e % 2);
const isSomeOdd = numbers.some(e => e % 2);
console.log(isAllOdd, isSomeOdd)