function solution(a, d, included) {
    let cnt = a;
    return included.map((a) => {
        const wr = cnt;
        cnt += d;
        if(a) return wr;
    }).filter((v) => v).reduce((a,b) => a+b, 0);
}