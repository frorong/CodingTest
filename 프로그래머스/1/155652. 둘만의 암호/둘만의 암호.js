
function solution(s, skip, index) {
    let apb = 'abcdefghijklmnopqrstuvwxyz';
    
    skip.split('').forEach((v) => apb = apb.replace(v, ''));
    
    return s.split('').map((v) => {
        const i = apb.indexOf(v) + index;
        return apb[i % apb.length];
    }).join('')
}