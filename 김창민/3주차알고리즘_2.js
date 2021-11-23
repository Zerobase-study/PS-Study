const getMaxPlants = (field, n) => {
    const [width, height] = [field[0].length, field.length];

    let max = 0;
    for (let fieldRow = 0; fieldRow < height - (n - 1); fieldRow++) {
        for (let fieldCol = 0; fieldCol < width - (n - 1); fieldCol++) {
            // 램프 내의 식물 개수 카운트
            let cnt = 0;
            for (let lampRow = 0; lampRow < n; lampRow++) {
                for (let lampCol = 0; lampCol < n; lampCol++) {
                    cnt += field[fieldRow + lampRow][fieldCol + lampCol];
                }
            }
            max = Math.max(max, cnt);
        }
    }
    return max;
};
