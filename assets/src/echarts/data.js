export default function myData(data, length,variables) {
    let start = data;
    let array=[]
    for (let i = 0; i <= length; i++) {
        let change = start * variables * Math.random();
        if (Math.floor(change) % 4 === 0) {
            change = change * -1;
        }
        start = start + change;
       array.push(Math.floor(start));
    }
    return array;
}