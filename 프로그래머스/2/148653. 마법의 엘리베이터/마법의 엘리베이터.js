function solution(storey) {
    const arr = new Array(String(storey).length).fill(0).map((_,i) => 10 ** (i+1)).reverse();
    
    arr.push(1);
    
    let answer = 0;
    let idx = 0;
  
    while(storey !== 0) {
        if(idx !== arr.length -1){
            if(Math.abs(storey - arr[idx]) < Math.abs(storey - arr[idx+1])){
                storey -= arr[idx];
                answer++;
            }
            else if(Math.abs(storey + arr[idx]) < Math.abs(storey + arr[idx+1])){
                storey += arr[idx];
                answer++;
            }
            else idx++;
        } else {
            if(storey > 0) storey -= 1;
            else storey += 1;
            answer++;
        }
    }
    
    return answer;
}