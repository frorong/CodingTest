function solution(book_time) {
    var answer = 0;
    let rooms = [];
    
    const convertToSec = (time) => {
        const splited = time.split(':');
        return parseInt(splited[0]) * 60 + parseInt(splited[1]);
    }
    
    
    
    
    book_time = book_time.map(([start, end]) => {
        const newStart = convertToSec(start);
        const newEnd = convertToSec(end)+10;
        return [newStart, newEnd];
    }).sort((a,b) => a[0] - b[0]);
    
    book_time.forEach(([start, end]) => {
        const newRooms = [...rooms];
        if(rooms.length == 0) newRooms.push(end);
        else{
            for(let i = 0; i < rooms.length; i++){
                if(newRooms[i] <= start) {
                    newRooms[i] = end;
                    break;
                }
                if(i === newRooms.length - 1) newRooms.push(end);
            }
        }
        rooms = newRooms;
    })
    
    return rooms.length;
}