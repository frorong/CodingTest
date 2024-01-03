function isPN (n) {
    if(isNaN(n) || n == 1) return false;
    for(let i = 2; i < n / 2; i++){
        if(n % i === 0) return false;
        if(i > 1000) return true
    }
    return true;
}

function solution(n, k) {
    const arr = n.toString(k).split('0').filter((v) => isPN(parseInt(v)));
    return arr.length;
}