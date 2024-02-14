function solution(k, dungeons) {
    var answer = 0;
    
    dfs(k, [], 0);
    
    function dfs(p, visited, cnt){
        answer = Math.max(cnt, answer);
        if(cnt === dungeons.length || p <= 0) return;
            
        dungeons.forEach((v,j) => {
            if(!visited.includes(j) && v[0] <= p) dfs(p - v[1], [...visited, j], cnt + 1);
        })
    }
    
    return answer;
}