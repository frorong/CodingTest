function solution(balls, share) {
    let cnt = [1,1];
    for(let i = 0; i < share; i++){
        cnt[0] *= balls - i;
        cnt[1] *= share - i;
    }
    return cnt[0] / cnt[1];
}