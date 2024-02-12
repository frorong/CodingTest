function solution(arr1, arr2) {
    const answer = new Array(arr1.length).fill(0).map(() => new Array(arr2[0].length).fill(0));
    
    arr1.forEach((v,i) => {
        for (let j = 0; j < arr2[0].length; j++) v.forEach((k,w) => answer[i][j] += k * arr2[w][j]);
    })
    
    return answer;
}
