function solution(n, lost, reserve) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(lost.includes(i)) {
            if(reserve.includes(i)){
                reserve[reserve.indexOf(i)] = 0;
                answer++;
            } else if(reserve.includes(i-1)){
                reserve[reserve.indexOf(i-1)] = 0;
                answer++;
            } else if(reserve.includes(i+1)){
                if(lost.includes(reserve[reserve.indexOf(i+1)])) continue;
                reserve[reserve.indexOf(i+1)] = 0;
                answer++;
            }
        } else answer++;
        console.log(answer)
    }
    return answer;
}