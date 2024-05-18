function solution(n, costs) {
    let answer = 0;
    const parent = new Array(n).fill(0).map((_,i) => i);
    
    costs.sort((a,b)=>a[2]-b[2]);
     
    const getParent = (parent, x) => {
        if(parent[x] === x) return x;
        return parent[x] = getParent(parent,parent[x]);
    }
    
    const unionParent = (parent, x, y) => {
        const n1 = getParent(parent,x);
        const n2 = getParent(parent,y);
        if(n1 < n2) return parent[n2] = n1;
        return parent[n1] = n2;
    }
    
    const findParent = (parent, x, y) => {
        const n1 = getParent(parent,x);
        const n2 = getParent(parent,y);
        if(n1 === n2) return true;
        return false;
    }
    
    
    for(const cost of costs){
        if(!findParent(parent,cost[0],cost[1])){
            answer += cost[2];
            unionParent(parent,cost[0],cost[1]);
        }
    }
    return answer;
}