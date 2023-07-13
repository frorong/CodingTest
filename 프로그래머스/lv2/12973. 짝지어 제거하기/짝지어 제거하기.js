function solution(s)
{
    let arr = s.split('');
    let a = [];
    arr.forEach((v,i) => {
        a.push(v);
        if(v === a[a.length - 2]){
            a.pop();
            a.pop();
        }
    })
    return a.length > 0 ? 0 : 1;
}