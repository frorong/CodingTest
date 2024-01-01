function solution(k, tangerine) {
    let answer = [];
    let obj = {};
    tangerine.forEach((v) => {
        if(obj[v]) obj[v]++;
        else obj[v] = 1;
    })
    tangerine = tangerine.map((v) => [obj[v], v]).sort((a,b) => b[0] - a[0] === 0 ? b[1] - a[1] : b[0] - a[0]).slice(0, k);
    
    return [...new Set(tangerine.map((v) => v[1]))].length;
}