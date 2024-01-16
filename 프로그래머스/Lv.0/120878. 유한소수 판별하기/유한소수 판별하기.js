function solution(a, b) {
    while(true){
        let isChanged = false;
        for(let i = 2; i <= b; i++){
            if(a % i == 0 && b % i == 0) {
                a /= i;
                b /= i;
                isChanged = true;
                break
            }
        }
        if(!isChanged) break;
    }
    
    while(true){
        if(b == 1) return 1;
        else if(b % 2 == 0) b /= 2;
        else if(b % 5 == 0) b /= 5;
        else return 2;
    }
}