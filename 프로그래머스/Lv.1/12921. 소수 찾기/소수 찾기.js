function solution(n) {
    let answer = 0;
    const arr = [];
    for(let i = 0; i <= n; i++) arr.push(i);
    for(let i = 2; i <= n; i++){
        if(arr[i] === 0) continue;
        answer++;
        arr[i] = 0;
        
        for(let j = i*2; j <= n; j += i) arr[j] = 0;
    }
    return answer;
}