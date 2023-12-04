function solution(intStrs, k, s, l) {
    return intStrs.filter((v) => parseInt(v.slice(s, s+l)) > k).map((v) => parseInt(v.slice(s, s+l)));
}