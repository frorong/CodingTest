function solution(array) {
    const arrLength = array.join('').length
    const newLength = array.join('').replaceAll('7','').length;
    return arrLength - newLength;
}