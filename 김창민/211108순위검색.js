const makeCondition = (field) => {
    const fieldArr = field.split(" ");
    return Array.from({ length: 16 }, (_, idx) =>
        idx.toString(2).padStart(4, 0)
    ).map((binaryStr) =>
        binaryStr
            .split("")
            .map((value, idx) => (value === "1" ? fieldArr[idx] : "-"))
            .join("")
    );
};

const makeConditionDict = (infos) => {
    return infos.reduce((conditionDict, info) => {
        const [field, score] = info.split(/\s(?=\w+$)/);

        const conditions = makeCondition(field);

        conditions.forEach((query) => {
            if (conditionDict[query]) conditionDict[query].push(+score);
            else conditionDict[query] = [+score];
        });

        return conditionDict;
    }, {});
};

const binarySearch = (array, value) => {
    let lowIdx = 0;
    let highIdx = array.length;

    while (lowIdx < highIdx) {
        const midIdx = Math.floor((lowIdx + highIdx) / 2);

        if (value <= array[midIdx]) {
            highIdx = midIdx;
        } else {
            lowIdx = midIdx + 1;
        }
    }

    return lowIdx;
};

const solution = (infos, queries) => {
    const conditionDict = makeConditionDict(infos);

    Object.values(conditionDict).forEach((scores) =>
        scores.sort((a, b) => a - b)
    );

    return queries.map((query) => {
        const [condition, refScore] = query
            .replace(/ and /g, "")
            .split(/\s(?=\w+$)/);

        const scores = conditionDict[condition] || [];
        const lowIndex = binarySearch(scores, refScore);
        return scores.length - lowIndex;
    });
};
