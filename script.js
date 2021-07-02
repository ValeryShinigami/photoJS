function randomImage() {
    let fileNames = [
        "image/photo1.jpeg",
        "image/photo2.jpeg"
      ],
      randomIndex = Math.floor(Math.random() * fileNames.length),
      backgroundImage = 'url(' + fileNames[randomIndex] + ')';
  
    document.getElementById('back').style.backgroundImage = backgroundImage;
  }
  
  randomImage();
  setInterval(randomImage, 500);
 