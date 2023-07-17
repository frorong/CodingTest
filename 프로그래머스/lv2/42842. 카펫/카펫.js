function solution(brown, yellow) {
    let answer = [];
    for(let i = yellow; i >= 1; i--){
        if(yellow % i !== 0) continue;
        const width = yellow / i;
        const height = yellow / width;
        const fakeBrown = 2 * (width+height) + 4;
        if(brown === fakeBrown){
            answer.push(width+2, height+2);
            break;
        }
    }
    return answer.sort((a,b) => b-a);
}