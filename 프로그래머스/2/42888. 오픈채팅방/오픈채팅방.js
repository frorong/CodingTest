function solution(record) {
    const user = {};
    var answer = [];
    
    record.forEach((v) => {
        const [IO, id, name] = v.split(' ');
        if(IO !== 'Leave') user[id] = name;
        if(IO !== 'Change') answer.push([id,IO == 'Enter' ? '들어왔습니다.' : '나갔습니다.']);
    })
    
    return answer.map((v) => `${user[v[0]]}님이 ${v[1]}`);
}