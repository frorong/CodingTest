function solution(people, limit) {
    let a = 0;
    let cnt = 0;
    people.sort((a,b) => b-a);
    for(let i = 0; i < people.length - cnt; i++){
        if(people[people.length - (cnt+1)] + people[i] <= limit){
            a++;
            cnt++;
        }
        else a++;
    }
    return a;
}