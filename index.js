setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    h = 30 * htime + mtime / 2;
    m = 6 * mtime;
    s = 6 * stime;

    hour.style.transform = `rotate(${h}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    seconds.style.transform = `rotate(${s}deg)`;

    am = "AM";
    if (htime > 12) {
        htime -= 12;
        am = "PM";
    }
    if (htime == 0) {
        htime = 12;
    }
    htime = (htime < 10) ? "0" + htime : htime;
    mtime = (mtime < 10) ? "0" + mtime : mtime;
    stime = (stime < 10) ? "0" + stime : stime;

    time = htime + ":" + mtime + ":" + stime + " "+am;
    document.getElementById("digital").innerText = time;

}, 1000)