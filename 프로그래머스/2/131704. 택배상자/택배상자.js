function solution(order) {
    var answer = 0;
    const stack = [];
    let flag;
    
    for(let i = 1; i <= order.length; i++) {
        stack.push(i);
        
        while(stack[stack.length-1] === order[answer] && stack.length > 0){
            stack.pop();
            answer++;
        }
    }
    return answer;
}