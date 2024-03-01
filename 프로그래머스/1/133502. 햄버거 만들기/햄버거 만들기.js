function solution(ingredient) {
    let cnt = 0;
    const stack = [];
    
    ingredient.forEach((v) => {
        stack.push(v);
        const l = stack.length;
        
        if(stack[l-1] == 1 && stack[l-2] == 3 && stack[l-3] == 2 && stack[l-4] == 1) {
            cnt++;
            stack.splice(l-4,4);
        }
    })
    
    return cnt;
}