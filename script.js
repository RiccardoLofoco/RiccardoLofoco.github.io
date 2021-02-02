function toggle(y){
  x=document.getElementById(y);
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }
}

document.getElementById('bgmusic').play();
