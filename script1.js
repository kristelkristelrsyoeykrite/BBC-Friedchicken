// Auto-scrolling functionality
const slider = document.querySelector('.slider');
const sliderWidth = slider.scrollWidth;

function autoScroll() {
  slider.scrollLeft += slider.offsetWidth;
  
  // Check if reached the end of the slider
  if (slider.scrollLeft + slider.offsetWidth >= sliderWidth) {
    // If reached the end, scroll back to the beginning
    slider.scrollLeft = 0;
  }
}

setInterval(autoScroll, 3000); // Adjust the interval as needed (in milliseconds)

