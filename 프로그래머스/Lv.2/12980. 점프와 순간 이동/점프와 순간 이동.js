function solution(n) {
    let answer = 1;
    
    while (true){
        if(n == 1) return answer;
        
        if(n % 2 === 0) n /= 2;
        else {
            n--;
            answer++;
        }
    }
}