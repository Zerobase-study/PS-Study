const combination = (arr, r) => {
    const result = [];

    if (r === 1) {
        return arr.map((v) => [v]);
    }

    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        result.push(...combination(rest, r - 1).map((el) => [arr[i], ...el]));
    }

    return result;
};

const isEmptyObject = (object) => {
    if (Object.keys(object).length === 0) return true;
    return false;
};

const makeMenuDB = (orders, course) => {
    return orders.reduce((menuDB, order) => {
        combination(order, course)
            .map((x) => x.join(""))
            .forEach((x) => {
                if (menuDB[x]) menuDB[x]++;
                else menuDB[x] = 1;
            });
        return menuDB;
    }, {});
};

const solution = (orders, courses) => {
    const sortedOrders = orders.map((order) => order.split("").sort());

    const finalMenus = courses.reduce((finalMenus, course) => {
        const menuDB = makeMenuDB(sortedOrders, course);

        if (!isEmptyObject(menuDB)) {
            const maxOrder = Math.max(...Object.values(menuDB));

            if (maxOrder > 1) {
                const finalMenu = Object.keys(menuDB).reduce(
                    (finalMenu, menu) =>
                        menuDB[menu] === maxOrder
                            ? [...finalMenu, menu]
                            : finalMenu,
                    []
                );
                return [...finalMenus, ...finalMenu];
            }
        }

        return finalMenus;
    }, []);

    return finalMenus.sort();
};
