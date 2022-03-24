function solution(operations) {
  let stack = [];
  
  for (let operation of operations) {
      let i = operation.split(' ');
      
      if (i[0] === 'I') stack.push(+i[1]);
      else {
          if (!stack.length) continue;
          
          stack.sort((x, y) => x - y);
          if (+i[1] === 1) stack.pop();
          else stack.shift();
      }
  }
  
  if (!stack.length) return [0, 0]; 
  return [Math.max(...stack), Math.min(...stack)];
}