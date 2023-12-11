function solution(citations) {
    var answer = 0;
    for(let h = 1; h <= citations.length; h++){
        let arr = [];
        citations.forEach((v) => {if(v >= h) arr.push(v)});
        if(arr.length >= h) answer = h;
    }
    return answer;
}