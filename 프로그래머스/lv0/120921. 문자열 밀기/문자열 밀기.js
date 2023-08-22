function solution(A, B) {
    var answer = -1;
    let newA = A;
    for(let i = 0; i < A.length; i++){
        if(newA == B){
            answer = i;
            break;
        }
        const a = newA[newA.length - 1];
        newA = newA.substring(0, newA.length - 1);
        newA = a + newA;
    }
    return answer;
}