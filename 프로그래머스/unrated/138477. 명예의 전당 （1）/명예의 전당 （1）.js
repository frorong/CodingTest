function solution(k, score) {
    let singers = [];
    return score.map((v,i) => {
        singers.push(v);
        singers.sort((a,b) => b-a);
        const top = singers.slice(0,k);
        return top[top.length-1];
    });
}