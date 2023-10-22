function solution(n, m, section) {
    let answer = 0;
    let cur = 0;
    let cnt = 0;
    let isStarted = false;
    for(let i = 1; i <= n; i++){
        if(section.includes(i)){
            isStarted = true;
            cur++;
        } else {
            if(isStarted) cnt++;
        }
        if(cur + cnt === m){
            cnt = 0;
            cur = 0;
            isStarted = false;
            answer++;
        }
    }
    if(cur !== 0) answer++;
    return answer;
}