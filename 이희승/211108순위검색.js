// 풀이 1 - 정확도 테스트 실패
function solution(info, query) {
    // 전처리
    // info
    // - 띄어쓰기 단위로 split해서 2차원 배열에 저장
    info = info.map((val) => val.split(" "));
    // query
    // - and 단위로 split()
    query = query.map((val) => val.split(" ")).map((val) => val.filter((val) => val !== "and"));

    // main
    // 1. query배열을 순회하며 조건 탐색
    // 2. '-' 조건이 나올경우 건너뛰기
    const res = new Array(query.length).fill(0);

    for (let i = 0; i < query.length; i++) {
        for (let j = 0; j < info.length; j++) {
            let val = 0;
            for (let k = 0; k < 4; k++) {
                if (query[i][k] === info[j][k] || query[i][k] === "-") val += 1;
            }
            if (+query[i][4] <= +info[j][4] || query[i][4] === "-") val += 1;
            if (val === 5) res[i] += 1;
        }
    }

    // return: 조건을 만족하는 인원을 담은 배열
    return res;
}

// 풀이 2 - 효율성 테스트 실패, 정확도 6개 런타임 에러
function solution(info, query) {
    const combination = function (arr, score, map, start) {
        const key = arr.join("");
        const val = map.has(key);

        if (val) {
            map.set(key, [...map.get(key), +score]);
        } else {
            map.set(key, [+score]);
        }
        for (let i = start; i < arr.length; i++) {
            let combiArr = [...arr];
            combiArr[i] = "-";

            combination(combiArr, score, map, i + 1);
        }
    };

    const binarySearch = function (map, key, score) {
        const scoreArr = map.get(key.join("")).sort((a, b) => a - b);
        if (scoreArr.length) {
            let start = 0;
            let end = scoreArr.length;

            while (start < end) {
                const mid = Math.floor((start + end) / 2);

                if (scoreArr[mid] >= score) {
                    end = mid;
                } else if (scoreArr[mid] < score) {
                    start = mid + 1;
                }
            }
            return scoreArr.length - start;
        }
    };

    const res = [];
    const map = new Map();

    info = info.map((val) => val.split(" "));
    query = query.map((val) => val.replace(/ and /g, "").split(" "));

    info.forEach((val) => {
        let score = val.pop();
        combination(val, score, map, 0);
    });

    query.forEach((val) => {
        let score = +val.pop();
        res.push(binarySearch(map, val, score));
    });

    return res;
}
