setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    h = 30 * htime + mtime/2;
    m = 6 * mtime;
    s = 6 * stime;

    hour.style.transform = `rotate(${h}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    seconds.style.transform = `rotate(${s}deg)`;


}, 1000)