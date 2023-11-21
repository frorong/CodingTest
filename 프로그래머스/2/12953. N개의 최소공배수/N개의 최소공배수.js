function solution(arr) {
    for(let i = 1; ; i++){
        let isInsu = true;
        arr.forEach((v) => {if(i % v !== 0) isInsu = false});
        if(isInsu) return i
    }
}