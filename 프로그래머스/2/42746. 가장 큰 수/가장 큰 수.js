function solution(numbers) {
    numbers = numbers.sort((a,b) => {
        const [na,nb] = [String(a), String(b)];
        const ab = na + nb;
        const ba = nb + na;
        return ba - ab;
    }).join('');
    return numbers[0] === '0' ? '0' : numbers;
}