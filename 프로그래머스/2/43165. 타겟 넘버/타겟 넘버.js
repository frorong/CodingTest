function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    function dfs(sum, index) {
        if(numbers.length === index) {
            if(sum === target) answer++;
            return;
        }
        
        dfs(sum+numbers[index], index+1);
        dfs(sum-numbers[index], index+1);
    }
    return answer;
}