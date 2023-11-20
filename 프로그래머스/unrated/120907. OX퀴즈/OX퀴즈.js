function solution(quiz) {
    var answer = [];
    quiz.forEach((v) => {
        const math = v.split(' ');
        if(math[1] === '-') answer.push(parseInt(math[0]) - parseInt(math[2]) === parseInt(math[4]) ? 'O' : 'X');
        else answer.push(parseInt(math[0]) + parseInt(math[2]) === parseInt(math[4]) ? 'O' : 'X');
    })
    return answer;
}