function solution(n, computers) {
    let answer = 0;
    let networks = []; 

    computers.forEach((v, i) => {
        if (!networks[i]) { 
            networks[i] = []; 
            dfs(i, i);
        }
    });

    function dfs(start, idx) {
        computers.forEach((v,i) => {
            if (computers[idx][i] && !networks[start][i]) {
                networks[start][i] = true; 
                dfs(start, i); 
            }
        })
    }

    const unique = [];
    networks.forEach(network => {
        const sorted = network.reduce((acc, isConnected, idx) => {
            if (isConnected) acc.push(idx);
            return acc;
        }, []).sort().join('');
        if (!unique.includes(sorted)) unique.push(sorted);
    });

    answer = unique.length; 

    return answer;
}
