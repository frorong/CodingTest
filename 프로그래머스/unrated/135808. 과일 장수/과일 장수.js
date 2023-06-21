function solution(k, m, score) {
    let answer = 0;
    score = score.sort((a,b) => b-a);
    const length =  score.length - score.length % m;
    score = score.slice(0,length);
    for(let i = m-1; i < score.length; i += m) answer += score[i] * m
    return answer;
}