function solution(emergency) {
    const arr = [...emergency].sort((a,b) => b-a);
    return emergency.map((v) => {
        const newV = v;
        return arr.indexOf(newV) + 1
    });
}