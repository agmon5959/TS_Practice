// 이넘은 특정 값들의 집합.
// dropDown , 정해져있는 목록들의 값을 정할 때 사용된다.
// 숫자형 , 문자열 등 여러가지 형태의 이넘이 존재한다.
// 또한 이넘은 디폴트로 0으로 시작하여 1씩 증가한 값을 가지게 된다.

//? 숫자형 이넘
//? 별도의 처리를 해주지 않으면 디폴트는 숫자형 이넘이 된다.
enum Shoes {
    nike,
    adidas
}

let myShoes = Shoes.adidas; // 콘솔 찍으면 1 출력

//? 문자형 이넘
enum Shoes2 {
    nike = '나이키',
    adidas = '아디다스'
}

let myShoes2 = Shoes2.adidas; // 콘솔 찍으면 아디다스 출력

//? 이넘 활용
