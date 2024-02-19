function solution(m) {
    let answer = -1;
    const xm = m[0].length-1;
    const ym = m.length-1;
    
    const q = [[0,0,0]];
    
    while(q.length > 0){
        const [x,y,cnt] = q.shift();
        
        if(x === xm && y === ym) {
            answer = cnt+1;
            break;
        }
        if(cnt >= (xm+1) * (ym+1)) return -1;
        
        if(x+1 < xm+1 && m[y][x+1] == 1) {
            m[y][x+1] = 0;
            q.push([x+1,y,cnt+1]);
        }
        if(y+1 < ym+1 && m[y+1][x] == 1) {
            m[y+1][x] = 0;
            q.push([x,y+1,cnt+1])
        };
        if(x-1 > -1 && m[y][x-1] == 1) {
            m[y][x-1] = 0;
            q.push([x-1,y,cnt+1]);
        };
        if(y-1 > -1 && m[y-1][x] == 1) {
            m[y-1][x] = 0;
            q.push([x,y-1,cnt+1]);
        };
    }
    
    return answer;
}
