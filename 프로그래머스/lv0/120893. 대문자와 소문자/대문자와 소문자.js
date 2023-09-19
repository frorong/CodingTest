function solution(my_string) {
    return my_string.split('').map((v) => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase()).join('');
}