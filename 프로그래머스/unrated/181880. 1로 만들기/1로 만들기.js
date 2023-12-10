function solution(num_list) {
    var answer = 0;
    num_list.forEach((v) => {
        let target = v;
        while(target > 1){
            answer++;
            console.log(target)
            if(target % 2 === 0) target /= 2;
            else target = (target - 1) / 2;
        }
    })
    return answer;
}