function solution(numbers) {
    return numbers.map((v) => {
        if(v % 2 == 0) return v + 1;
        let str = v.toString(2);
        const index = str.lastIndexOf('0');
        if(index === -1) return parseInt(`10${str.slice(1)}`, 2);
        return parseInt(`${str.slice(0,index)}10${str.slice(index+2)}`, 2);
    })
}