function solution(cacheSize, cities) {
    let cache = [];
    let arr = [];
    let runTime = 0;
    if(cacheSize === 0) return cities.length * 5;
    cities.forEach((v,i) => {
        v = v.toUpperCase();
        if(arr.includes(v)) arr.splice(arr.indexOf(v),1);
        arr.push(v);
        if (cache.includes(v)) runTime += 1;
        else {
            if (cache.length === cacheSize) cache.splice(cache.indexOf(arr.shift()), 1, v);
            else cache.push(v);
            runTime += 5;
        } 
    });
    return runTime;
}
