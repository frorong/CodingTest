function solution(my_string, m, c) {
    return m == 1 ? my_string : m == c ? my_string[m-1] : my_string.split('').filter((v,i) => (i+1) % m == c).join('');
}