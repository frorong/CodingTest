function solution(priorities, location) {
    var answer = 0;
    let queue = [...priorities];
    let cnt = 0;
    queue[location] = String(queue[location]);
    while (true){
        const a = queue.shift();
        if(a != Math.max(...queue, a)) queue.push(a);
        else if(typeof a == "string") {
            answer = ++cnt;
            break;
        } else cnt++;
    }
    return answer;
}