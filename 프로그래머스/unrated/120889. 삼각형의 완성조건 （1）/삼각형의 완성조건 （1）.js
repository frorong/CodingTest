function solution(sides) {
    const max = Math.max(...sides);
    sides.splice(sides.indexOf(max), 1);
    return sides[0] + sides[1] > max ? 1 : 2;
}