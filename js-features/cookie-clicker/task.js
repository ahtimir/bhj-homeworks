const cookieImage = document.getElementById("cookie"),
    counter = document.getElementById("clicker__counter"),
    speedMetrics = document.getElementById("speed__metrics");

let lastClick = 0;

cookieImage.onclick = () => {
    cookieImage.width = 180;
    counter.textContent ++;
    setTimeout(() => {
        cookieImage.width = 200;
    }, 60);

    let newClick = new Date().getTime(),
        difference = newClick - lastClick;

    speedMetrics.textContent = (1000 / difference).toFixed(2);
    lastClick = new Date().getTime();
};
