function solution(records) {
  const hashId = {};
  const print = records.filter((record) => {
    const [action, id, nickname] = record.split(" ");
    hashId[id] = nickname || hashId[id];
    return action !== "Change";
  });
  return print.map((record) => {
    const [action, id] = record.split(" ");
    return `${hashId[id]}님이 ${action === "Enter" ? "들어왔" : "나갔"}습니다.`;
  });
}
