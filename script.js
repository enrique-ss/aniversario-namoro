const heart = document.getElementById('heart');
const countdownElement = document.getElementById('countdown');

// Data alvo: 04/12/2025 às 00:00
const targetDate = new Date('2025-12-04T00:00:00').getTime();

// Atualizar cronômetro
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.textContent = "00:00:00:00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = 
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Clique no coração
heart.addEventListener('click', function() {
    const now = new Date().getTime();
    
    if (now < targetDate) {
        alert('Tá ansiosa?');
    } else {
        heart.classList.add('beating');
        
        setTimeout(() => {
            heart.classList.remove('beating');
        }, 1600);
    }
});