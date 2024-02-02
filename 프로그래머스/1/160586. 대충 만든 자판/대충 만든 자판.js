function solution(keymap, targets) {
    var answer = [];
    const obj = {};
    keymap.forEach((v) => {
        v.split('').forEach((k,i) => {
            if(!obj[k] || obj[k] > i+1) obj[k] = i+1;
        });
    })
    
    targets.forEach((v) => {
        let cnt = 0;
        const arr = v.split('');
        for(let i = 0; i < arr.length; i++){
            if (!obj[arr[i]]) {
                cnt = -1;
                break;
            };
            cnt += obj[arr[i]];
        }
        answer.push(cnt);
    })
                    
    return answer[0] ? answer : [-1];
}