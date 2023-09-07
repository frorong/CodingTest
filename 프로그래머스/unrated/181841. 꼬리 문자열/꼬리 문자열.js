function solution(str_list, ex) {
    return str_list.filter((v,i) => !v.includes(ex)).join('');
}