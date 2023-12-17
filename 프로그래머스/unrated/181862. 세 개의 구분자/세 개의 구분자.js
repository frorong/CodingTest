function solution(myStr) {
    myStr=myStr.replaceAll('a', '-');
    myStr=myStr.replaceAll('b', '-');
    myStr=myStr.replaceAll('c', '-');
    const result=myStr.split('-').filter((v) => v);
    return result.length > 0 ? result : ["EMPTY"];
}