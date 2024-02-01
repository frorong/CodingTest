function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach((v) => {
        const arr = v.split('');
        const sk = skill.split('');
        for(let i = 0; i < arr.length; i++){
            if (sk.includes(arr[i]) && sk[0] !== arr[i]) break;
            else if (sk[0] === arr[i]) sk.shift();
            if(i === arr.length - 1) answer++;
        }
    })
    
    return answer;
}