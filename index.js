const hr = document.querySelector('#hour');
const mn = document.querySelector('#minute');
const se = document.querySelector('#second');

let colck = setInterval(() => {
    let date_now = new Date();
    let hour = date_now.getHours()
    let minute = date_now.getMinutes()
    let second = date_now.getSeconds()

    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }

    hr.textContent = hour
    mn.textContent = minute
    se.textContent = second
});