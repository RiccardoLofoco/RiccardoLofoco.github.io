//script per il sito

//quando si clicca su un'immagine, viene aperta a tutto schermo

immagini = document.getElementsByTagName("img");

function apriimg(imgn){
  /*if(confirm("Aprire l'immagine?")){
    window.open(imgn.src);
  }*/
}
console.log(immagini);

for (immagine in immagini){
  immagine.addEventListener("click", apriimg(immagine));
}
