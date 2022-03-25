function solution(jobs) {
  // 요청 시간순으로 오름차순 정렬 => 요청시간이 같은 경우 소요시간 기준 오름차순 정렬
  let ascendingJobs = jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  // [ [ 0, 3 ], [ 1, 9 ], [ 2, 6 ] ]

  let start = ascendingJobs[0][0]; // 시작하는 시간
  let priorityQueue = [];
  let listRuntime = [];
  let runtime = 0; // 요청부터 종료까지 걸리는 시간

  while (ascendingJobs.length > 0) {
    let job = ascendingJobs[0]; // 순차적 작업순

    // 현재 작업 시작 시간 > 요청 시간 => 우선순위 Queue에 넣어줌
    if (start > job[0]) {
      priorityQueue.push(job);
      ascendingJobs.shift();
      // 현재 작업 시작 시간이 요청 시간을 지나지 않았을 경우
    } else {
      // 우선순위 Queue에 해야 할 작업이 있다면 -> 작업 소요 시간 기준 오름차순 정렬
      if (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a[1] - b[1]);
        let waitQueue = priorityQueue.shift();

        //시작시간 = 시작시간 + 작업 소요시간
        start += waitQueue[1];
        // 작업 소요 시간 = (시작시간 + 작업 소요 시간) - 요청 시점
        runtime = start - waitQueue[0];
        listRuntime.push(runtime);
        // 우선순위 Queue에 없다면 바로 작업 시작
      } else {
        start = job[0] + job[1];
        runtime = job[1];
        listRuntime.push(runtime);
        ascendingJobs.shift();
      }
    }

    // 작업 목록에 해야 할 작업이 없고, 우선순위 Queue에 작업들이 쌓여있다면 우선순위 Queue 작업 모두 처리
    if (ascendingJobs.length === 0 && priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a[1] - b[1]);
      while (priorityQueue.length > 0) {
        let waitQueue = priorityQueue.shift();
        start += waitQueue[1];
        runtime = start - waitQueue[0];
        listRuntime.push(runtime);
      }
    }
  }

  let answer = listRuntime.reduce((prev, cur) => prev + cur, 0);
  return Math.floor(answer / listRuntime.length);
}

/*
function solution(jobs) {
  let ascendingJobs = jobs.sort((a, b) => a[1] - b[1]);
  let start = 0;
  let listRuntime = [];
  let runtime = 0;

  for (let i = 0; i < ascendingJobs.length; i++) {
    // 시작시간 = 시작시간 + 작업 소요시간
    start += ascendingJobs[i][1];
    // 작업 소요 시간 = (시작시간 + 작업 소요 시간) - 요청 시점
    // 0 + 3 - 0 = 3
    // 3 + 6 - 2 = 7
    // 9 + 9 - 1 = 17
    runtime = start - ascendingJobs[i][0];
    listRuntime.push(runtime);
  }

  let answer = listRuntime.reduce((prev, cur) => prev + cur, 0);
  return Math.floor(answer / listRuntime.length);
}
*/

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
); // 9
