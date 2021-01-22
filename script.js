//script per il sito

//quando si clicca su un'immagine, viene aperta a tutto schermo

immagini = document.getElementsByTagName("img");

for (immagine in immagini){
  immagine.addEventListener("contextmenu",
      function(){
        if(confirm("Aprire l'immagine?")){
          window.open(immagine.url);
        }
      }
    );
}
