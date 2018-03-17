// Переменные -----------------------------------------------------------------
var gameDiv = document.getElementById('game_field');
var platformDiv = document.getElementById('platform');
var ballDiv = document.getElementById('platform');
//-----------------------------------------------------------------------------

// Перемещение платформы ------------------------------------------------------
gameDiv.onmousemove = function(e) {

// Получаем координаты мышки
  var gameDivCoords = gameDiv.getBoundingClientRect();
/* Левая граница движения платформы 
где: 
e.clientX - значение координты мышки по Х ( вопрос, почему считает не внутри дива ????????)
gameDiv.offsetLeft - левый отступ игрового поля от края экрана 
platformDiv.offsetWidth / 2 -половина ширины платформы
*/
  var calcLeft = e.clientX - gameDiv.offsetLeft - platformDiv.offsetWidth / 2;
//Правая граница движения платформы
  var gameRightX = gameDiv.offsetWidth - platformDiv.offsetWidth;
  
  // облегченный код 
  var styleLeft = calcLeft;

  if (calcLeft <= 0 ) { 
  	styleLeft = 0
  }

  if (calcLeft >= gameRightX) {
	styleLeft = gameRightX
  }

  platformDiv.style.left = styleLeft + 'px';


  /* старый код

  if (calcLeft >= 0 && calcLeft < gameRightX) {
  	platformDiv.style.left = calcLeft + 'px';	
  }  

  */
   
};
//-----------------------------------------------------------------------------

// Перемещение шарика ---------------------------------------------------------
/*
var ballTimerId = setInterval(function(e) {
 
	var gameDivCoords = gameDiv.getBoundingClientRect();
	var ballCalcTop = ballDiv.clientY;

	ballDiv.style.top = ballCalcTop - 1 + 'px'
		console.log(ballCalcTop, 0)
 }, 1000);
 */

var ballBottom = gameDiv.clientHeight - platformDiv.clientHeight; 

animate({
  duration: 2000,
  timing: makeEaseOut(bounce),
  draw: function(progress) {
    ball.style.top = ballBottom * progress + 'px'
  }
});


//-----------------------------------------------------------------------------