function solution(word) {
    const words = ['A','E','I','O','U'];
    const obj = {};
    let idx = 0;
    
    dfs('',0);
    
    function dfs(newWord, cnt) {
        if(cnt > 5) return;
        obj[newWord] = idx++;
        
        words.forEach((v) => dfs(newWord + v, cnt+1))
    }
    
    return obj[word];
}