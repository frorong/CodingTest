function solution(l, r) {
    let arr = [];
    
    for(let i = l; i <= r; i++){
        if(String(i).replaceAll('0', '').replaceAll('5','').length === 0) arr.push(i);
    }
    
    return arr.length == 0 ? [-1] : arr;
}