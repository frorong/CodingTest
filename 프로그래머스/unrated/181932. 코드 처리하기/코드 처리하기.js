function solution(code) {
    let answer = '';
    let mode = true;
    code.split('').forEach((v,i) => {
        if(v == '1') mode = !mode;
        else if(mode && i % 2 == 0) answer += v;
        else if(!mode && i % 2 == 1) answer += v;
    })
    return answer.length < 1 ? 'EMPTY' : answer;
}