function solution(s) {
    var result = [];
    let answer = [];
    let cnt = '';
    for(let i = 1; i < s.length; i++){
        if(s[i] === '}' && i !== s.length - 1) {
            result.push(cnt);
            cnt = '';
        }
        else if(s[i] !== '{') cnt += s[i];
    }
    result = result.sort((a,b) => a.length - b.length).map((v) => v.split(',').sort((a,b) => a - b).filter((v) => v.length > 0));
    result.forEach((v,i) => {
        const temp = [...answer].sort((a,b) => a-b);
        for(let j = 0; j < v.length; j++){
            if(v[j] != temp[j]) {
                answer.push(parseInt(v[j]));
                break;
            }
        }
    })
    return answer;
}