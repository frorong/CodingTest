function solution(arr) {
    let answer;
    if(arr.length == 1) return arr;
    for(let i = 1; i < arr.length; i++){
        if(2 ** i >= arr.length) {
            const newArr = Array(2 ** i).fill(0, arr.length, 2 ** i);
            answer = [...arr, ...newArr].filter((v) => v != null);;
            break;
        }
    }
    return answer;
}