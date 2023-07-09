function solution(s){
    let a = [];
    if(s[0] === ')') return false;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') a.push(0);
        else a.pop();
    }
    return a[0] === 0 ? false : true;
}