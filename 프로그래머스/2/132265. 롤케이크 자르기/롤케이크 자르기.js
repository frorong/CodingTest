function solution(topping) {
    var answer = 0;
    const s1 = new Set();
    const s2 = new Set();
    const l1 = [];
    const l2 = [];
    
    topping.forEach((v,i) => {
        if(i !== topping.length -1){
            s1.add(v);
            s2.add(topping.at(-1-i));
        
            l1.push(s1.size);
            l2.push(s2.size);
        }
    })
    
    l2.reverse();
    
    l1.forEach((v,i) => {
        if(v === l2[i]) answer++;
    })
    
    return answer;
}