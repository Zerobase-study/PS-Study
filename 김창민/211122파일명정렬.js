const solution = (files) => {
    const separateFileName = (fileName) => {
        const head = fileName.match(/^([A-Za-z .-]+)(?=\d)/)[0];
        const number = fileName.match(/\d{1,5}/);
        const tail = fileName.slice(number.index + number[0].length);

        return { head, number: number[0], tail };
    };

    return files
        .map((fileName) => separateFileName(fileName))
        .sort((fileA, fileB) => {
            const headA = fileA.head.toLowerCase();
            const headB = fileB.head.toLowerCase();

            return headA > headB ? 1 : headA < headB ? -1 : fileA.number - fileB.number;
        })
        .map(({ head, number, tail }) => `${head}${number}${tail}`);
};
