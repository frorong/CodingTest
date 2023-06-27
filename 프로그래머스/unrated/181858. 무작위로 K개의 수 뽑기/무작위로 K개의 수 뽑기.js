function solution(arr, k) {
    let newArr = [...new Set(arr)].splice(0,k);
    for(let i = newArr.length; i < k; i++) newArr.push(-1);
    return newArr;
}