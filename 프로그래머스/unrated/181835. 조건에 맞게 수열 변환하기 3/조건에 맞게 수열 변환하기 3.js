function solution(arr, k) {
    const isOdd = k % 2 === 1;
    return arr.map((v) => isOdd ? v * k : v + k);
}