
document.querySelector('.toggle').addEventListener('click', function() {
    const content = document.querySelector('.box');
    const sign = document.querySelector('.sign');
  
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      sign.textContent = '-'; 
    } else {
      sign.textContent = '+'; 
    }
  });
  