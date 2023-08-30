
 

function solution(n) {
    let answer = [];
    for(let i = 2; n !== 1; i++){
        if(n % i === 0) {
            answer.push(i);
            n = n / i;
            i--;
        };
    }
    return [...new Set(answer)];
}