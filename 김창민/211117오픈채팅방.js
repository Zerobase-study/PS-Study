const solution = (record) => {
    const userInfo = {};
    return record
        .filter((log) => {
            const [action, userId, nickname] = log.split(" ");
            userInfo[userId] = nickname || userInfo[userId];
            return action !== "Change";
        })
        .map((log) => {
            const [action, userId] = log.split(" ");
            return action === "Enter"
                ? `${userInfo[userId]}님이 들어왔습니다.`
                : `${userInfo[userId]}님이 나갔습니다.`;
        });
};
