function solution(numer1, denom1, numer2, denom2) {
    let child = (numer1 * denom2 + numer2 * denom1);
    let mom = (denom1 * denom2);
    while(true){
        let isBreak = true;
        for(let i = 2; i <= mom; i++){
            if(child % i + mom % i === 0) {
                child /= i;
                mom /= i;
                isBreak = false;
                break;
            }
        }
        if(isBreak) break;
    }
    return [child, mom];
}