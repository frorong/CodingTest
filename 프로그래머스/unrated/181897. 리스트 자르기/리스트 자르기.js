function solution(n, slicer, num_list) {
    const start = n == 1 ? 0 : slicer[0];
    const end = n == 2 ? num_list.length : slicer[1] + 1;
    let answer = num_list.slice(start, end);
    if(n == 4){
        let result = [];
        for(let i = 0; i < answer.length; i++) if(i % slicer[2] === 0) result.push(answer[i]);
        answer = result;
    }
    return answer;
}