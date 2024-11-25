const images = [
    "Images/lambo1demo.jpg",
    "Images/mclaren1demo.jpg",
    "Images/pagani1demo.jpg",
    "Images/koenigsegg1demo.jpg",
    "Images/ferrari1demo.jpg",
    "Images/porsche1demo.webp"
  ];
  
  let currentIndex = 0;
  
  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("slides").src = images[currentIndex];
  }
  