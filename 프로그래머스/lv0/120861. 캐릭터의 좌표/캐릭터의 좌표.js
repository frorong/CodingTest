function solution(keyinput, board) {
    let cur = [0,0];
    const move = {
        left: () => cur[0]--,
        right: () => cur[0]++,
        up: () => cur[1]++,
        down: () => cur[1]--,
    };
    keyinput.forEach((v,i) => {
        move[v]();
        if(cur[0] === -Math.floor(board[0] / 2)-1) cur[0]++;
        if(cur[0] === Math.floor(board[0] / 2)+1) cur[0]--;
        if(cur[1] === -Math.floor(board[1] / 2)-1) cur[1]++;
        if(cur[1] === Math.floor(board[1] / 2)+1) cur[1]--;
    })
    return cur;
}