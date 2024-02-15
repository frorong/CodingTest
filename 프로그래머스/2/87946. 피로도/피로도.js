function solution(k, dungeons) {
    dungeons.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    const memo = {};

    for (let i = 1; i <= dungeons.length; i++) {
        for (let r = k; r >= 1; r--) {
            if (dungeons[i - 1][0] > r) memo[r] = memo[r] || 0;
            else memo[r] = Math.max(memo[r] || 0, 1 + (memo[r - dungeons[i - 1][1]] || 0));
        }
    }

    return memo[k] ?? 0;
}
