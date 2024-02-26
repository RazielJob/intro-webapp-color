document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');
  
    function updateColor() {
      const color = colorPicker.value;
      const red = parseInt(color.substring(1, 3), 16);
      const green = parseInt(color.substring(3, 5), 16);
      const blue = parseInt(color.substring(5, 7), 16);
      redRange.value = red;
      greenRange.value = green;
      blueRange.value = blue;
      redInput.value = red;
      greenInput.value = green;
      blueInput.value = blue;
      colorBox.style.backgroundColor = color;
    }
  
    redRange.addEventListener('input', function() {
      redInput.value = redRange.value;
      updateColor();
    });
  
    greenRange.addEventListener('input', function() {
      greenInput.value = greenRange.value;
      updateColor();
    });
  
    blueRange.addEventListener('input', function() {
      blueInput.value = blueRange.value;
      updateColor();
    });
  
    redInput.addEventListener('input', function() {
      redRange.value = redInput.value;
      updateColor();
    });
  
    greenInput.addEventListener('input', function() {
      greenRange.value = greenInput.value;
      updateColor();
    });
  
    blueInput.addEventListener('input', function() {
      blueRange.value = blueInput.value;
      updateColor();
    });
  
    colorPicker.addEventListener('input', updateColor);
  
    updateColor();
  });
  