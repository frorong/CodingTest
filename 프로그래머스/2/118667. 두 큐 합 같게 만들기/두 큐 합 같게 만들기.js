function solution(queue1, queue2) {
    let answer = 0;
    
    let idx1 = 0;
    let idx2 = 0;
    let cnt1 = queue1.reduce((a,b)=> a+b, 0);
    let cnt2 = queue2.reduce((a,b)=> a+b, 0);
    
    const maximam = queue1.length + queue2.length * 2;

    while(answer < maximam) {
        if(cnt1 > cnt2){
            const target = queue1[idx1++];
            cnt1 -= target;
            cnt2 += target;
            queue2.push(target);
        }
        else if(cnt1 < cnt2) {
            const target = queue2[idx2++];
            cnt1 += target;
            cnt2 -= target;
            queue1.push(target);
        }
        else return answer;
        answer++;
    }

    return -1;
}