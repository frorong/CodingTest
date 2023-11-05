function solution(hp) {
    let answer = 0;
    while (hp) {
        if(hp >= 5) hp -= 5;
        else if(hp >= 3) hp -= 3;
        else hp--;
        answer++;
    }
    return answer;
}