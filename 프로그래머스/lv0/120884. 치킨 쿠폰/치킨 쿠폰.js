function solution(chicken) {
    let result = Math.floor(chicken / 10);
    let coupon = result + chicken % 10;
    while(coupon >= 10){
        coupon -= 9;
        result++;
    }
    return result;
}