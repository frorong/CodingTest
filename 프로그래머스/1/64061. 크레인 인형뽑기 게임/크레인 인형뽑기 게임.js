function solution(board, moves) {
    var answer = 0;
    const stack = [];
    
    moves.forEach((move) => {
        for(let i = 0; i < board.length; i++) { 
            const target = board[i][move - 1];

            if(target !== 0) {
                board[i][move - 1] = 0;
                if(stack.at(-1) === target) {
                    stack.pop(); 
                    answer += 2;
                    
                } else stack.push(target);
                break;
            }
        }
    })

    return answer;
}
