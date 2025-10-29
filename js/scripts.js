document.querySelectorAll('.leer-mas-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = button.closest('.profile-card');
        const additionalDesc = card.querySelector('.additional-desc');
        
        if (additionalDesc.classList.contains('show')) {
          additionalDesc.classList.remove('show');
          button.textContent = 'Leer más';
        } else {
          additionalDesc.classList.add('show');
          button.textContent = 'Leer menos';
        }
      });
    });