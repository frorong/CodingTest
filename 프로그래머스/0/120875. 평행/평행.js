function solution(dots) {
    let answer = 0;
    
    dfs([],[]);
    
    function dfs(cur, visited){
        if(cur.length === 4) {
            const giulgi1 = (cur[0][1] - cur[1][1]) / (cur[0][0] - cur[1][0]);
            const giulgi2 = (cur[2][1] - cur[3][1]) / (cur[2][0] - cur[3][0]);
            if(giulgi1 === giulgi2) {
            // console.log(cur, visited, giulgi1, giulgi2)
                answer = 1;
            };
            return;
        }
        
        dots.forEach((dot, i) => {
            if(!visited.includes(i)) {
                dfs([...cur, dot], [...visited, i]);
            }
        });
    }
    
    return answer;
}