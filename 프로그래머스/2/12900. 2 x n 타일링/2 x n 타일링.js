function solution(n) {
    const fibo = [1,2,3,5,8,13];
    
    for(let i = 5; i < n; i++) fibo.push((fibo[i] + fibo[i-1]) % 1000000007);
    
    return fibo[n-1];
}