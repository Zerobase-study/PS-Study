const separate = (str) => {
    let open = 0;
    let close = 0;

    for (let letter of str) {
        letter === "(" ? open++ : close++;
        if (open === close)
            return [str.slice(0, close * 2), str.slice(close * 2)];
    }
};

const isCorrect = (str) => {
    return str[0] === "(" && str[str.length - 1] === ")";
};

const makeCorrect = (str) => {
    return str
        .split("")
        .slice(1, str.length - 1)
        .map((letter) => (letter === "(" ? ")" : "("))
        .join("");
};

const solution = (str) => {
    if (!str) return str;

    const [u, v] = separate(str);

    if (isCorrect(u)) return u + solution(v);
    else return "(" + solution(v) + ")" + makeCorrect(u);
};
