function solution(numbers, k) {
    let answer = 0;
    for(let i = 0; i < k; i++) answer = numbers[(i * 2) % numbers.length];
    return answer;
}