function solution(s) {
    const numbers = {
        zero : "0",
        one : "1",
        two : "2",
        three : "3",
        four : "4",
        five : "5",
        six : "6",
        seven : "7",
        eight : "8",
        nine : "9",
    }
    let answer = '';
    let strCnt = '';
    for(let i =0; i < s.length; i++){
        if(!isNaN(s[i])){
            answer += s[i];
        }
        else{
            strCnt += s[i];
            if(numbers[strCnt] != undefined){
                answer += numbers[strCnt];
                strCnt = '';
            }
        }
    }
    return parseInt(answer);
}