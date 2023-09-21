function solution(num_list) {
    let answer = ['',''];
    num_list.forEach((v,i) => v % 2 === 0 ? answer[0] += v : answer[1] += v);
    return parseInt(answer[0]) + parseInt(answer[1]);
}