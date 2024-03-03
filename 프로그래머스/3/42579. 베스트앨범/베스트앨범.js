function solution(genres, plays) {
    var answer = [];
    const obj = {};
    const playObj = [];
    
    genres.forEach((v,i) => {
        if(obj[v]) obj[v] = obj[v] + plays[i];
        else obj[v] = plays[i];
        
        playObj.push([i, plays[i], v]);
    })
    
    const seq = [];
    for(const k of Object.entries(obj)) seq.push(k);
    seq.sort((a,b) => b[1] - a[1]);
    playObj.sort((a,b) => b[1] - a[1]);
    
    seq.forEach((v) => {
        playObj.forEach((k) => {
            if(k[2] === v[0]) {
                const idx = answer.indexOf(v[0]);
                const lastIdx = answer.lastIndexOf(v[0]);
                if(idx == -1) answer.push(k[0], v[0]);
                else if(idx === lastIdx) answer.push(k[0], v[0]);
            }
        })
    })
    
    return answer.filter((v,i) => i % 2 !== 1);
}