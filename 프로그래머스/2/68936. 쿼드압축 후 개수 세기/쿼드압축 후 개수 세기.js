function solution(arr) {
    var answer = [0,0];
    
    recursion(0,0, arr.length);
    
    function recursion(y,x,len){
        let isSame = true;
        for(let i = y; i < y + len; i++){
            for(let j = x; j < x + len; j++){
                if(arr[i][j] !== arr[y][x]){
                    isSame = false;
                    break;
                }
            }
            if(!isSame) break;
        }
        
        if(isSame) {
            answer[arr[y][x]]++;
            return;
        }
        
        const half = len / 2;
        recursion(y, x, half);
        recursion(y + half, x, half);
        recursion(y, x + half, half);
        recursion(y + half, x + half, half);
    }
    
    return answer;
}
