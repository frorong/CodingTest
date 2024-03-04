function solution(n) {
    const arr = [];
    let [x,y] = [0,0];
    let cnt = 0; 
    
    for(let i = 0; i < n; i++){
        const temp = [];
        for(let j = 0; j <= i; j++) temp.push(0);
        arr.push(temp)
    }
    
    
    while(true){
        if(arr[y][x] == 0) arr[y][x] = ++cnt;
        if(x !== 0 && arr[y-1][x-1] == 0 && (x + 1 == n || arr[y][x+1] !== 0)) {
            y--;
            x--;
        } else if(y + 1 < n && arr[y+1][x] == 0) y++;
        else if(x + 1 < n && arr[y][x+1] == 0) x++;
        else break;
    }
    
    return arr.flat();
}