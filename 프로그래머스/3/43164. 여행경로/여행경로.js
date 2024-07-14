function solution(tickets) {
    var answer = [];
    
    tickets.forEach((ticket, i) => {
        if(ticket[0] === 'ICN') dfs(i, [i], ['ICN', ticket[1]]);
    })
    
    function dfs(cur, visited, order){
        if(visited.length === tickets.length) {
            answer.push(order);
            return;
        };
        
        tickets.forEach((ticket, i) => {
            if(!visited.includes(i) && tickets[cur][1] === ticket[0]) dfs(i, [...visited, i], [...order, ticket[1]]);
        })
    }
    
    const temp = answer.map((v) => v.join('')).sort()[0];
    const result = [];
    
    for (let i = 0; i < temp.length; i += 3) {
      result.push(temp.substring(i, i + 3));
    }
    
    return result;
}