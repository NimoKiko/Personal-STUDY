
    var time = document.getElementsByClassName("time");
    setInterval(() => {
      let now = getTime();
      for (let item of time) {
        item.innerHTML = now;
      }
    }, 1000);
    function getTime() {
      var date = new Date();

      let hour = date.getHours();
      if (hour < 10) hour = "0" + hour;
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
      let seconds = date.getSeconds();
      if (seconds < 10) seconds = "0" + seconds;

      let now = `${hour} : ${minutes} : ${seconds}`;
      return now;
    }
  