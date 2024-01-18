function solution(want, number, discount) {
    let answer = 0;
    const wnats = [];
    
    number.forEach((v,i) => {
        for(let j = 0; j < v; j++) wnats.push(want[i]);
    });
    
    discount.forEach((v,i) => {
        let sliced = discount.slice(i, 10+i);
        
        if(sliced.length >= 10) {
            sliced = sliced.join('');
            wnats.forEach((k) => sliced = sliced.replace(k,''));
            if(sliced.length === 0) answer++;
        }
    })
    
    return answer;
}