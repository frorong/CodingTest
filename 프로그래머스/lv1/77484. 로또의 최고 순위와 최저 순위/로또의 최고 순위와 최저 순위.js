function solution(lottos, win_nums) {
    let answer = [7,7];
    lottos.forEach((v,i) => {
        if(win_nums.includes(v)){
            answer[1]--;
            answer[0]--;
        }
        if(v === 0) answer[0]--;
    })
    if(answer[1] === 7) answer[1] = 6;
    if(answer[0] === 7) answer[0] = 6;
    return answer;
}