const getArray = str => {
    const pattern = /[A-Z]/;
    const arr = [];
    for (let i = 1; i < str.length; i++) {
      if (pattern.test(str[i - 1]) && pattern.test(str[i])) arr.push(str[i - 1] + str[i]);
    }
  
    return arr;
  };
  
  const getMap = array => array.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());
  
  const getSize = map => [...map.values(), 0].reduce((acc, cur) => (cur > 0 ? ++acc : acc));
  
  const solution = (str1, str2) => {
    // 전처리
    // 1. 대문자로 변환
    const [s1, s2] = [str1.toUpperCase(), str2.toUpperCase()];
    // 2. 2개씩 문자열 자른 뒤 배열로 반환(특수문자 제외)
    const [arr1, arr2] = [getArray(s1), getArray(s2)];
    // 3. Map에 저장, 개수에 맞춰 value 조정
    const [map1, map2] = [getMap(arr1), getMap(arr2)];
  
    // main
    // 1. 교집합 크기 구하기
    // map을 순회하며 해당 문자가 둘다 있을경우, 그중 작은 값을 빼주기
    // 뺀 값 cnt에 저장
    let intersection = 0;
    for (const char of map1.keys()) {
      if (map2.get(char) > 0 && map1.get(char) > 0) {
        const min = Math.min(map1.get(char), map2.get(char));
        map1.set(char, map1.get(char) - min);
        map2.set(char, map2.get(char) - min);
        intersection += min;
      }
    }
  
    // 2. 합집합 크기 구하기
    const union = getSize(map1) + getSize(map2);
  
    intersection = intersection || 1;
  
    return Math.floor((intersection / (union + intersection)) * 65536);
  };
  