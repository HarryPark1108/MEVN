// 2.4.1 find, findIndex

const condition = e => e.height >= 180;
const friends = [
  { "name": "Park", "height": 173 },
  { "name": "Yeon", "height": 175 },
  { "name": "Yoon", "height": 180 },
  { "name": "Choi", "height": 190 }
]

const taller = friends.find(condition);
console.log(taller)

const tallerIndex = friends.findIndex(condition)
console.log(tallerIndex)


// 2.4.2 includes

const a = [1, 2, 3, 4, 5];
console.log(a.includes(3));

const b = [1, 2, 3, 4, 5];
const ret = b.findIndex(e => e == 3);
console.log(ret);