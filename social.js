//Facebook
document.getElementById('fb').addEventListener("click", function(e) {
  console.log("Facebook");
  FB.ui({
    method: 'share',
    quote: 'This project shows how useful an adequate process of data collection would be in tackling sexual crimes. Share this and put some pressure on our government to ensure quality in the data they recover!',
    hashtag: '#DatosAbiertos',
    href: 'https://marianaviro.github.io/delitos_sexuales_3/'
  }, function(response){
    console.log(response);
  });
});

//Twitter
var getWindowOptions = function() {
  var width = 500;
  var height = 350;
  var left = (window.innerWidth / 2) - (width / 2);
  var top = (window.innerHeight / 2) - (height / 2);

  return [
    'resizable,scrollbars,status',
    'height=' + height,
    'width=' + width,
    'left=' + left,
    'top=' + top,
  ].join();
};

var text = encodeURIComponent('This project shows how useful an adequate process of data collection would be in tackling sexual crimes. Share this and put some pressure on our government to ensure quality in the data they recover! https://marianaviro.github.io/delitos_sexuales_3/ #DatosAbiertos #MinTIC vía @PetiteLucia');
var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;

document.getElementById('tw').addEventListener("click", function(e) {
  e.preventDefault();
  var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
  win.opener = null;
});


//LinkedIn
document.getElementById('li').addEventListener("click", function(e) {
  console.log("LinkedIn");
});
