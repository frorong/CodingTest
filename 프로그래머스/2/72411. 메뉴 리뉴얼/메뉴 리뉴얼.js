function solution(orders, course) {
    const cnt = {};

    orders.forEach(order => {
        const sortedOrder = order.split('').sort().join('');
        const combinations = getCombinations(sortedOrder, course);
        combinations.forEach(combination => {
            if (cnt[combination]) cnt[combination]++;
            else cnt[combination] = 1;
        });
    });

    const max = new Array(course.length).fill(0);
    const sorted = Object.entries(cnt).sort((a, b) => b[1] - a[1]);

    course.forEach((length, i) => {
        const filtered = sorted.filter(entry => entry[0].length === length);
        filtered.forEach(entry => {
            max[i] = Math.max(entry[1], max[i]);
        });
    });

    const filtered = [...new Set(sorted.filter(entry => entry[1] > 1 && max[course.indexOf(entry[0].length)] === entry[1]).map(entry => entry[0]))].sort();

    return filtered;
}

function getCombinations(str, course) {
    const combinations = [];

    function dfs(start, cur, length) {
        if (length === 0) {
            combinations.push(cur);
            return;
        }

        for (let i = start; i < str.length; i++) {
            dfs(i + 1, cur + str[i], length - 1);
        }
    }

    course.forEach(length => {
        dfs(0, '', length);
    });

    return combinations;
}