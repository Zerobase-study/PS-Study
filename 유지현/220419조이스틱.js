function solution(name) {
  let answer = 0;
  let length = name.length;
  let move = length - 1;
  let index;
  
  for(let i = 0; i < length; i++) {
      let ascii = name[i].charCodeAt(0);
      if (ascii < 79) answer += ascii - 65;
      else answer += 91 - ascii;
      
      index = i + 1;
      
      while(index < length && name[index] === 'A') index++;
      
      move = Math.min(move, i * 2 + length - index); 
      move = Math.min(move, (length - index) * 2 + i);
  }
  
  return answer + move;
}