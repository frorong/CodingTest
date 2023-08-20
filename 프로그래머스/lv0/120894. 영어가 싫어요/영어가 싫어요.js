function solution(numbers) {
    const nums = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    let cnt = '';
    return Math.floor(numbers.split('').map((v,i) => {
        cnt += v;
        if(nums[cnt] || cnt === 'zero') {
            const result = nums[cnt];
            cnt = '';
            return result;
        }
        return '';
    }).join(''));
}