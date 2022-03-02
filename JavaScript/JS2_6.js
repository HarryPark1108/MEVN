// 2.6.2 spread

// 1) rest parameter
const a = (b, ...rest) => {
  console.log(rest);
};
a(1, 2, 3);

const b = [1, 2, 3];
const a2 = (a, b, c) => console.log(a, b, c);
a2(...b);

const a3 = [1, 2, 3, 4, 5];
const [head, ...rest] = a3;
console.log(head, rest);

// 2) union array
const aa = [1, 2, 3];
const bb = [4, 5, 6];
const cc = [...aa, ...bb];
console.log(cc)

// 3) max function' parameter
const k = [1, 2, 3, 4];
console.log(Math.max(...k));

// 4) copy object
const obj1 = { "name": "Joo", "age": 27 };
const obj2 = { ...obj1, "key": 1};
console.log(obj2);


// 2.6.3 destructuring assignment

// 1) swap
let m = 1;
let n = 2;
[m,n] = [n,m];
console.log(m, n);

// 2) element in array
const arr = () => [1, 2, 3, 4];
const [arr1, arr2, arr3] = arr();
console.log(arr1, arr2, arr3);

// 3) value in object
const obj = () => {
  return { "name": "Choi", "job": "marketer" };
};
const { name } = obj();
console.log(name);

const arr4 = [1, 2];
const [arr5, arr6] = arr4;
console.log(arr5, arr6);

const arr7 = { "name2": "BigStone", "sing2": "yesterday"};
const {name2, sing2} = arr7;
console.log(name2, sing2);

