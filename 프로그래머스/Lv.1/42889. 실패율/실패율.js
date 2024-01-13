function solution(N, stages) {
    let arr = [];
    
    for(let i = 0; i < N; i++){
        const residual = stages.filter((v) => v == i+1).length;
        const challenger = stages.filter((v) => i < v).length;
        const fail = residual / challenger;
        
        arr.push([fail, i+1]);
    }
    
    return arr.sort((a,b) => b[0] - a[0]).map((v) => v[1]);
}