const getOverlapedPeople = (history, infected) => {
    // 모든 방문자에 대한 타임라인
    const timeLine = history.reduce((timeLine, person, time) => {
        timeLine[person] = timeLine[person]
            ? [...timeLine[person], time]
            : [time];
        return timeLine;
    }, {});

    // 사람 수
    const peopleCount = Object.keys(timeLine).length / 2;

    const contact = [];
    for (let i = 0; i < timeLine[infected].length; i++) {
        const [infectedStartTime, infectedEndTime] = [
            timeLine[infected][i],
            timeLine[`-${infected}`][i],
        ];
        for (let person = 1; person <= peopleCount; person++) {
            if (person !== infected) {
                for (let time = 0; time < timeLine[person].length; time++) {
                    const [startTime, endTime] = [
                        timeLine[person][time],
                        timeLine[`-${person}`][time],
                    ];
                    // 접촉자의 경우의 수
                    // 감염자의 방문 범위에 방문을 시작한 사람
                    if (
                        startTime > infectedStartTime &&
                        startTime < infectedEndTime
                    ) {
                        contact.push(person);
                    }
                    // 감염자의 방문 범위에 나간 사람
                    else if (
                        endTime > infectedStartTime &&
                        endTime < infectedEndTime
                    ) {
                        contact.push(person);
                    }
                    // 감염자의 방문보다 빠르고 감염자보다 늦게 나간 사람
                    else if (
                        startTime < infectedStartTime &&
                        endTime > infectedEndTime
                    ) {
                        contact.push(person);
                    }
                }
            }
        }
    }

    return [...new Set(contact)];
};
