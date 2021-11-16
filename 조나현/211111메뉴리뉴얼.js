function solution(orders, course) {
    function getCombination(arr, selectNum) {
      let answer = [];
      if (selectNum === 1) return arr.map(keysue => [keysue]);
  
      arr.forEach((arrkeysue, index, origin) => {
        let rest = origin.slice(index + 1);
        let combination = getCombination(rest, selectNum - 1);
        let attach = combination.map(comkeysue => [arrkeysue, ...comkeysue]);
        answer.push(...attach);
      });
  
      return answer;
    }
  
    function getMaxMenu(menu) {
      let obj = {};
      let keys;
      let result = [];
      let max = -Infinity;
      for (let i = 0; i < menu.length; i++) {
        keys = menu[i].join('');
        if (!obj[`${keys}`]) {
          obj[`${keys}`] = 1;
        } else {
          obj[`${keys}`] = +obj[`${keys}`] + 1;
        }
      }
      for (let i in obj) {
        if (obj[i] > max) {
          max = obj[i];
          result = [];
          result.push(i);
        } else if (obj[i] == max) {
          result.push(i);
        }
      }
      return max === 1 ? false : result;
    }
  
    let combination;
    let answer = [];
    let maxMenu;
  
    for (let i = 0; i < course.length; i++) {
      combination = [];
      for (let j = 0; j < orders.length; j++) {
        combination.push(
          ...getCombination(orders[j].split(''), course[i]).map(val => {
            let temp = val.sort();
            return temp;
          })
        );
      }
      maxMenu = getMaxMenu(combination);
      if (maxMenu) {
        answer.push(...maxMenu);
      }
    }
  
    return answer.sort();
  }
  
  console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
  