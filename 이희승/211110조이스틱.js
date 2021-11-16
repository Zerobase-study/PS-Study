function solution(name) {
    const POSITION_OF_A = 65;
    const POSITION_OF_Z = 90;
    const HALF_OF_ALPHABET = (POSITION_OF_Z + POSITION_OF_A) / 2;

    // main
    // 1. 문자열 -> 아스키코드로 변환
    // 2. 해당 아스키코드 값이 A(65)에 가까운지 Z(90)에 가까운지 확인하여 남은 거리만큼 저장
    const unicodeValues = name
        .split("")
        .map((str) => str.charCodeAt(0))
        .map((num) => (num > HALF_OF_ALPHABET ? POSITION_OF_Z - num + 1 : num - POSITION_OF_A));

    return getMove(unicodeValues) + unicodeValues.reduce((acc, cur) => acc + cur);
}

// 3. 오른쪽, 왼쪽 움직임 계산
function getMove(arr) {
    let min = arr.length - 1;

    arr.forEach((val, i) => {
        let next = i + 1;
        while (next < arr.length && arr[next] === 0) {
            next += 1;
        }
        min = Math.min(min, i * 2 + arr.length - next);
    });
    return min;
}
