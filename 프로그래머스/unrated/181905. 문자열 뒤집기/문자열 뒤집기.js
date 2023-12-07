function solution(my_string, s, e) {
    return my_string.substring(0, s) + my_string.substring(s, e+1).split('').reverse().join('') + my_string.substring(e+1, my_string.length);
}