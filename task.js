
        function Time() {
    let time = Number(document.getElementById("timer").innerText);
    let interval = setInterval(function() {
        time -= 1;
        document.getElementById("timer").innerText = time;
        console.log(time);
        if (time <= 0) {
            clearInterval(interval);
            alert("Вы победили в конкурсе!");
        }
    }, 1000);
}

Time();