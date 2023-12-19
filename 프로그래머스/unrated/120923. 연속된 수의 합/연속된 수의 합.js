function solution(num, total) {
    for(let i = -100; ; i++){
        let cnt = 0;
        let arr = [];
        for(let j = 0; j < num; j++) {
            cnt += i + j;
            arr.push(j + i);
        }
        if(cnt === total) return arr;
    }
}