function solution(order) {
    let answer = 0;
    order.forEach((v,i) =>  answer += v.includes('fe') ? 5000 : 4500 );
    return answer;
}