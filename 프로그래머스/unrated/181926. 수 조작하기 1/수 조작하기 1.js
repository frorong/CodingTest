function solution(n, control) {
    const gag = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    }
    var answer = 0;
    return control.split('').reduce((a,b,c) => a+gag[b], n);
}