// https://programmers.co.kr/learn/courses/30/lessons/72412
// 3중 for문으로 시도 -> 효율성 탈락
function solution(info, query) {
  const answer = [];
  const devInfo = [];
  // 배열 형태로 info를 저장
  info.forEach((el, i=0) => {
      const man = el.split(' ');
      devInfo[i++] = [man[0],man[1], man[2], man[3], man[4]];
  });

  query.forEach((el, i=0) => {
      // and를 제외한 조건을 입력, -는 모두 true로 변환
      const find = el.split(' ').filter(x => x !== 'and').map(x => {
          if(x === '-') return true;
          return x;
      });
      // find에 현재 요구조건이 들어있다
      // answer에 전체 지원자 push
      answer.push(devInfo.length);
      // 조건에 맞지 않으면 뺸다
      for(let j = 0; j < devInfo.length; j++){
        let sw = false;
        devInfo[j].forEach((el, k = 0) => {
          if(k === 4){
            if(Number(find[k]) > Number(el))sw = true;
            if(sw === true){
              answer[i]--;
              sw = false;
            }
          }else if(find[k] !== true && find[k] !== el){
            sw = true;
          }

          k++;
        });
      }
  })

  return answer;
}
