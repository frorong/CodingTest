function solution(number, limit, power) {
    let nums = 0;
    for(let j = 1; j <= number; j++){
        let cnt = 0;
        for(let i = 1; i <= j / 2; i++) if(j % i === 0) cnt++;
        nums += ++cnt > limit ? power : cnt;
    }
    return nums;
}