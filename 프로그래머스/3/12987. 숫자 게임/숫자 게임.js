function solution(A, B) {
    var answer = 0;
    
    const a = A.sort((a,b) => b-a);
    const b = B.sort((a,b) => b-a);
    
    for(let j = 0; j < a.length; j++) if(a[j] < b[answer]) answer++;
    
    return answer;
}