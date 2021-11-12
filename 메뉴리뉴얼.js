function solution(orders, courses) {
  const getCombination = function (arr, num) {
    const combinations = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((v, index, arr) => {
      const current = v;
      const next = getCombination(arr.slice(index + 1), num - 1);
      const combination = next.map((v) => [current, ...v]);
      combinations.push(...combination);
    });

    return combinations;
  };

  let menu = [];

  courses.forEach((course) => {
    const orderDict = {};
    for (let order of orders) {
      const orderArr = order.split("");
      const combinationsArr = getCombination(orderArr, course);
      const combinations = combinationsArr.map((combination) => {
        combination.sort();
        return combination.join("");
      });

      const combinationDict = {};
      for (const value of combinations) {
        combinationDict[value] = combinationDict[value]
          ? combinationDict[value] + 1
          : 1;
      }

      for (const key in combinationDict) {
        orderDict[key] = orderDict[key]
          ? orderDict[key] + combinationDict[key]
          : combinationDict[key];
      }
    }

    let popular = 0;
    for (const order in orderDict) {
      popular = orderDict[order] > popular ? orderDict[order] : popular;
    }

    for (const order in orderDict) {
      if (popular > 1 && orderDict[order] === popular) menu.push(order);
    }
  });

  menu.sort();

  return menu;
}
