function solution(numlist, n) {
    numlist = numlist.sort((a,b) => b-a).sort((a,b) => Math.abs(n - a) - Math.abs(n - b));
    return numlist;
}