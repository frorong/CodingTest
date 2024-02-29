function solution(routes) {
    routes.sort((a, b) => b[0] - a[0]); 
    const cameras = [routes.shift()]; 
    
    while (routes.length > 0) {
        const [on, out] = routes.shift();
        const [lastOn, lastOut] = cameras.at(-1); 
        if (on > lastOut || out < lastOn) cameras.push([on, out]); 
    }
    return cameras.length;
}
