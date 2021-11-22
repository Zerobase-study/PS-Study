const solution = (files) => {
  files.sort((file1, file2) => {
    const regExp = /^([a-zA-Z\s.-]+)([0-9]+)([\w\s.-]*)$/;
    const [, HEAD1, NUMBER1] = file1.match(regExp);
    const [, HEAD2, NUMBER2] = file2.match(regExp);

    const [head1, head2] = [HEAD1.toUpperCase(), HEAD2.toUpperCase()];
    const [number1, number2] = [+NUMBER1, +NUMBER2];
    if (head1 !== head2) return head1.localeCompare(head2);
    if (number1 !== number2) return number1 - number2;
  });

  return files;
};
