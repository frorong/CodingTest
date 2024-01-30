function solution(d) {
    var b = [];
    let c = [];
    d.forEach((v,i) => {
        c.push(v);
        let a = false;
        for(let j = i+1; j < d.length; j++){
            if(c[0] <= d[j]) c.push(d[j]);
            else {
                a = true;
                break;
            };
        }
        b.push(a ? c.length : c.length -1);
        c = [];
    })
    return b;
}