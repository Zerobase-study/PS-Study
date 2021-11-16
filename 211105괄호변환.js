function solution(p) {
  if (p === "") return p;

  const answer = isDivided(p);

  return answer;
}

function isBalanced(str) {
  const stack = [];

  str.filter((elem) => {
    if (stack[stack.length - 1] === "(" && elem === ")") {
      stack.pop();
    } else {
      stack.push(elem);
    }
  });

  return stack.length === 0 ? true : false;
}

function reversed(str) {
  let result = "";

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === "(") result += ")";
    else result += "(";
  }

  return result;
}

function isDivided(p) {
  const result = [];
  const stack = [];
  let index = 0;
  let left = 0;
  let right = 0;

  while (index < p.length) {
    if (p[index] === "(") left++;
    else right++;
    stack.push(p[index++]);

    if (left === right) {
      if (isBalanced(stack)) {
        result.push(stack.join(""));
        result.push(isDivided(p.substr(index)));
        break;
      } else {
        result.push("(");
        result.push(isDivided(p.substr(index)));
        result.push(")");
        result.push(reversed(stack.join("")));
        break;
      }
    }
  }
  return result.join("");
}
