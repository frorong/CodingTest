function solution(n) {
    var answer = 1;
    for(let i = 1; ; i++){
        if(answer * i > n) return i - 1;
        answer *= i;
    }
}