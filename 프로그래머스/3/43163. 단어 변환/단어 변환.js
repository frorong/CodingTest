function solution(begin, target, words) {
    var answer = 0;
    let visited = new Array(words.length).fill(false);

    dfs(begin, 0);

    function dfs(cur, cnt) {
        if (cur === target) {
            answer = cnt;
            return;
        }
        if (cnt === words.length) return;

        words.forEach((v, idx) => {
            if (!visited[idx]) {
                let newCnt = 0;
                for(let i = 0; i < v.length; i++) if(v[i] !== cur[i]) newCnt++;
                if(newCnt === 1) {
                    visited[idx] = true;
                    dfs(v, cnt + 1);
                    visited[idx] = false; 
                }
            }
        });
    }

    return answer;
}
