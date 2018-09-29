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
var getWindowOptionsTW = function() {
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

var text = encodeURIComponent('This project shows how useful an adequate process of data collection would be in tackling sexual crimes. Share this and put some pressure on the Colombian government to ensure quality in the data they recover! https://marianaviro.github.io/delitos_sexuales_3/ #DatosAbiertos #MinTIC vía @PetiteLucia');
var shareUrlTW = 'https://twitter.com/intent/tweet?text=' + text;

document.getElementById('tw').addEventListener("click", function(e) {
  e.preventDefault();
  var win = window.open(shareUrlTW, 'ShareOnTwitter', getWindowOptionsTW());
  win.opener = null;
});


//LinkedIn
var getWindowOptionsLI = function() {
  var width = 520;
  var height = 570;
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

var shareUrlLI = 'https://www.linkedin.com/shareArticle?mini=true&url=https://marianaviro.github.io/delitos_sexuales_3/&title=Sexual%20Crimes%20In%20Colombia&summary=This%20project%20shows%20how%20useful%20an%20adequate%20process%20of%20data%20collection%20would%20be%20in%20tackling%20sexual%20crimes%20Share%20this%20and%20put%20some%20pressure%20on%20the%20Colombian%20government%20to%20ensure%20quality%20in%20the%20data%20they%20recover&source=SexualCrimesInColombia';

document.getElementById('li').addEventListener("click", function(e) {
  e.preventDefault();
  var win = window.open(shareUrlLI, 'ShareOnLinkedIn', getWindowOptionsLI());
  win.opener = null;
});
