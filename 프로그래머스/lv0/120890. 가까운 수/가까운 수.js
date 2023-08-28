function solution(array, n) {
    var answer = array[0];
    array.forEach((v,i) => {
        if(Math.abs(n - answer) === Math.abs(n - v)) answer = answer > v ? v : answer;
        else answer = Math.abs(n - answer) > Math.abs(n - v) ? v : answer
    });
    return answer;
}