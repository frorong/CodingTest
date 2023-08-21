function solution(my_str, n) {
    return my_str.split('').map((v,i) => (i + 1) % n === 0 ? (v + '/') : v).join('').split('/').filter(Boolean);
}