let currentImageIndex = 0;
const images = document.querySelectorAll('.image-gallery img');

function showImage(step) {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex += step;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  images[currentImageIndex].style.display = 'block';
}
