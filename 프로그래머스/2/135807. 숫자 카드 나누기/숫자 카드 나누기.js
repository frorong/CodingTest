function gcd(a, b) {
  while(b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function allGcd(arr) {
  let result = arr[0];
  
  for(let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
    
    if(result === 1) return 1;
  }
  return result;
}

function solution(arrayA, arrayB) {
    const a = allGcd(arrayA);
    const b = allGcd(arrayB);
    
    for(let i = Math.max(a,b); i > 0 ; i--){
        if(a % i === 0) for(let j = 0; j < arrayB.length; j++) {
            if(arrayB[j] % i === 0) break;
            else if(j === arrayB.length - 1) return i;
        }
        if(b % i === 0) for(let j = 0; j < arrayA.length; j++) {
            if(arrayA[j] % i === 0) break;
            else if(j === arrayA.length - 1) return i;
        }
    }
    
    return 0;
}