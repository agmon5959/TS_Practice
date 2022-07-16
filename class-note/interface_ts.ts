interface User {
    name: string;
    age: number;
    country: string;
}

// 변수에 활용한 인터페이스
const donghun: User = {
    name: "donghun",
    age: 27,
    country: 'Republic Of Korea',
};

// 함수에 사용한 인터페이스
function getUser(user: User) {
    console.log(user);
}

getUser(donghun);

// 함수의 스펙(구조)에 사용한 인터페이스
interface sumFunc {
    (a: number, b: number): number
}

// let sum2: sumFunc;
let sum2 = function <T>(a: T, b: T): T {
    return a + b;
}

// 인덱싱
interface StringArray {
    [i: number]: string
}

let tsArr: StringArray = ['1', '2', '3'];
tsArr[3] = '3';

// todo 
// !인터페이스 딕셔너리 방법 (현업에서 가장 많이 사용되는 방식)
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let tsObj = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
Object.keys(tsObj).forEach(function () {

})



// !인터페이스 확장 OOP(객체지향프로그래밍) 및 자바스크립트 프로토타입같은 느낌임
interface Person {
    name: string;
    age: number;
}

// ! extends를 통해 상속을 받았음.
interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}

let dong: Developer = {
    name: 'kim',
    age: 1,
    language: 'JS',
}

