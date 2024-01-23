function solution(fees, records) {
    function parseMin(time){
        const [hour,min] = time.split(':');
        return parseInt(hour) * 60 + parseInt(min);
    }
    
    const car = {};
    const fee = {};
    const max = 1439;
    
    records.forEach((v) => {
        const [time, num, io] = v.split(' ');
        
        if(!car[num]) car[num] = time;
        else {
            const prev = parseMin(car[num]);
            const cur = parseMin(time);
            
            if(!fee[num]) fee[num] = cur - prev;
            else fee[num] += cur - prev;
            
            car[num] = null;
        }
    })
    
    for(const [num, time] of Object.entries(car)){
        if(time) {
            const prev = parseMin(time);
            
            if(!fee[num]) fee[num] = max - prev;
            else fee[num] += max - prev;
        }
    }
    
    let arr = [];
    
    for(const [num, time] of Object.entries(fee)){
        if(time <= fees[0]) arr.push([parseInt(num), fees[1]]);
        else {
            let cnt = fees[1] + Math.floor((time - fees[0]) / fees[2]) * fees[3];
            if((time - fees[0]) % fees[2]) cnt += fees[3];
            arr.push([parseInt(num), cnt])
        }
    }
    
    return arr.sort((a,b) => a[0] - b[0]).map((v) => v[1]);
}