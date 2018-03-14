var gameDiv = document.getElementById('game_field');
var platformDiv = document.getElementById('platform');

gameDiv.onmousemove = function(e) {

  var gameDivCoords = gameDiv.getBoundingClientRect();
  var calcLeft = e.clientX - gameDiv.offsetLeft - platformDiv.offsetWidth / 2;
  var gameRightX = gameDiv.offsetWidth - platformDiv.offsetWidth;

  if (calcLeft >= 0 && calcLeft < gameRightX) {
  	platformDiv.style.left = calcLeft + 'px';	
  }

  console.log(calcLeft, gameRightX, 10)
    
};