function solution(clothes) {
    let cnt = 1;
    let obj = {}
    clothes.forEach((v) => {
        if(obj[v[1]]) obj[v[1]]++;
        else obj[v[1]] = 1;
    })
    Object.values(obj).forEach((v) => cnt *= v+1);
    return cnt - 1;
}