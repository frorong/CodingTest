function solution(s) {
    return s.split('').map((v,i) => {
        if(isNaN(v)){
            return s[i-1] === ' ' || i == 0 ? v.toUpperCase() : v.toLowerCase();
        } else return v;
    }).join('');
}