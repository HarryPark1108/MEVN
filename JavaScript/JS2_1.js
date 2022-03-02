// 2.1.1 scope & hoisting

function b() {
  var i = 3;
  for (var i = 0; i < 10; i++) {    
  }
  return i;
}
console.log(b());

function c() {
  for (var i = 0; i < 10; i++) {    
  }
  return i;
}
console.log(c());

function d() {
  for (let i = 0; i < 10; i++) {    
  }
  // return i; // error!!
}
console.log(d());


// 2.1.2 const, let hoisting

let a = 1;
if (true) {
  console.log(a);
  // let a = 2; //  error
}


