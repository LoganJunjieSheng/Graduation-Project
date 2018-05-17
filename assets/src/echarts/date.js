export default function myDate() {
    let month=1;
    let day=1;
    let date=[];
    for(;month<=12;month++){
        for(;day<=30;day++){
            let temp='2017/'+month+'/'+day;
            date.push(temp);
        }
        day=1;
    }
    return date;
}