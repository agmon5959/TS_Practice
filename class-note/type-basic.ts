// 타입스크립트의 기본 타입

// ts 문자열 , 숫자, 배열

// 문자열
let str_ts: string = "hello";
// 숫자
let num_ts: number = 123;
// 배열
let numArr_ts: Array<Number> = [1, 2, 3];
let strArr_ts: Array<String> = ['1', '2', '3'];
// 배열 좀 더 편하게 선언
let arr1: Number[] = [1, 2, 3, 4, 5];
let arr2: String[] = ['1', '2', '3'];

// 튜플 , 객체 , 진위값

// 튜플 : 모든 배열의 인덱스에 타입이 정의되어있는 것
let tuple: [Number, String] = [123, "string"];

// 객체
let obj: object = {};

// 객체 내 타입을 정의하는 법
let typeObj: { name: String, age: Number } = {
    name: 'Myname',
    age: 27,
};

// 진위값
let toggle: boolean = true;

