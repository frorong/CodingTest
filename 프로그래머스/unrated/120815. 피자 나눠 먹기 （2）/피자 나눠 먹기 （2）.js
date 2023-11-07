function solution(n) {
    let answer = 0;
    for(let i = 6;; i++){
        if(i % 6 === 0 && i % n === 0) {
            answer = i / 6;
            break;
        }
    }
    return answer;
}