function solution(n) {
    let a = 0;
    for(let b = 1; b <= n; b++){
        let cnt = 0;
        for(let c = b; c <= n; c++){
            cnt += c;
            if(cnt === n){
                a++;
                break;
            }
            else if(cnt > n) break;
        }
    }
    return a;
}