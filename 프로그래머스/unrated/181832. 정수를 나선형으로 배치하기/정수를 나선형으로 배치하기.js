function solution(n) {
    let answer = new Array(n).fill(0).map(() => new Array(n));
    let where = 1;
    let x = 0;
    let y = 0
    for(let i = 1; i <= n*n; i++){
        answer[y][x] = i;
        if(where % 4 === 1){
            if(++x === n-(1+Math.floor(where / 4))) where++;
        } else if(where % 4 === 2){
            if(++y === n-(1+Math.floor(where / 4))) where++;
        } else if(where % 4 === 3){
            if(--x === (Math.floor(where / 4))) where++;
        } else if(where % 4 === 0){
            if(--y === (Math.floor(where / 4))) where++;
        }
    }

    return answer;
}