//! 유니온 타입 | (or 연산자)
//! 인터섹션 타입 & ( and 연산자)
function testFunc(param:string|number) {
    return param + '입니다.';
}
// 유니온 타입의 장점
//! 특정 변수 및 파라미터에 한가지 이상의 타입을 사용하고 싶을 떄
//! 
let testVar: number | string | boolean;
function testFunc2(param: string | number) {
    // !타입가드
    if (typeof param === "number") {
        //! 해당 조건문 안에서의 param의 타입은 자연스럽게 number가 된다.
        //! any 타입일 때는 찾아볼 수 없었던 차이점.
    } else {
        //! 해당 조건문 안에서 param은 string
    }
    // throw new TypeError('error code ^^')
    return param + '입니다.';
}

//! 유니온 타입의 특징
interface Person2 {
    name: string;
    age: number;
}

interface Developer2 extends Person {
    name: string;
    skill: string;
}
// 파라미터로 전달한 두 개의 인터페이스가 공통적으로 가지고 있는 속성만 사용이 가능하다.
// TS 컴파일러 관점에서 어떤 값이 들어올 지 모르기 때문이다.
function askSomeone(someOne : Person2 | Developer2) {
    someOne.age;
}

// todo ------------------- intersection

// 위 유니온타입(|)으로 했을 때는 두 개의 공통적인 것만 사용이 가능헀다.
// 하지만 인터섹션(&)으로 사용했을 경우에는 두 개의 인터페이스가 가지고 있는 속성들을 모두 포함한 파라미터가 someOne이라는 것.
function askSomeone2(someOne: Person2 & Developer2) {
    someOne.age;
    someOne.name;
    someOne.skill;
}

//TODO 실무에서는 유니온이 더 많이 사용된다.
//! 인터섹션과 유니온의 차이점
// 유니온
askSomeone({ name: '1', age: 2}); 
askSomeone({ name: '1', skill: '3' }); 
askSomeone({ name: '1', age: 2, skill: '3' }); 
// 인터섹션
askSomeone2({ name: '1', age: 2, skill: '3' }); // 이렇게 3가지의 속성 모두 줘야함.


