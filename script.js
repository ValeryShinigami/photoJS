function randomImage() {
    let fileNames = [
        "image/photo1.jpeg",
        "image/photo2.jpeg",
        "image/photo3.jpeg",
        "image/photo4.jpeg",
        "image/photo5.jpeg",
        "image/photo6.jpeg",
        "image/photo7.jpeg",
        "image/photo8.jpeg",
        "image/photo9.jpeg",
        "image/photo10.jpeg",
      ],
      randomIndex = Math.floor(Math.random() * fileNames.length),
      backgroundImage = 'url(' + fileNames[randomIndex] + ')';
  
    document.getElementById('back').style.backgroundImage = backgroundImage;
  }
  
  randomImage();
  setInterval(randomImage, 3000);
 