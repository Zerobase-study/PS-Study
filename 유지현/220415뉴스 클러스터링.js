function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  
  const regExp = /[A-Za-z]+/g;
  for (let i = 0; i < str1.length - 1; i++) {
      if (str1[i].match(regExp) && str1[i + 1].match(regExp)) 
          arr1.push(str1[i].toLowerCase() + str1[i + 1].toLowerCase());
  }
      
  for (let i = 0; i < str2.length - 1; i++) {
      if (str2[i].match(regExp) && str2[i + 1].match(regExp))
          arr2.push(str2[i].toLowerCase() + str2[i + 1].toLowerCase());
  }
  
  if (!arr1.length && !arr2.length) return 65536;
  
  arr1.sort();
  arr2.sort();
  
  let intersectLen = 0;
  let unionLen = 0;
  const intersect = [...new Set(arr1.filter(it => arr2.includes(it)))];
  const union = [...new Set([...arr1, ...arr2])];
  
  intersect.forEach(v => {
      let arr1_Index = arr1.indexOf(v);
      let arr2_Index = arr2.indexOf(v);
      let arr1_LastIndex = arr1.lastIndexOf(v);
      let arr2_LastIndex = arr2.lastIndexOf(v);
      
      if (arr1_Index !== arr1_LastIndex || arr2_Index !== arr2_LastIndex) {
          (arr1_LastIndex - arr1_Index + 1 >= arr2_LastIndex - arr2_Index + 1) ?
              intersectLen += arr2_LastIndex - arr2_Index :
              intersectLen += arr1_LastIndex - arr1_Index;        
      }
  });
    
  union.forEach(v => {
      let arr1_Index = arr1.indexOf(v);
      let arr2_Index = arr2.indexOf(v);
      let arr1_LastIndex = arr1.lastIndexOf(v);
      let arr2_LastIndex = arr2.lastIndexOf(v);
      
      if (arr1_Index !== arr1_LastIndex || arr2_Index !== arr2_LastIndex) {
          (arr1_LastIndex - arr1_Index + 1 >= arr2_LastIndex - arr2_Index + 1) ?
              unionLen += arr1_LastIndex - arr1_Index :
              unionLen += arr2_LastIndex - arr2_Index;
      }
  });
     
  
  intersectLen += intersect.length; 
  unionLen += union.length;
  
  return Math.floor(intersectLen / unionLen * 65536);
}