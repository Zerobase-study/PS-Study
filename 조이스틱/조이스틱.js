function solution(name) {
  let answer = 0;

  let move = 0;
  for(let i = 0; i < name.length; i++){
      // A에서 이동할때 최소 거리
      let zeroDist = name.charCodeAt(i)-65;
      zeroDist = zeroDist <= 13 ? zeroDist : 26 - zeroDist;

      // console.log(`zeroDist = ${zeroDist}`);

      // 이동한곳에서 이동할 때 최소 거리
      let moveDist = Math.abs(name.charCodeAt(i) - name.charCodeAt(i+1));
      moveDist = moveDist <= 13 ? moveDist : 26 - moveDist;

      moveDist = i === 0 || i === name.length-1 ? 300 : moveDist;
      // console.log(`moveDist = ${moveDist}`);

      // 두 수를 비교하여 작은 값 삽입 zeroDist는 1추가하여 부여
      move += zeroDist < moveDist ? zeroDist+1 : moveDist;
      // console.log(`move = ${move}`);
  }

  return move;
}