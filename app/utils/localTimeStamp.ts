export default function localTimeStamp(d?: Date): string {
    const date: Date = d ?? new Date();

    const arr = date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    }).split(', ');
    
    if(arr.length == 4) {
        return `${arr[0]}, ${arr[1]} - ${arr[2]}, ${arr[3]}`;
    } else {
        return arr.join(', ')
    }
}