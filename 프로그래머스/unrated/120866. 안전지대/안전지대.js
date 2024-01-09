function solution(board) {
    function calcArr (i,j) {
        if(board[i][j] !== 1) board[i][j] = 2;
    }
    board.forEach((v,i) => {
        v.forEach((k,j) => {
            if(k == 1) {
                if(i < board.length-1) calcArr(i+1,j);
                if(j < v.length-1) calcArr(i,j+1);
                if(i > 0) calcArr(i-1,j);
                if(j > 0) calcArr(i,j-1);
                if(i < board.length-1 && j < v.length-1) calcArr(i+1,j+1);
                if(i > 0 && j > 0) calcArr(i-1,j-1);
                if(i < board.length-1 && j > 0) calcArr(i+1,j-1);
                if(i > 0 && j < v.length-1) calcArr(i-1,j+1);
            }
        })
    })
    return board.flat().filter((v) => v === 0).length;
}