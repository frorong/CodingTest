function solution(polynomial) {
    let cnt = [0,0];
    polynomial.split(' + ').forEach((v) => v[v.length-1] === 'x' ? v.length === 1 ? cnt[0]++ :  cnt[0] += parseInt(v.substr(0,v.length-1)) : cnt[1] += parseInt(v)); 
    return `${cnt[0] > 0 ? (cnt[0] === 1 ? '' : cnt[0]) + 'x' : ''}${cnt[0] > 0 && cnt[1] > 0 ? ' + ' : ''}${cnt[1] > 0 ? cnt[1] : ''}`;
}