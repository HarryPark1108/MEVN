// 2.5 Template String

const name = "BigStone";
const s = `Honestly, ${name} is stupid.`;console.log(s)

const person = {
  "age": 21,
  "name": "BigStone"
}
const tag1 = "<p>My age is " + person.age + ".</p>";
const tag2 = "<p>" + person.name + ", welcoem!</p>";
console.log(tag1, tag2)

const tag3 = `<p>My age is ${person.age}.</p>`;
const tag4 = `<p>${person.name}, welcome!</p>`;
console.log(tag3, tag4)