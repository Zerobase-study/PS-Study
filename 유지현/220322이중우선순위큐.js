function solution(operations) {
  let queue = [];
  
  for (let operation of operations) {
      let i = operation.split(' ');
      
      if (i[0] === 'I') queue.push(+i[1]);
      else {
          if (!queue.length) continue;
          
          queue.sort((x, y) => x - y);
          if (+i[1] === 1) queue.pop();
          else queue.shift();
      }
  }
  
  if (!queue.length) return [0, 0]; 
  return [Math.max(...queue), Math.min(...queue)];
}