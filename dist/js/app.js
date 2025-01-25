(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function showTime() {
        let now = new Date;
        let hours = now.getHours();
        let minutes = now.getMinutes();
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let timeString = hours + ":" + minutes;
        document.getElementById("clock").innerText = timeString;
        setTimeout(showTime, 1e3);
    }
    showTime();
    window["FLS"] = true;
})();