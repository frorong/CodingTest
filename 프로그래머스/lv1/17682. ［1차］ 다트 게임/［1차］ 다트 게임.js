function solution(dartResult) {
    let answer = 0;
    let arr = [];
    let cnt = 0;
    for(let i = 0; i < dartResult.length; i++){
        if(!isNaN(dartResult[i])) cnt++;
        if(cnt>=2 && isNaN(arr[arr.length - 1])){
            cnt = 0;
            i--;
            arr.push('/');
            continue;
        }
        arr.push(dartResult[i]);
    }
    let result = [];
    for(let i = 0; i < arr.length; i++){
        const v = arr[i];
        const lg = result.length;
        console.log(result)
        if(!isNaN(v)){
            if(v == '1' && arr[i+1] == '0'){
                result.push(10);
                i++;
            }
            else result.push(Math.floor(v));
        } 
        else if(v === '*'){
            result[lg - 1] *= 2;
            if(lg >= 2) result[lg - 2] *= 2;
        } else if(v === '#'){
            result[lg - 1] *= -1;
        } else if(v === 'S' || v === 'D' || v ==='T'){ 
            const gop = v === 'S' ? 1 : v === 'D' ? 2 : 3;
            result[lg - 1] = Math.pow(result[lg - 1], gop);
        }
    }
    result.forEach((v) => answer += v);
    
    return answer;
}