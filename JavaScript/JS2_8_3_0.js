// 2.8.3 generator

const log = console.log;

function *gen() {
    yield 10;
    if (false) yield 20
    yield 30;
    return 90;
    yield 30;
}

let iter = gen();
console.log(iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

console.log([...gen()]);

const add = a => a + 10;
const a = [1, 2, 3];
const ret = a.map(add);
console.log(ret)

function* map2(f, list) { // map을 generator 함수로 만들어 봄...
    for(const a of list) {
        yield f(a)
    }
}

log(map2(add, a));
log([...map2(add, a)])