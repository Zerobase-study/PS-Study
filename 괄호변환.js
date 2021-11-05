let recursive = function (p){
  // 재귀 종료 조건
  if(p === '') return '';
  // 사용할 함수를 초기화
  let left = 0, right = 0, i = 0;
  let stack = [];
  let fix = '';
  // 균형이 맞을때까지 반복
  while(1){
    // now는 현재 괄호
    let now = p[i++]; 
    // 여는 괄호면 left 증가 닫는 괄호면 right증가 
    now === '(' ? left++ : right++;
    stack.push(now);
    // 균형잡히면 반복문 탈출
    if(left === right) break;
  }

  // 균형이 깨졌다면 현재 문자를 놔두고 뒤쪽으로 진행 (재귀)
  if(stack[0] === ')'){
    fix += `(${recursive(p.slice(i))})`;
    // 방향 전환
    for(let j = 1; j < stack.length-1; j++){
      stack[j] === '(' ? fix += ')' : fix += '(';
    }
    return fix;
  }

  // 균형이 맞다면 stack을 문자열로 만들고 나머지를 재귀
  fix += stack.join('') + recursive(p.slice(i));
  return fix;
}

function solution(p) {
  let answer = recursive(p);
  return answer;
}