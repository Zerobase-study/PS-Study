const solution = (str1, str2) => {
    const toSet = (() => {
        const getAvailableElements = (str) => {
            const getElements = (() => {
                const arr = [];
                return (str) => {
                    const newStr = str.toLowerCase();
                    for (let i = 1; i < newStr.length; i++) {
                        arr.push(`${newStr[i - 1]}${newStr[i]}`);
                    }
                    return arr;
                };
            })();

            return getElements(str).filter((element) =>
                /[a-z]{2}/g.test(element)
            );
        };

        return (str) =>
            getAvailableElements(str).reduce((set, element) => {
                set[element] = (set[element] || 0) + 1;
                return set;
            }, {});
    })();

    const getSize = (set) =>
        Object.keys(set).reduce((size, element) => size + set[element], 0);

    const getIntersectionSize = (set1, set2) =>
        Object.keys(set1).reduce(
            (size, element) =>
                size + Math.min(set1[element], set2[element] || 0),
            0
        );

    const [set1, set2] = [toSet(str1), toSet(str2)];

    const intersectionSize = getIntersectionSize(set1, set2);

    const jaccard = Math.floor(
        (intersectionSize /
            (getSize(set1) + getSize(set2) - intersectionSize)) *
            65536
    );

    return Number.isNaN(jaccard) ? 65536 : jaccard;
};
