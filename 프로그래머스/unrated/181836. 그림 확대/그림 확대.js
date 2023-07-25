function solution(picture, k) {
    let answer = [];
    picture.forEach((v,i) => {
        const result = v.split('').map((w,j) => {
            return w.repeat(k);
        }).join('');
        for(let i = 0; i < k; i++){
            answer.push(result)
        }
    })
    return answer;
}