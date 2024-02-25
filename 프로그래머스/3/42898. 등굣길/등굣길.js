function solution(m, n, puddles) {
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
    dp[0][0] = 1;

    puddles = new Set(puddles.map(([x, y]) => `${x-1},${y-1}`));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) continue;

            if (puddles.has(`${j},${i}`)) dp[i][j] = 0;
            else {
                if (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 1000000007;
                if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % 1000000007;
            }
        }
    }

    return dp[n - 1][m - 1];
}
