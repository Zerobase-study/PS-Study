function solution(orders, course) {
    // 전처리
    // 1. 손님들이 주문한 모든 단품메뉴 리스트 만들기(singleMenus)
    const flatOrder = orders.map((val) => val.split("")).flat();
    const set = new Set(flatOrder);
    const singleMenus = [...set.values()];

    // main
    // 1. 코스요리에 나오는 메뉴의 개수는 1~10개
    const courseMenus = new Array(11).fill(0);

    // 2. 각 인덱스(코스요리 메뉴의 수가 i개 일때) 나올 수 있는 모든 경우의 수 탐색
    //  생성된 조합을 하나씩 순회하며 Map에 저장
    //  해당 인덱스 요소에 Map 저장
    for (const num of course) {
        const map = new Map();
        getCombinations(singleMenus, num).forEach((str) => map.set(str, 0));
        courseMenus[num] = map;
    }

    // 3. 실제 주문한 음식들 -> 조합 -> 모든 경우의 수 탐색
    //  값이 나왔으면 Map 업데이트 ('AB' 나왔을경우 'AB': 1)
    for (const menu of orders) {
        for (const num of course) {
            getCombinations(menu.split(""), num).forEach((val) => courseMenus[num].set(val, courseMenus[num].get(val) + 1));
        }
    }

    // 4. 어떤 요리묶음이 가장 많은지 탐색
    const ans = [];
    courseMenus.filter((val) => val !== 0).forEach((menuMap) => orderMaxMenu(menuMap));

    return ans.flat().sort();

    // -함수 모음-
    function getCombinations(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combination = getCombinations(rest, selectNumber - 1);
            const attached = combination.map((val) => [fixed, ...val].sort().join(""));
            results.push(...attached);
        });

        return results;
    }

    function orderMaxMenu(map) {
        let arr = [];
        let minValue = -Infinity;
        for (const mapArr of map) {
            let key = mapArr[0];
            let val = mapArr[1];

            if (minValue < val && val > 1) {
                arr = [key];
                minValue = val;
            } else if (minValue === val) {
                arr.push(key);
            }
        }
        ans.push(arr.slice());
    }
}
