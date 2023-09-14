function solution(myString) {
    return myString.split('').map((v,i) => v < 'l' ? 'l' : v).join('');
}