function solution(s) {
    if(s.length === 1) return s[0];
    
    const a = [0, ...s.slice(1)];
    const b = [0, ...s.slice(0, s.length -1)];
    
    for(let i = 2; i < s.length; i++){
        a[i] = Math.max(a[i-1], a[i-2] + a[i]);
        b[i] = Math.max(b[i-1], b[i-2] + b[i]);
    }
    
    return Math.max(a.at(-1),b.at(-1));
}