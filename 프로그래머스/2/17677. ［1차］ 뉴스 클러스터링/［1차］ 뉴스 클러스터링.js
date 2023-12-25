function isEng(str){
    return (str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z')
}

function formatStr(str){
    return str.split('').map((v,i)=>{
        if(i + 1 !== str.length && isEng(v) && isEng(str[i+1])) return v.toUpperCase()+str[i+1].toUpperCase();
    }).filter((v) => v);
}

function solution(str1, str2) {
    let arr1 = formatStr(str1);
    let arr2 = formatStr(str2);
    const temp = [...arr2]
    
    let and = [];
    arr1.forEach((v) => {
        if(arr2.includes(v)) and.push(v);
        arr2[arr2.indexOf(v)] = null;
    })
    let or = arr1.length + temp.length - and.length;
    if(and.length == or) return 65536;
    
    return parseInt(and.length / or * 65536);
}