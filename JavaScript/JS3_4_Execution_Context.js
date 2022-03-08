// Execution Context

// 1. this의 결정
// 1-1) 화살표구문에서의 this
const a = () => {
    console.log(this);
};
a();
function b() {
    console.log(this);
}
b()

// 1-2) setTimeout
function Person() {
    this.age = 0;
    setTimeout(() => {
        this.age++;
        console.log(this, this.age);
    }, 1000)
}
var p = new Person()

function Person2() {
    this.age = 0;
    setTimeout(function() {
        this.age++;
        console.log(this, this.age)
    }, 1000)
}
var p2 = new Person2()

function add(c, d, fn) {
    return fn(c + d);
}
let user = {
    a: 2,
    b: 3,
    add() {
        console.log(this)
        add(this.a, this.b, function(total) {
            console.log(this)
        })
    }
}
user.add()

// 1-3) 생성자함수에서의 this
function Person3() {
    this.value = "kundol",
    this.printThis = function() {
        console.log(this)
    }
}
var p = new Person3();
var print = p.printThis;
p.printThis()
print()

// 1-4) 올바른 생성자함수
function Person4() {
    let age = 0;
    function up() {
        return ++age;
    }
    function down() {
        return --age
    }
    return Object.freeze({
        up, down
    })
}
const a4 = new Person4()
const ret4 = a4.up();
console.log(ret4)
const ret42 = a4.up();
console.log(ret42)

// 1-5) 자바스크립트의 global 객체


// 1-6) 객체 리터럴로 만든 객체에서의 this
var obj = {
    value: "hi",
    printThis: function() {
        console.log(this)
    }
};
var print = obj.printThis
obj.printThis()
print()

// 1-7) call과 apply, bind로 정해지는 this
function a5(c, d) {
    const b = [this.name, "이(가)", this.adjective, "춤을 춥니다.", c, d].join(" ");
    return b;
}
const 큰돌 = {
    name: "큰돌", adjective: "아주 이쁘게"
};
console.log(a5.apply(큰돌, ["하지만 혼자", "외롭게 말이죠."]))
console.log(a5.call(큰돌, "하지만 혼자", "외롭게 말이죠."))
