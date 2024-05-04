function solution(today, terms, privacies) {
    let object = {};
    let answer = [];
    today = today.split('.');
    const b = parseInt(today[0])*28*12 + parseInt(today[1])*28 + parseInt(today[2]);
    for(let i = 0; i < terms.length; i++){
        terms[i] = terms[i].split(' ');
        object[`${terms[i][0]}`] = parseInt(terms[i][1]);
    }
    for(let i = 0; i < privacies.length; i++){
        privacies[i] = privacies[i].split(' ');
        privacies[i][0] = privacies[i][0].split('.');
        const a = parseInt(privacies[i][0][0])*28*12 + parseInt(privacies[i][0][1])*28 + parseInt(privacies[i][0][2]) + parseInt(object[privacies[i][1]])*28;
        if(a <= b)
            answer.push(i+1);
    }
    console.log(privacies, object)
    return(answer);
}