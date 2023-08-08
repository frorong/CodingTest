function solution(score) {
    score = score.map((v,i) => (v[0] + v[1]) / 2);
    const second = [...score];
    let arr = second.sort((a,b) => b-a).map((v,i) => {
        if(v === second[i-1]) return -1;
        return v;
    })
    score = score.map((v,i) => arr.indexOf(v)+1)
    return score;
}