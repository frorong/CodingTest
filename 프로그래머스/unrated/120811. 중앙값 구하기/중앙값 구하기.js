function solution(array) {
    array = array.sort((a,b) => a-b);
    return array[parseInt(array.length / 2)];
}