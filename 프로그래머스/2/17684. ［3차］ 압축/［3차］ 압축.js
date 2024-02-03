function solution(msg) {
    const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var answer = [];
    for(let i = 0; i < msg.length; i++){
        let temp = '';
        for(let j = 0; ; j++){
            if(!arr.includes(temp + msg[i+j])) break;
            temp += msg[i+j];
        }
        arr.push(temp + msg[i+temp.length]);
        answer.push(arr.indexOf(temp)+1);
        i += temp.length - 1;
    }
    return answer;
}