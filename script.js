const heart = document.getElementById('heart');
const countdownElement = document.getElementById('countdown');
const firstPage = document.getElementById('firstPage');
const mainPage = document.getElementById('mainPage');

// Data alvo: 04/12/2025 às 00:00
const targetDate = new Date('2025-12-04T00:00:00').getTime();

// Data de início do relacionamento: 04/12/2023 às 15:00
const relationshipStart = new Date('2023-12-04T15:00:00').getTime();

// Frases do oráculo baseadas no horário
const oracleMessages = {
    madrugada: [
        "Mesmo nas horas mais escuras, você é minha luz",
        "Penso em você até nas madrugadas mais silenciosas",
        "Você deve estar dormindo... sonhe comigo ❤️",
        "A noite é nossa testemunha silenciosa"
    ],
    manha: [
        "Bom dia, meu amor! Que seu dia seja iluminado",
        "Acordei pensando em você",
        "Você é a razão dos meus dias começarem bem",
        "Mais um dia para te amar mais"
    ],
    tarde: [
        "Espero que seu dia esteja indo bem, meu amor",
        "Amo o seu sorriso que ilumina meu dia",
        "Você torna até as tardes comuns em especiais",
        "Pensando em você neste momento"
    ],
    noite: [
        "A noite fica mais bonita quando penso em você",
        "Amo como você me faz sentir seguro(a) até na escuridão",
        "Você é minha estrela nas noites mais escuras",
        "Boa noite, meu amor eterno"
    ]
};

// Saudações personalizadas por horário
const timeGreetings = {
    madrugada: "A escuridão nos protege...",
    manha: "O sol nasce, mas você brilha mais...",
    tarde: "O sol não brilha tanto quanto você...",
    noite: "A lua testemunha nosso amor..."
};

// Contador de visitas
let visitCount = 0;

// Contador de pacto
let pactCount = 0;

// Carregar contador de visitas
function loadVisitCount() {
    const stored = localStorage.getItem('visitCount');
    visitCount = stored ? parseInt(stored) : 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    updateVisitCounter();
    
    // Carregar contador de pacto
    const storedPact = localStorage.getItem('pactCount');
    pactCount = storedPact ? parseInt(storedPact) : 0;
    updatePactCounter();
}

function updateVisitCounter() {
    const counter = document.getElementById('visitCounter');
    if (visitCount === 1) {
        counter.textContent = "Primeira vez aqui... bem-vinda ao meu coração";
    } else if (visitCount < 5) {
        counter.textContent = `${visitCount}ª visita... cada vez mais perto`;
    } else if (visitCount < 10) {
        counter.textContent = `Você já veio ${visitCount} vezes... isso me deixa feliz`;
    } else {
        counter.textContent = `${visitCount} visitas... você não se cansa de mim ❤️`;
    }
}

function updatePactCounter() {
    const counter = document.getElementById('pactCounter');
    if (pactCount === 0) {
        counter.textContent = "O pacto de sangue foi reforçado 0 vezes";
    } else if (pactCount === 1) {
        counter.textContent = "O pacto de sangue foi reforçado 1 vez";
    } else {
        counter.textContent = `O pacto de sangue foi reforçado ${pactCount} vezes`;
    }
}

function reinforcePact() {
    pactCount++;
    localStorage.setItem('pactCount', pactCount);
    updatePactCounter();
    
    // Efeito visual
    const pactCard = document.querySelector('.pact-card');
    pactCard.classList.add('pact-reinforced');
    setTimeout(() => {
        pactCard.classList.remove('pact-reinforced');
    }, 600);
}

// Determinar período do dia
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6) return 'madrugada';
    if (hour >= 6 && hour < 12) return 'manha';
    if (hour >= 12 && hour < 18) return 'tarde';
    return 'noite';
}

// Atualizar saudação
function updateTimeGreeting() {
    const period = getTimeOfDay();
    document.getElementById('timeGreeting').textContent = timeGreetings[period];
}

// Criar elementos flutuantes (corações e morcegos)
function createFloatingElements() {
    const container = document.getElementById('floatingContainer');
    const elements = ['❤️', '🖤', '🦇'];
    
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDuration = (10 + Math.random() * 15) + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(element);
    }
}

// Criar gotas de sangue
function createBloodDrops() {
    const container = document.getElementById('bloodContainer');
    
    for (let i = 0; i < 40; i++) {
        const drop = document.createElement('div');
        drop.className = 'blood-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (5 + Math.random() * 15) + 's';
        drop.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(drop);
    }
}

// Atualizar cronômetro até a data
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

// Atualizar cronômetro do relacionamento
function updateRelationshipTimer() {
    const now = new Date().getTime();
    const distance = now - relationshipStart;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('relationshipTimer').textContent = 
        `${days} dias ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Inicializar ao carregar a página principal
function initMainPage() {
    updateTimeGreeting();
    loadVisitCount();
    createFloatingElements();
    createBloodDrops();
}

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);
setInterval(updateRelationshipTimer, 1000);
updateCountdown();
updateRelationshipTimer();

// Clique no coração
heart.addEventListener('click', function() {
    const now = new Date().getTime();
    
    if (now > targetDate) {
        heart.classList.add('beating');
        
        setTimeout(() => {
            alert('Tá ansiosa?');
        }, 2000);
        
        setTimeout(() => {
            heart.classList.remove('beating');
        }, 3000);
    } else {
        // Transição para a segunda página
        heart.classList.add('beating');
        
        setTimeout(() => {
            firstPage.classList.add('hidden');
            setTimeout(() => {
                mainPage.classList.add('active');
                initMainPage();
            }, 500);
        }, 1600);
    }
});

// Funções dos modais
function openLetter() {
    document.getElementById('letterModal').classList.add('active');
}

function openOracle() {
    const period = getTimeOfDay();
    const messages = oracleMessages[period];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('oracleText').textContent = randomMessage;
    document.getElementById('oracleModal').classList.add('active');
}

function openGallery() {
    // Aqui você pode adicionar suas fotos
    const photos = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg'
    ];
    
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = photos.map(photo => 
        `<div class="polaroid">
            <img src="${photo}" alt="Nossa memória" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E❤️%3C/text%3E%3C/svg%3E'">
        </div>`
    ).join('');
    
    document.getElementById('galleryModal').classList.add('active');
}

function openPlaylist() {
    document.getElementById('playlistModal').classList.add('active');
}

function openMap() {
    document.getElementById('mapModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Fechar modal clicando fora
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});