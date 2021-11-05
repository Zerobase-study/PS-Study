function solution(p) {
    if (isEmpty(p)) return "";
    if (isCorrect(p)) return p;

    const [u, v] = divideUV(p);

    if (isCorrect(u)) return u + solution(v);

    const res = `(${solution(v)})`;
    const arr = u
        .split("")
        .slice(1, u.length - 1)
        .map((val) => (val === "(" ? ")" : "("))
        .join("");
    return res + arr;

    function isEmpty(str) {
        return str.length === 0 ? true : false;
    }

    function isCorrect(str) {
        const stk = [str[0]];

        for (let i = 1; i < str.length; i++) {
            if (stk[stk.length - 1] === "(" && str[i] === ")") {
                stk.pop();
            } else {
                stk.push(str[i]);
            }
        }
        return stk.length === 0 ? true : false;
    }

    function divideUV(str) {
        let left = 0;
        let right = 0;

        for (const braket of str) {
            if (braket === "(") left += 1;
            if (braket === ")") right += 1;
            if (left === right) return [str.slice(0, left + right), str.slice(left + right)];
        }
    }
}
