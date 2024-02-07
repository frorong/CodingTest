function solution(x, y, n) {
    if (x == y) return 0;
    
    let q = [{ cur: y, i: 0 }];
    
    while (q.length > 0) {
        const { cur, i } = q.shift();
        if (cur === x) return i;
        if (cur < x) continue;
        if (i > 18) return i;

        q.push({ cur: cur - n, i: i + 1 });
        if(cur % 2 == 0) q.push({ cur: cur / 2, i: i + 1 });
        if(cur % 3 == 0) q.push({ cur: cur / 3, i: i + 1 });
    }

    return -1;
}
