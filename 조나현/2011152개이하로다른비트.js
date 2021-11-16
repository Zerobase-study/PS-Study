function solution(numbers) {
    const answer = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let temp = [...numbers[i].toString(2)];
      if (temp[temp.length - 1] == 0) temp[temp.length - 1] = 1;
      else if (temp.lastIndexOf('0') !== -1) {
        let lastIndex = temp.lastIndexOf('0');
        temp[lastIndex] = '1';
        temp[lastIndex + 1] = '0';
      } else {
        temp[0] = '0';
        temp.unshift('1');
      }
  
      answer.push(parseInt(temp.join(''), 2));
    }
    return answer;
  }