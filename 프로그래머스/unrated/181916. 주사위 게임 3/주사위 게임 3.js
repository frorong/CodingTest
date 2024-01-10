function solution(a, b, c, d) {
    const set = [...new Set([a,b,c,d])];
    let obj = {};
    
    [a,b,c,d].forEach((v) => obj[v] ? obj[v]++ : obj[v] = 1);
    obj = Object.entries(obj);
    
    let cnt = [0, ''];
    for(let i = 0; i < obj.length; i++){
        if(cnt[0] < obj[i][1]) {
            cnt[0] = obj[i][1];
            cnt[1] = obj[i][0];
        }
    }
    
    if(set.length === 1) return 1111 * a
    if(set.length === 4) return Math.min(a,b,c,d);
    if(set.length === 3) {
        set.splice(set.indexOf(parseInt(cnt[1])),1);
        return set[0] * set[1];
    }
    obj = obj.map((v) => [parseInt(v[0]), v[1]]);
    if(obj[0][1] === 2) return (obj[0][0] + obj[1][0]) * Math.abs((obj[0][0] - obj[1][0]))
    obj = obj.sort((b,a) => a[1] - b[1]);
    return (10 * obj[0][0] + obj[1][0]) ** 2;
}