const location = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2],
    '*': [3,0],
    0: [3,1],
    '#': [3,2],
}

function solution(numbers, hand) {
    var answer = '';
    let left = [3,0];
    let right = [3,2];
    
    const isRightHand = hand === 'right';
    
    const leftPlus = (v) => {
        answer += 'L';
        left = location[v];
    }
    const rightPlus = (v) => {
        answer += 'R';
        right = location[v];
    }
    
    numbers.forEach((v) => {
        if([1,4,7,'*'].includes(v)) leftPlus(v);
        else if([3,6,9,'#'].includes(v)) rightPlus(v);
        else {
            const lf = Math.abs(location[v][0] - left[0]) + Math.abs(location[v][1] - left[1]);
            const rf = Math.abs(location[v][0] - right[0]) + Math.abs(location[v][1] - right[1]);
            
            if(lf < rf) leftPlus(v);
            else if(rf < lf || isRightHand) rightPlus(v);
            else leftPlus(v);
        }
    })
    
    return answer;
}