function solution(str1, str2) {
  const getMultiSet = (str) => {
    let elements = [];
    str = str.toUpperCase();
    for (let i = 0; i < str.length - 1; i++) {
      elements.push(str[i] + str[i + 1]);
    }
    return elements.filter((v) => !/[^A-Za-z]/.test(v));
  };

  const str1MultiSet = getMultiSet(str1);
  const str2MultiSet = getMultiSet(str2);

  const getIntersection = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr1[i] = true;
          arr2[j] = true;
          continue;
        }
      }
    }
    return arr1.filter((v) => v === true).length;
  };

  const interserction = getIntersection(str1MultiSet, str2MultiSet);
  const union = str1MultiSet.length + str2MultiSet.length - interserction;

  return interserction === 0 && union === 0
    ? 65536
    : Math.floor((interserction / union) * 65536);
}
