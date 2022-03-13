function solution(numbers) {
  let answer = 0;
  
  // 순열
  let arr = numbers.split('');
  let result = [];

  function permutation(arr, n, bucket) {
    if (n === 0) {
      result.push(parseInt(bucket.join('')));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let rest = arr.slice();
      let pick = rest.splice(i, 1);
      permutation(rest, n - 1, bucket.concat(pick));
    }
      
    return result;
  }

  for (let i = 0; i < numbers.length; i++) {
    permutation(arr, i + 1, []);
  }
  
  let num = [...new Set(result)];
  
  // 소수
  function isPrime(num) {
    if(num === 2) return true;
    if(num === 0 || num === 1) return false;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) return false;
    }

    return true; 
  }
  
  for (let i = 0; i < num.length; i++) {
    if (isPrime(num[i])) answer++;
  }
  
  return answer;
}