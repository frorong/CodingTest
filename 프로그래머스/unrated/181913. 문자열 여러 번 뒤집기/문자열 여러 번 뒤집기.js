function solution(my_string, queries) {
    queries.forEach((v,i) => {
        const first = my_string.slice(0, v[0]);
        const second = my_string.slice(v[0], v[1]+1).split('').reverse().join('');
        const third = my_string.slice(v[1]+1, my_string.length);
        my_string = first + second + third;
    })
    return my_string
}