const solution = (str1, str2) => {
  const getMultiSet = (str) => {
    const multiSet = {};
    [...str].forEach((char, i) => {
      if (str[i + 1] && !/[^a-zA-Z]/g.test(char + str[i + 1])) {
        const elem = (char + str[i + 1]).toUpperCase();
        multiSet[elem] = multiSet[elem] ? multiSet[elem] + 1 : 1;
      }
    });

    return multiSet;
  };

  const getUnion = (set1, set2) => {
    const union = {};
    [...Object.keys(set1), ...Object.keys(set2)].forEach((elem) => {
      union[elem] = union[elem]
        ? Math.max(union[elem], set2[elem])
        : set1[elem] || set2[elem];
    });
    return union;
  };

  const getIntersection = (set1, set2) => {
    const intersection = {};
    [...Object.keys(set1), ...Object.keys(set2)].forEach((elem) => {
      if (set1[elem] && set2[elem])
        intersection[elem] = Math.min(set1[elem], set2[elem]);
    });
    return intersection;
  };

  const getLen = (set) => {
    return Object.values(set).reduce((acc, cnt) => {
      return acc + cnt;
    }, 0);
  };

  const multiSet1 = getMultiSet(str1);
  const multiSet2 = getMultiSet(str2);

  const union = getUnion(multiSet1, multiSet2);
  const intersection = getIntersection(multiSet1, multiSet2);

  if (getLen(union))
    return Math.floor((getLen(intersection) / getLen(union)) * 65536);
  return 65536;
};
