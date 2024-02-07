function solution(n, s) {
    if(s < n) return [-1];
    
    let nameo = s % n;
    let nanu = parseInt(s / n);
    
    var answer = new Array(n).fill(nanu);
    
    if(nameo === 0) return answer;
    
    for(let i = 0; i < nameo; i++) answer[i]++;
    
    return answer.reverse();
}