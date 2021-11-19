const getBiggestDistance = (n) => {
    const binary = n.toString(2);
    let [max, maxIdx] = [0, 0];
    for (let idx = 0; idx < binary.length; idx++) {
        if (binary[idx] === "1") {
            max = Math.max(max, idx - maxIdx);
            maxIdx = idx;
        }
    }
    return max;
};
