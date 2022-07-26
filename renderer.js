const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(() => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    hr.style.transform = `rotateZ(${(h*30)+((m*6)/12)}deg)`;
    mn.style.transform = `rotateZ(${m*6}deg)`;
    sc.style.transform = `rotateZ(${s*6}deg)`;

    hours.innerHTML = (h < 10) ? '0' + h : h;
    minutes.innerHTML = (m < 10) ? '0' + m : m;
    seconds.innerHTML = (s < 10) ? '0' + s : s;
});
