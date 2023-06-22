function solution(ineq, eq, n, m) {
    let result = ineq === '<' ? n < m : n > m;
    return eq === '=' && n === m ? 1 : result ? 1 : 0;
}