function solution(num_list, n) {
    var answer = [];
    let temp = [];
    num_list.forEach((v,i) => {
        temp.push(v);
        if((i+1) % n === 0) {
            answer.push(temp);
            temp = [];
        }
    })
    return answer;
}