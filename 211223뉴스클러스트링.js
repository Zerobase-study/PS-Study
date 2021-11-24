function solution(str1, str2) {
  let count = 0;
  // str1, str2 모두 대문자로 변경
  const changeStr1 = str1.toUpperCase();
  const changeStr2 = str2.toUpperCase();

  const arr1 = [];
  const arr2 = [];

  // 대문자로 변경한 문자열을 2글자씩 잘라서 추출.
  for (let i = 0; i < changeStr1.length - 1; i++) {
    const temp = changeStr1.slice(i, i + 2);
    // 대문자로 이루어졌을 경우에만 배열에 push
    if (temp.search(/[^A-Z]/g) < 0) {
      arr1.push(temp);
    }
  }

  for (let i = 0; i < changeStr2.length - 1; i++) {
    const temp = changeStr2.slice(i, i + 2);
    if (temp.search(/[^A-Z]/g) < 0) {
      arr2.push(temp);
    }
  }

  // 교집합 구하기 -> 비교해서 같으면 count++
  for (let i = 0; i < arr1.length; i++) {
    const temp = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      if (temp === arr2[j]) {
        count++;
        arr2[j] = "";
        break;
      }
    }
  }
  // 합집합 구하기 (arr1 + arr2 - 교집합 수)
  const union = arr1.length + arr2.length - count;

  return union === count ? 65536 : Math.floor((count / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
