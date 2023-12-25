function solution(n,a,b)
{
    let arr = new Array(n).fill(0);
    let answer = false;
    arr[a-1] = a;
    arr[b-1] = b;
    while(true){
        let newArr = [];
        let isTrue = false;
        answer++;
        arr.forEach((v,i) => {
            if(i % 2 == 0){
                if(v + arr[i+1] == a + b) isTrue = true;
                if(v > arr[i+1]) newArr.push(v);
                else newArr.push(arr[i+1]);
            }
        })
        arr = newArr;
        if(isTrue) break;
    }
    return answer;
}
