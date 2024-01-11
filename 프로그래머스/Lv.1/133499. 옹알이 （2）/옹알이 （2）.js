function solution(babbling) {
    let cnt = 0;
    babbling.forEach((v) => {
        if(!v.includes('ayaaya') && !v.includes('yeye') && !v.includes('mama') && !v.includes('woowoo')) {
            v = v.replaceAll('aya', '-');
            v = v.replaceAll('ye', '-');
            v = v.replaceAll('ma', '-');
            v = v.replaceAll('woo', '-');
            v = v.replaceAll('-', '');
            
            if(v == '') cnt++;
        } 
    })
    return cnt;
}