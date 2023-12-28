document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.typing-animation');
    var text = element.textContent.trim();
    element.textContent = '';
  
    function typeWriter(text, i) {
      if (i < text.length) {
        var span = document.createElement('span');
        span.textContent = text[i];
        element.appendChild(span);
  
        if (i === text.length - 1) {
          span.style.animation = 'blink-caret 0.5s step-end infinite';
        }
  
        setTimeout(function() {
          typeWriter(text, i + 1);
        }, 100);
      }
    }
  
    // Inicia la animación
    typeWriter(text, 0);
  });
  