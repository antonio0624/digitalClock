const timeDiv = document.getElementById("clock");
const dateDiv = document.getElementById("date");
const dayList = ["일", "월", "화", "수", "목", "금", "토"];

function getTime() {
    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = dayList[ now.getDay() ];

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let noon = "오전";
   
    if(hour>11){
        noon="오후";
        hour=hour-12;
        if(hour==0){
            hour=12;
        }
    }

    timeDiv.textContent = noon + " " + formatNumber(hour) + ":" + formatNumber(minute) + ":" + formatNumber(second);
    dateDiv.textContent = year + "년 " + month + "월 " + date + "일 " + day + "요일";
}
 
getTime();
setInterval(getTime,1000);

function formatNumber(num) {
    if(num<10){
        return "0"+num;
    }
    return num;
}
