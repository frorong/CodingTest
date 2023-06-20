function solution(X, Y) {
    let result = '';
    const cnt1 = new Array(10).fill(0)
    const cnt2 = new Array(10).fill(0)
    
    const length = X.length > Y.length ? X.length : Y.length;
    
    for(let i = 0; i < length; i++){
        if(i < Y.length) cnt1[Y[i]]++;
        if(i < X.length) cnt2[X[i]]++;
    }
    
    for(let i = 9; i >= 0; i--){
        const real = Math.min(cnt1[i], cnt2[i]);
        for(let j = 0; j < real; j++) result += i;
    }
    
    return result === '' ? '-1' : result[0] === '0' ? '0' : result;
}