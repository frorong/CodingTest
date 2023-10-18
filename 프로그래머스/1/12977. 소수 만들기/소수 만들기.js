function solution(nums) {
    let answer = 0;
    
    for(let i  = 0; i < nums.length; i++) 
        for(let j = i+1; j < nums.length; j++) 
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                let isSosu = true;
                for(let l = 2; l < sum / 2; l++){
                    if(sum % l === 0) {
                        isSosu = false;
                        break;
                    };
                }
                if(isSosu) answer++;
            }
    
    return answer;
}