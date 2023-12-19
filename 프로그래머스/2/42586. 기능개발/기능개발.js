function solution(progresses, speeds) {
    var answer = [];
    let stack = [];
    progresses.map((v,i) => Math.ceil((100 - v) / speeds[i])).forEach((v) => {
        if(!stack[0] || stack[0] >= v) stack.push(v);
        else {
            answer.push(stack.length);
            stack = [v];
        }
    });
    return [...answer, stack.length];
}