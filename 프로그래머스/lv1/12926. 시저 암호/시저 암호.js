function solution(s, n) {
    return s.split('').map((v,i) => {
        if(v === ' ') return ' ';
        const at = v.charCodeAt() + n;
        if((v === v.toUpperCase() && at > 90) || (at > 122)) return String.fromCharCode(at - 26);
        return String.fromCharCode(at);
    }).join('');
}