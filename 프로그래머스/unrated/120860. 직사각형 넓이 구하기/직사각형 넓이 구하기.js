function solution(dots) {
    let newDots = [];
    const ul = dots.reduce((a, b) => a[0] > b[0] ? b : a);
    const ur = dots.reduce((a, b) => a[0] < b[0] ? b : a);
    const dl = dots.reduce((a, b) => a[1] > b[1] ? a : b);
    return (ur[0] - ul[0]) * (dl[1] - ul[1]);
}