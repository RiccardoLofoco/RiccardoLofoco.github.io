//script per il sito

//quando si clicca su un'immagine, viene aperta a tutto schermo

document.getElementsByTagName("img").addEventListener("click", function(){
  window.open(this.src);
})
