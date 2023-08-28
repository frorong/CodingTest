function solution(s) {
    var answer = 0;
    s = s.split(' ');
    s.forEach((v,i) => {
        if(s[i+1] !== 'Z' && v !== 'Z') answer += Math.floor(v);
    })
    return answer;
}