const images = [
    "Images/Lambo/Aventador/SVJ/svjgalaxy.jpg",
    "Images/Mclaren/P1/GTR/mclaren p1 gtr 1.jpg",
    "Images/Pagani/Huayra/Huayra 7.jpg",
    "Images/Koenigsegg/Regera/regera 8.webp",
    "Images/Ferrari/812/comp/812 comp 2.jpg",
    "Images/porsche1demo.webp",

  ];
  




  let currentIndex = 0;
  
  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("slides").src = images[currentIndex];
  }
  