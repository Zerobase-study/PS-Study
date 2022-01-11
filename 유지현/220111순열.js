const permute = function (nums) {
  return nums.reduce(
    function (list, element) {
      const newList = [];

      list.forEach(function (seq) {
        for (let i = seq.length; i >= 0; i--) {
          const newSeq = [].concat(seq);
          newSeq.splice(i, 0, element);
          newList.push(newSeq);
        }
      });
      return newList;
    },
    [[]]
  );
};
