function solution(str1, str2) {
  let count = 0;

  function makeArr(text) {
    const newArr = [];

    for (let i = 0; i < text.length - 1; i++) {
      const regExp = /[^A-Z]/g;
      const temp = text.slice(i, i + 2);

      // 영문자인 경우에만 배열에 담아주기
      if (!regExp.test(temp)) newArr.push(temp);
    }

    return newArr;
  }

  const toUpperStr1 = makeArr(str1.toUpperCase());
  const toUpperStr2 = makeArr(str2.toUpperCase());

  // 교집합 구하기
  for (let i = 0; i < toUpperStr1.length; i++) {
    for (let j = 0; j < toUpperStr2.length; j++) {
      if (toUpperStr1[i] === toUpperStr2[j]) {
        count++;
        toUpperStr2[j] = 0;
        break;
      }
    }
  }

  // 합집합 (newStr1 + newStr2 - 교집합(count))
  const union = toUpperStr1.length + toUpperStr2.length - count;

  return count === union ? 65536 : Math.floor((count / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
