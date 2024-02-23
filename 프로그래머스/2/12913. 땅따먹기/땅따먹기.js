function solution(land) {
    var answer = 0;
    
    land.forEach((v,i) => {
        if(i !== 0) v.forEach((k,j) => {
            let arr = [];
            for(let w = 0; w < 4; w++) if(w !== j) arr.push(land[i-1][w]);
            land[i][j] += Math.max(...arr)
        })
    })
    
    return Math.max(...land[land.length-1]);
}