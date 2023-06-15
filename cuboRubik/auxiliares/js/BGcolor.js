document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const navbar = document.querySelector('.navbar');
  
    colorPicker.addEventListener('change', function() {
      const selectedColor = colorPicker.value;
      navbar.style.backgroundColor = selectedColor;
    });
});
  