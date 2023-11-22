window.onload = () => {
  const btnStart = document.getElementById("btnStart");
  const btnStop = document.getElementById("btnStop");
  const btnReset = document.getElementById("btnReset");
  const btnAdd = document.getElementById("btnAdd");
  const btnClear = document.getElementById("btnClear");
  const marks = document.querySelector(".marks");

  let hrs = (min = sec = mil = 0),
    timer;

  let hrsd = (mind = secd = mild = "");

  btnStart.addEventListener("click", () => {
    timer = setInterval(() => {
      mil++;
      if (mil == 100) {
        sec++;
        mil = 0;
      }
      if (sec == 60) {
        min++;
        sec = 0;
      }
      if (min == 60) {
        hrs++;
        min = 0;
      }
      if (hrs == 24) {
        hrs = 0;
      }
      display();
    }, 10);
  });

  // This block will stop the stopwatch and add the time
  btnStop.addEventListener("click", () => {
    clearInterval(timer);
  });

  // This block will reset the stopwatch, so the value of all the
  btnReset.addEventListener("click", () => {
    hrs = min = sec = mil = 0;
    display();
  });
  // It will show the leading zeros on display when the hrs, min and sec are lower than 10; and mil is lower than 100

  function display() {
    hrsd = hrs < 10 ? "0" + hrs : hrs;
    mind = min < 10 ? "0" + min : min;
    secd = sec < 10 ? "0" + sec : sec;
    mild = mil < 10 ? "00" + mil : mil || mil < 100 ? "0" + mil : mil;

    document.querySelector(".hrs").innerText = hrsd;
    document.querySelector(".min").innerText = mind;
    document.querySelector(".sec").innerText = secd;
    document.querySelector(".mil").innerText = mild;
  }

  btnAdd.onclick = () => {
    let newPhrase = hrsd + ":" + mind + ":" + secd + ":" + mild;
    marks.innerHTML += "<li>" + newPhrase + "</li>";
  };

  btnClear.onclick = () => {
    marks.innerHTML = "";
  };
};
