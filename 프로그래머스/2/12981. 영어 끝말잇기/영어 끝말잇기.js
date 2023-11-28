function solution(n, words) {
    let arr = [];
    for(let i = 0; i < words.length; i++){
        const temp = arr[arr.length - 1];
        if(i !== 0 && (temp[temp.length - 1] !== words[i][0] || words[i].length === 1 || arr.includes(words[i]))) break;
        arr.push(words[i]);
    }
    return arr.length === words.length ? [0,0] : [arr.length % n + 1, Math.floor(arr.length / n) + 1];
}