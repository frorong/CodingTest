function solution(n) {
    var answer = 0;
    const length = n.toString(2).split('').filter((v) => v === '1').length;
    for(let i = n + 1; ; i++){
        const comparsion = i.toString(2).split('').filter((v) => v === '1').length;
        if(comparsion === length){
            answer = i;
            break;
        }
    }
    return answer;
}