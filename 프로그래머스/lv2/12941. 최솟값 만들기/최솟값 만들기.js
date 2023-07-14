function solution(A,B){
    let answer = 0;

    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);
    
    A.forEach((v,i) => {
        answer += v * B[i];
    })
    

    return answer;
}