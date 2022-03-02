// 2.2.1 arrow function

function a() {
  return 1;
}

const a_ES6 = () => 1;

console.log(a());     // 1
console.log(a_ES6()); // 1

const b = () => {
  // more code...
  return 1; 
} 
console.log(b())


// 2.2.2 basic parameter

const c = (d = 2) => {
  return d;
}
console.log(c()); // 2

function arrow() {
  setTimeout(() => {
    console.log(this); // arrow {}
  }, 1000)
}
function not_arrow() {
  setTimeout(function() {
    console.log(this) // Window
  }, 1000)
}
const p1 = new not_arrow();
const p2 = new arrow();









