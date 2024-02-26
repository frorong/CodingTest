function solution(files) {
    let newFiles = files.map((v) => {
        let cnt = '';
        
        for(let i = 0; i < v.length; i++) {
            if(v[i] !== ' ' && !isNaN(v[i])) cnt += v[i];
            else if(cnt.length > 0) break;
        }
        const idx = v.indexOf(cnt);
        return [v.slice(0,idx), v.slice(idx, idx + cnt.length), v.slice(idx + cnt.length)];
    })
    
    newFiles = newFiles.sort((a,b) => {
        const [head1, num1, tail1] = a;
        const [head2, num2, tail2] = b;
        
        if(head1.toUpperCase() === head2.toUpperCase()) {
            if(parseInt(num1) === parseInt(num2)) return 0;
            else return parseInt(num1) - parseInt(num2);
        } else return head1.toUpperCase().localeCompare(head2.toUpperCase());
    })
    
    return newFiles.map((v) => v.join(''));
}