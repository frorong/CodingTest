function solution(array, height) {
    return array.filter((v) => v > height).length;
}