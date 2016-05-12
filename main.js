console.log('I am actually a web developer now');

var trumpText = 'Donald Trump';
var drumpfText = 'IT IS DRUMPF, NOT TRUMP!';
var drumpfinated = 'Get Donald Trump back!';
var trumpinated = 'Make Donald Drumpf again!';
var isDrumpf = false;

/*for (var i = 0; i < 10; i += 1) {
  trumps += trump;
  drumpfs += drumpf;
}*/

//document.querySelector('.paragraph-ten-thousand').innerHTML = trumps;

document.querySelector('.button-tone-down').onclick = function() {
  if (isDrumpf == true) {
  //  document.querySelector('.paragraph-ten-thousand').innerHTML = trumps;
    document.querySelector('.angry-happy-image').src = "angry.jpg";
    document.querySelector('.button-tone-down').innerHTML = trumpinated;
    document.querySelector('h3').innerHTML = trumpText;

    isDrumpf = false;
  }
  else if (isDrumpf == false) {
  //  document.querySelector('.paragraph-ten-thousand').innerHTML = drumpfs;
    document.querySelector('.angry-happy-image').src = "happy.jpg";
    document.querySelector('.button-tone-down').innerHTML = drumpfinated;
    document.querySelector('h3').innerHTML = drumpfText;
    isDrumpf = true;
  }
}
