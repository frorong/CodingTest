function solution(babbling) {
    let cnt = 0;
    babbling.forEach((v,i) => {
        v = v.replace('aya', '_');
        v = v.replace('ye', '_');
        v = v.replace('ma', '_');
        v = v.replace('woo', '_');
        v = v.replaceAll('_', '');
        if(v.length < 1) cnt++;
    })
    return cnt;
}