function solution(numbers) {
    var max = Math.max(...numbers);
    numbers[numbers.indexOf(max)] = 0;
    return max * Math.max(...numbers);
}