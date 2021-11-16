function solution(numbers) {
  const binMin = (num) => {
    const binArr = num.toString(2).split("");

    if (binArr.every((bin) => bin === "1")) {
      binArr.unshift("0");
    }

    for (let i = binArr.length - 1; i >= 0; i--) {
      if (binArr[i] === "0") {
        binArr[i] = "1";
        binArr[i + 1] = "0";
        break;
      }
    }

    const binStr = binArr.join("");

    return parseInt(binStr, 2);
  };

  numbers.forEach((num, i) => {
    numbers[i] = num % 2 === 0 ? numbers[i] + 1 : binMin(num);
  });
  return numbers;
}
