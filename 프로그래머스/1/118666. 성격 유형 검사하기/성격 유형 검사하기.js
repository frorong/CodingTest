function solution(survey, choices) {
    var answer = '';
    const obj = {
        R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0,
    }
    
    survey.forEach((item,i) => {
        const choice = choices[i];
        
        let type;
        if(choice < 4) type = item[0];
        else if(choice > 4) type = item[1];

        if(choice !== 4) obj[type] += Math.abs(4 - choice);
    })
    
    const types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    types.forEach(([a,b]) => {
        const aResult = obj[a];
        const bResult = obj[b];
        if(aResult < bResult) answer += b;
        else answer += a;
    })
    
    return answer;
}