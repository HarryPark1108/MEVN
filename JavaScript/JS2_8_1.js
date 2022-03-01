// 2.8.1 itterable

const a = ["apple", "strawberry", "grape", "pear"];

console.log(Symbol.iterator in a);
for(const b of a) console.log(b)

for(let i = 0; i < a.length; i++) console.log(a[i]) // same

let mp = new Map();
mp.set("apple", "strawberry");
mp.set("grape", "pear");
console.log(mp.get("apple"))
for(const a of mp) console.log(a)
console.log(Symbol.iterator in mp)