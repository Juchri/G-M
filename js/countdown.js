(function () {
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
      const weddingDay = "Oct 02, 2021 11:00:00";
      const countDown = new Date(weddingDay).getTime();
      x = setInterval(function() {
  
        const now = new Date().getTime();
        distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day));
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
  
          headline.innerText = "";
          countdown.style.display = "none";
          content.style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 1000)
    }());