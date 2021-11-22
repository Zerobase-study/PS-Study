function solution(files) {
  return files.sort((x, y) => {
    const xHeader = x
      .match(/^[A-Za-z\.-\s]+/gi)
      .join("")
      .toLowerCase();
    const yHeader = y
      .match(/^[A-Za-z\.-\s]+/gi)
      .join("")
      .toLowerCase();
    if (xHeader < yHeader) return -1;
    else if (xHeader > yHeader) return 1;

    const xNumber = x.match(/[0-9]{1,5}/).join("") / 1;
    const yNumber = y.match(/[0-9]{1,5}/).join("") / 1;

    if (xNumber < yNumber) return -1;
    else if (xNumber > yNumber) return 1;
  });
}
