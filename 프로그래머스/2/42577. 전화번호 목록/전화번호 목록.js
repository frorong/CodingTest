function solution(p) {
    var a = true;
    p = p.sort()
    p.forEach((v,i) => {
        if(p[i+1]?.indexOf(v) == 0) a = false;
    })
    return a;
}