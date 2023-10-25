function solution(id_pw, db) {
    const result = db.filter((v) => id_pw[0] == v[0]);
    return result[0] ? (result[0][1] === id_pw[1] ? 'login' : 'wrong pw') : 'fail';
}