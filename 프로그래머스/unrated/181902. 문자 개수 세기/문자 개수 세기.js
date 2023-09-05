function solution(my_string) {
    var answer = Array(52).fill(0);
    my_string.split('').forEach((v,i) => {
        const code = v.charCodeAt();
        answer[code - (code < 91 ? 65 : 71)]++;
    })
    return answer;
}