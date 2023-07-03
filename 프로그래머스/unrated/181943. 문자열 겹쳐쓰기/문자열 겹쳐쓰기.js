function solution(my_string, overwrite_string, s) {
    const front = my_string.substr(0, s);
    const back = my_string.substring(s + overwrite_string.length);
    return front + overwrite_string + back;
}