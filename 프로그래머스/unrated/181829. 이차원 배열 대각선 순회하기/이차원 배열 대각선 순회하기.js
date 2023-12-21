function solution(board, k) {
    var answer = 0;
    board.forEach((v,i) => {
        v.forEach((o,j) => {
            if(j + i <= k)answer += o
        })
    })
    return answer;
}