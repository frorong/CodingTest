function solution(name, yearning, photo) {
    let answer = [];
    photo.forEach((names) => {
        let cnt = 0;
        names.forEach((userName) => {
            const index = name.indexOf(userName);
            if(index !== -1) cnt += yearning[index];
        })
        answer.push(cnt);
    })
    return answer;
}