let days =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
], months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
let time = document.querySelector(".timeBox h1");
let dateElement = document.querySelector(".date");
let day = days[dayjs().day()];
let date = dayjs().date();
let month = dayjs().month();
let year = dayjs().year();



/* Select the date */

dateElement.innerHTML = `<h4 class="date font-semibold">${day}, ${date} ${month}, ${year}</h4>`;

function updateTime(){
    let hour = dayjs().hour();
    let minute = dayjs().minute();
    let seconds = dayjs().second();
    let all = [hour,minute,seconds];
    let append = all.map(function(time){
        if (time<10) {
            return `0${time}`;
        }
        else {
            return time;
        }
    })
time.innerHTML = ` <h1 class="sm:text-center  text-[4rem] font-bold">${append[0]}:${append[1]}:${append[2]}</h1>`

}
updateTime();
setInterval(updateTime,1000);