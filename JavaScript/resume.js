
document.querySelector('.toggle').addEventListener('click', function() {
    const content = document.querySelector('.box');
    const sign = document.querySelector('.sign'); // To change the + to -
  
    // Toggle the 'open' class
    content.classList.toggle('open');
  
    // Toggle the sign between + and -
    if (content.classList.contains('open')) {
      sign.textContent = '-'; // Change to '-' when the content is shown
    } else {
      sign.textContent = '+'; // Change to '+' when the content is hidden
    }
  });
  