function solution(my_string) {
    return my_string.split('').map((v) => isNaN(v) ? ' ' : v).join('').split(' ').filter((v) => v).reduce((a,b) => a + parseInt(b),0);
}