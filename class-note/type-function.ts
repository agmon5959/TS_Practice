// 타입스크립트의 함수 타입

// 함수 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 위 2개 조합
function getSum(a: number, b: number, c?, d?): number {
    return a + b;
}

// 파라미터를 제한하는 특성
getSum(1, 2, 3, 4); // 2개의 인수가 필요한데 4개를 가져왔습니다. < error!
getSum(1); // 2개의 인수가 필요한데 1개를 가져왔습니다. < error!
// 함수가 받는 파라미터의 수와 호출시 넘겨주는 파라미터의 수가 일치하지 않을 때 해당 오류가 나온다.

// 옵셔널 파라미터 ( 선택적 파라미터 )
// 파라미터의 수가 고정적이지 않을 때 사용한다. 있어도 되고 없어도 된다 (?)
// 필요에 따라서
function log(a: string, b: string, c?: string) {
    console.log(a, b);
}
log('first'); // 2-3개의 인자가 필요한데, 1개를 가져왔습니다 < error!

// 3번째 인자는 옵셔널 파라미터이기 때문에 오류가 나오지 않는다.
log('first', 'second');
log('first', 'second', 'optional')


