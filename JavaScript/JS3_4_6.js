// 3.4.6 Point-free, 무인수 프로그래밍

const { map, filter, pipe, values, go} = require('fxjs');
const L = require('fxjs');
const friends = [
    {
        "name": "Yeon",
        "do": "Soldier"
    },
    {
        "name": "Park",
        "do": "CEO"
    },
    {
        "name": "Yoon",
        "do": "Developer"
    },
    {
        "name": "Choi",
        "do": "Developer"
    }
];
const t = friends.map(e => e.do === "Developer" ? e : null).filter(e => e);
const prop = key => obj => obj[key];
const propEqual = value => key => obj => prop(key)(obj) === value;
console.log(t);
const t2 = go(
    friends,
    L.filter(propEqual("Developer")("do")),
    L.takeAll
);
console.log(t2);