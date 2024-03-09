function solution(number, k) {
    const stack = [];
    
    number.split('').forEach((v) => {
        while(stack.at(-1) < v && k-- > 0) stack.pop();
        stack.push(v);
    })
    
    return stack.join('').slice(0, stack.length - k);
}