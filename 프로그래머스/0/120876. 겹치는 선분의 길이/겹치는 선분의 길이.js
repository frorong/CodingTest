function solution(lines) {
    var answer = [];
    const arr = [];
    
    lines.forEach((v) => {
        for(let i = v[0]; i < v[1]; i++) arr.push(`${i}|${i+1}`);
    })
    
    const newArr = [];
    arr.forEach((v) => {
        if(!newArr.includes(v)) newArr.push(v);
        else if(!answer.includes(v)) answer.push(v);
    })
    
    return answer.length;
}