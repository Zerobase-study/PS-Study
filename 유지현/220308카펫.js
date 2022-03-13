function solution(brown, yellow) {
  let sum = brown + yellow;
  
  for (let width = 3; width <= sum; width++) {
      let height = sum / width;
      if (sum % width === 0 && width >= height) {
          if (yellow === (width - 2) * (height - 2)) return [width, height];
      }
  }
}