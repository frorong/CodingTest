function solution(s) {
    let answer = [0,0];
    
    while(s !== '1'){
        const delZero = s.replaceAll('0', '');
        const zeroCnt = s.length - delZero.length;
        s =  delZero.length.toString(2);
        answer = [answer[0]+1, answer[1] + zeroCnt];
    }
    
    return answer;
}