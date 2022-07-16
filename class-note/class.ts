//? 클래스 문법
//? 타입스크립트에서는 일반 자바스크립트와는 다르게 constructor 위에 사용할 변수들을 선언해야하며,
//? private , public 예약어를 사용하여 변수의 유효범위를 지정해줄 수 있다.

class Person{
    private name: string;
    public age: number;
    readonly any: string; // 읽기전용
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
}