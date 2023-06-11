function solution(n)
{
    let answer = 0;
    String(n).split('').forEach((i) => answer += Math.floor(i));
    return answer;
}