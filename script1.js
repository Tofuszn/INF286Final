const images = [
    "Images/Lambo/Aventador/SVJ/svjgalaxy.jpg",
    "Images/Mclaren/570s/spider/570s spider 2.webp",
    "Images/Pagani/Huayra/Huayra 7.jpg",
    "Images/Koenigsegg/Jesko/jesko 10.jpg",
    "Images/Ferrari/LaFerrari/laferrari 4.jpg",
    "Images/porsche1demo.webp"
  ];
  
  let currentIndex = 0;
  
  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("slides").src = images[currentIndex];
  }
  