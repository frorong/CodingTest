function solution(dirs) {
    const stack = [];
    let x = 0;
    let y = 0;
    
    dirs.split('').forEach((v) => {
        const prev = [x,y];
        if(v == 'U' && y < 5) y++;
        else if(v == 'D' && y > -5) y--;
        else if(v == 'R' && x < 5) x++;
        else if(v == 'L' && x > -5) x--;
        
        if(x !== prev[0] || y !== prev[1]){
            if(!stack.includes(`${prev[0]}${prev[1]}${x}${y}`) && !stack.includes(`${x}${y}${prev[0]}${prev[1]}`)) stack.push(`${prev[0]}${prev[1]}${x}${y}`)
        }
    })
    
    return stack.length;
}