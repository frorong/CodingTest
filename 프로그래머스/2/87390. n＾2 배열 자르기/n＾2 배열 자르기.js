function solution(n, left, right) {
    let answer = [];
    
    for(let i = left; i <= right; i++){
        if(parseInt(i / n) >= i % n) answer.push(parseInt(i / n)+1);
        else answer.push(i % n+1);
    }
    
    return answer;
}