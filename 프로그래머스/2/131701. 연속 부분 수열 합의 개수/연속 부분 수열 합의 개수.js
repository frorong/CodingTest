function solution(elements) {
    let arr = [];
    let str = [...elements, ...elements];
    
    elements.forEach((v, i) => {
        elements.forEach((k, j) => {
            let cnt = 0;
            const temp = str.slice(j, i+j+1);
            temp.forEach((v) => cnt += parseInt(v));
            arr.push(cnt);
        })
    })
    arr = [...new Set(arr)];
    
    return arr.length;
}