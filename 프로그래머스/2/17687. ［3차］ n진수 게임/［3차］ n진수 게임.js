function solution(n, t, m, p) {
    var answer = '';
    let cnt = 0;
    
    for(let i = 0; i <= t*m; i++) {
        const num = i.toString(n);
        
        num.split('').forEach((v) => {
            if(cnt++ % m == p - 1) answer += v.toUpperCase();
        })
    }
    
    return answer.slice(0,t);
}