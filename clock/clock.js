let clock = document.querySelector('.clock');
function time() {
let date = new Date();
let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
// let month = date.getUTCMonth();
clock.innerHTML = `${hour}:${min}:${sec}`;
}
setInterval(time, 100);