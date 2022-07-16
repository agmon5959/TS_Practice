//? generics 제네릭 <T>

function logText<T>(text: T): T {
    console.log(text)
    return text;
}

logText(123); // 이렇게 타입 없이 그냥 넘겨주면 T는 자동으로 판단해서 넘겨줌. 지금의 경우는 number
logText<string>('TEXT'); // 이렇게 해주면 넘어갈 때 문자열로 넘어감.

//? 인터페이스에 제네릭을 선언할 수 있는 방법 (이걸 제일 많이 사용할 것 같네)
interface DropDownItem<T> {
    // value: string;
    value: T;
    selected: boolean;
}

const variable: DropDownItem<string> = { value: '123', selected: false }

//? 제네릭의 타입 제한
// 제네릭인데, 배열을 받고싶다. 이런식으로 표현이 가능하다.
function logText2<T>(text: T[]): T[] {
    console.log(text)
    return text;
}

let a = logText2<string>(['a', 'b']);

//? 정의되어있는 타입 이용하기

function logText3<T extends DropDownItem<string>>(text: T[]): T[] {
    console.log(text)
    return text;
}

let a2 = logText3<string>(['a', 'b']);

//? keyof 예약어를 통한 타입 제한
//? keyof 란 인터페이스에 선언된 타입들의 키 값 중에서만 사용이 가능하다. 라능 뜻이다!
function logText4<T extends keyof DropDownItem<string>>(text: T[]): T[] {
    console.log(text)
    return text;
}

logText4(["value"])