document.getElementById('fb').addEventListener("click", shareFB);
document.getElementById('tw').addEventListener("click", shareTW);
document.getElementById('li').addEventListener("click", shareLI);

function shareFB() {
  console.log("Facebook");
  FB.ui({
    method: 'share',
    quote: 'This project shows how useful an adequate process of data collection would be in tackling sexual crimes. Share this and put some pressure on our government to ensure quality in the data they recover!',
    hashtag: '#DatosAbiertos',
    href: 'https://marianaviro.github.io/delitos_sexuales_3/'
  }, function(response){
   // Debug response (optional)
    console.log(response);
  });
}

function shareTW() {
  console.log("Twitter");
}

function shareLI() {
  console.log("LinkedIn");
}
