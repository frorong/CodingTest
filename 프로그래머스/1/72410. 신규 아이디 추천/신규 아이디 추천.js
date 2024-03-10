const okArr = ['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','-','_','.'];
      
function solution(new_id) {
    new_id = new_id.toLowerCase().split('').filter((v) => okArr.includes(v)).join('');
    while(new_id.includes('..')) new_id = new_id.replaceAll('..', '.');
    new_id = new_id.split('');
    if(new_id[0] === '.') new_id.shift();
    if(new_id.at(-1) === '.') new_id.pop();
    if(new_id.length == 0) new_id = ['a'];
    new_id = new_id.slice(0,15);
    if(new_id.at(-1) === '.') new_id.pop();
    while(new_id.length < 3) new_id.push(new_id.at(-1));
    new_id = new_id.join('');
    return new_id;
}