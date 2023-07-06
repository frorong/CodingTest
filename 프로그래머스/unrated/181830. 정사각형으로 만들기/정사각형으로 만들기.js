function solution(arr) {
    const hang = arr.length
    const yeol = arr[0].length;
    if(hang > yeol){
        arr.forEach((v,i) => {
            for(let j = 0; j < hang - yeol; j++) v.push(0);
        })
    } else if (yeol > hang){
        for(let i = 0; i < yeol - hang; i++) arr.push(arr[0].map((v,i) => 0));
    }
    return arr;
}