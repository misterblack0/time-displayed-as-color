function toISOLocal(d) {
  var z = (n) => ("0" + n).slice(-2);
  var zz = (n) => ("00" + n).slice(-3);
  var off = d.getTimezoneOffset();
  var sign = off < 0 ? "+" : "-";
  off = Math.abs(off);

  return (
    d.getFullYear() +
    "-" +
    z(d.getMonth() + 1) +
    "-" +
    z(d.getDate()) +
    "T" +
    z(d.getHours()) +
    ":" +
    z(d.getMinutes()) +
    ":" +
    z(d.getSeconds()) +
    "." +
    zz(d.getMilliseconds()) +
    sign +
    z((off / 60) | 0) +
    ":" +
    z(off % 60)
  );
}

setInterval(function () {
  today = new Date();
  hex =
    "#" +
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    "" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes() +
    "" +
    (today.getSeconds() < 10 ? "0" : "") +
    today.getSeconds();
  document.querySelector("#clock").innerHTML = hex;
  var hex = "#" + toISOLocal(new Date()).substr(11, 8).replace(/:/g, "");
  document.getElementById("clock").innerHTML = hex;
  document.body.style.backgroundColor = hex;
}, 500); // 0.5s
