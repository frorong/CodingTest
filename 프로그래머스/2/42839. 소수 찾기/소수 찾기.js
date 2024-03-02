function solution(numbers) {
    var answer = [];
    const arr = [...numbers];

    function primecheck(n) {
        if(n < 2) return;
        for (var i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return;
        answer.push(n);
    }
    
    dfs('', []);
    
    function dfs(num, visited){
        if(num.length === numbers) return;
        if(!answer.includes(parseInt(num)) && num) primecheck(parseInt(num));
        
        arr.forEach((v,i) => {
            if(!visited.includes(i)) dfs(num + v, [...visited, i]);
        })
    }
    
    return answer.length;
}