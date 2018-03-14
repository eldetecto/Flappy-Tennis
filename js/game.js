var gameDiv = document.getElementById('game_field');
var platformDiv = document.getElementById('platform');

gameDiv.onmousemove = function(e) {

/* Получаем координаты мышки */
  var gameDivCoords = gameDiv.getBoundingClientRect();
/* Левая граница движения платформы 
где: 
e.clientX - значение координты мышки по Х ( вопрос, почему считает не внутри дива ????????)
gameDiv.offsetLeft - левый отступ игрового поля от края экрана 
platformDiv.offsetWidth / 2 -половина ширины платформы
*/
  var calcLeft = e.clientX - gameDiv.offsetLeft - platformDiv.offsetWidth / 2;
/* Правая граница движения платформы */
  var gameRightX = gameDiv.offsetWidth - platformDiv.offsetWidth;
  
  /* облегченный код */
  var styleLeft = calcLeft

  if (calcLeft <= 0 ) { 
  	styleLeft = 0
  }

  if (calcLeft >= gameRightX) {
	styleLeft = gameRightX
  }

  platformDiv.style.left = styleLeft + 'px'


  /* старый код

  if (calcLeft >= 0 && calcLeft < gameRightX) {
  	platformDiv.style.left = calcLeft + 'px';	
  }  

  */

  console.log(calcLeft, gameRightX, 10)
    
};