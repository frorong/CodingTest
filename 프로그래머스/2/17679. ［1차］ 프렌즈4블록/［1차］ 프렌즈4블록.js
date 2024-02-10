function solution(m, n, board) {
    let answer = 0;
    board = board.map(v => v.split(''));

    while (true) {
        const removed = new Array(m).fill(null).map(() => new Array(n).fill(false));

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const cur = board[i][j];
                if (cur != '*' && [...new Set([cur, board[i][j+1], board[i+1][j], board[i+1][j+1]])].length == 1) {
                    removed[i][j] = true;
                    removed[i][j+1] = true;
                    removed[i+1][j] = true;
                    removed[i+1][j+1] = true;
                }
            }
        }

        let count = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (removed[i][j]) {
                    count++;
                    board[i][j] = '*';
                }
            }
        }

        if (count === 0) break;

        for (let i = m - 1; i > 0; i--) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === '*') {
                    for (let k = i - 1; k >= 0; k--) {
                        if (board[k][j] !== '*') {
                            board[i][j] = board[k][j];
                            board[k][j] = '*';
                            break;
                        }
                    }
                }
            }
        }

        answer += count;
    }

    return answer;
}
