function solution(operations) {
    const queue = [];
    
    operations.forEach((v) => {
        const req = v.split(' ');
        if(req[0] == 'I') queue.push(parseInt(req[1]));
        else {
            let del = 0;
            if(req[1][0] == '-') del = Math.min(...queue);
            else del = Math.max(...queue);
            queue.splice(queue.indexOf(del), 1);
        }
    })
    
    return queue.length === 0 ? [0,0] : [Math.max(...queue), Math.min(...queue)];
}