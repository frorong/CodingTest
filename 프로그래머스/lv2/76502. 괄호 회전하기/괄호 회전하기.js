function check(str) {
    const left = ['(', '{', '['];
    const match = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    
    let stack = [];
    let answer = true;
    
    if (str.length % 2 !== 0) {
      return false;
    }
    
    for (let i = 0; i < str.length; i++) {
        if(left.includes(str[i])) stack.push(str[i]);
        else if(match[str[i]] === stack[stack.length - 1]) stack.pop();
        else {
            answer = false;
            break;
        }
    }
    
    if (stack.length !== 0) return false;
    return answer;
}

function solution(s) {
    let cnt = 0;
    if(check(s)) cnt++;
    for(let i = 1; i < s.length; i++){
        const str = s.substr(i,s.length-1) + s.substr(0,i);
        if(check(str)) cnt++;
    }
    return cnt;
}