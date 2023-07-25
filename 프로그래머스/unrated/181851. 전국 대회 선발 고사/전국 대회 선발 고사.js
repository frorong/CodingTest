function solution(rank, attendance) {
    let answer = [];
    let newRank = rank.filter((v,i) => attendance[i]);
    for(let i = 0; i < 3; i++){
        const min = Math.min(...newRank);
        newRank[newRank.indexOf(min)] = 100;
        answer.push(rank.indexOf(min));
    }
    return 10000 * answer[0] + 100 * answer[1] + answer[2];
}