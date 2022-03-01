// 2.8.2 iterator

const a = ["apple", "strawberry", "grape", "pear"];
const it = a[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());