function solution(arr, queries) {
    return queries.map((v) => {
        let temp = -1;
        for(let i = v[0]; i <= v[1]; i++) if(arr[i] > v[2] && (temp == -1 || temp > arr[i])) temp = arr[i];
        return temp;
    })
}