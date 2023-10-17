function solution(answers) {
    const a1 = [1,2,3,4,5];
    const a2 = [2,1,2,3,2,4,2,5];
    const a3 = [3,3,1,1,2,2,4,4,5,5];               
    let answer = [];
    let score = [0,0,0];
    answers.forEach((v,i) => {
        if(v === a1[i % (a1.length)]) score[0]++;
        if(v === a2[i % (a2.length)]) score[1]++;
        if(v === a3[i % (a3.length)]) score[2]++;
    })
    const max = Math.max(...score);
    score.forEach((v,i) => {
        if(v === max) answer.push(i+1);
    })
    return answer;
}   