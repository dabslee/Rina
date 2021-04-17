var updateBubbles = function() {
  var items = [];
  const period = 5.95;
  const speed = 10;
  var time = speed * ((new Date() / 1000.0) - Math.floor((new Date() / 1000.0)/period)*period);
  var value = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 6; j++) {
      let leftmargin = Math.round(i*300 + j*300 + (j%2)*150 + time*10 - 1700);
      let topmargin = Math.round(j*300 + time*10 - 700);
      value += `<div class="background_bubble" style="left:${leftmargin};top:${topmargin}"></div>`;
    }
  }
  document.getElementById("background_bubbles").innerHTML = value;
}
var timer = setInterval(updateBubbles, 10);