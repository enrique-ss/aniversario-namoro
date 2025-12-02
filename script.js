// Elementos DOM
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

// Variáveis de estado
let visitCount = 0;
let pactElements = {
    blood: 0,
    bat: 0,
    heart: 0,
    blackHeart: 0
};

// ===== FUNÇÕES DE INICIALIZAÇÃO =====

// Carregar dados salvos do localStorage
function loadStoredData() {
    try {
        // Carregar contador de visitas
        const stored = localStorage.getItem('visitCount');
        visitCount = stored ? parseInt(stored) : 0;
        visitCount++;
        localStorage.setItem('visitCount', visitCount);
        
        // Carregar elementos do pacto
        const storedElements = localStorage.getItem('pactElements');
        if (storedElements) {
            pactElements = JSON.parse(storedElements);
        }
        
        updateVisitCounter();
        updatePactCounter();
        restorePactElements();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// ===== CONTADORES =====

function updateVisitCounter() {
    const counter = document.getElementById('visitCounter');
    if (!counter) return;
    
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
    if (!counter) return;
    
    const total = pactElements.blood + pactElements.bat + pactElements.heart + pactElements.blackHeart;
    
    if (total === 0) {
        counter.textContent = "O pacto de sangue foi reforçado 0 vezes";
    } else if (total === 1) {
        counter.textContent = "O pacto de sangue foi reforçado 1 vez";
    } else {
        counter.textContent = `O pacto de sangue foi reforçado ${total} vezes`;
    }
    
    // Mostrar contagem de elementos
    const elementsText = [];
    if (pactElements.blood > 0) elementsText.push(`🩸 ${pactElements.blood}`);
    if (pactElements.bat > 0) elementsText.push(`🦇 ${pactElements.bat}`);
    if (pactElements.heart > 0) elementsText.push(`❤️ ${pactElements.heart}`);
    if (pactElements.blackHeart > 0) elementsText.push(`🖤 ${pactElements.blackHeart}`);
    
    if (elementsText.length > 0) {
        counter.innerHTML += `<br><span style="font-size: 0.85rem; opacity: 0.8; margin-top: 8px; display: block;">${elementsText.join(' · ')}</span>`;
    }
}

// ===== PACTO DE SANGUE =====

function addPactElement() {
    const elements = ['blood', 'bat', 'heart', 'blackHeart'];
    const emojis = {
        blood: '🩸',
        bat: '🦇',
        heart: '❤️',
        blackHeart: '🖤'
    };
    
    // Escolher elemento aleatório
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    pactElements[randomElement]++;
    
    // Criar elemento visual
    const container = document.getElementById('pactElementsContainer');
    if (!container) return;
    
    const element = document.createElement('div');
    element.className = 'pact-element';
    element.textContent = emojis[randomElement];
    element.style.left = Math.random() * 100 + '%';
    element.style.bottom = '-100px';
    element.style.animationDuration = (10 + Math.random() * 10) + 's';
    element.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(element);
    
    // Remover elemento após a animação
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, (10 + Math.random() * 10) * 1000);
    
    // Salvar no localStorage
    try {
        localStorage.setItem('pactElements', JSON.stringify(pactElements));
    } catch (error) {
        console.error('Erro ao salvar elementos do pacto:', error);
    }
}

function restorePactElements() {
    const container = document.getElementById('pactElementsContainer');
    if (!container) return;
    
    const emojis = {
        blood: '🩸',
        bat: '🦇',
        heart: '❤️',
        blackHeart: '🖤'
    };
    
    // Criar elementos salvos (limitando a 20 por tipo para performance)
    Object.keys(pactElements).forEach(type => {
        const count = Math.min(pactElements[type], 20);
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.className = 'pact-element';
            element.textContent = emojis[type];
            element.style.left = Math.random() * 100 + '%';
            element.style.bottom = (Math.random() * 100) + 'vh';
            element.style.animationDuration = (10 + Math.random() * 10) + 's';
            element.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(element);
        }
    });
}

function reinforcePact() {
    // Adicionar novo elemento visual
    addPactElement();
    
    updatePactCounter();
    
    // Efeito visual
    const pactCard = document.querySelector('.pact-card');
    if (pactCard) {
        pactCard.classList.add('pact-reinforced');
        setTimeout(() => {
            pactCard.classList.remove('pact-reinforced');
        }, 600);
    }
}

// ===== TEMPO E SAUDAÇÕES =====

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
    const greetingElement = document.getElementById('timeGreeting');
    if (!greetingElement) return;
    
    const period = getTimeOfDay();
    greetingElement.textContent = timeGreetings[period];
}

// ===== ELEMENTOS DECORATIVOS =====

// Criar elementos flutuantes (corações e morcegos)
function createFloatingElements() {
    const container = document.getElementById('floatingContainer');
    if (!container) return;
    
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
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const drop = document.createElement('div');
        drop.className = 'blood-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (5 + Math.random() * 15) + 's';
        drop.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(drop);
    }
}

// ===== CRONÔMETROS =====

// Atualizar cronômetro até a data alvo
function updateCountdown() {
    if (!countdownElement) return;
    
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
    const timerElement = document.getElementById('relationshipTimer');
    if (!timerElement) return;
    
    const now = new Date().getTime();
    const distance = now - relationshipStart;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    timerElement.textContent = `${days} dias`;
}

// ===== INICIALIZAÇÃO DA PÁGINA PRINCIPAL =====

function initMainPage() {
    updateTimeGreeting();
    loadStoredData();
    createFloatingElements();
    createBloodDrops();
}

// ===== EVENTOS DO CORAÇÃO =====

if (heart) {
    heart.addEventListener('click', function() {
        const now = new Date().getTime();
        
        if (now >= targetDate) {
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
                if (firstPage) {
                    firstPage.classList.add('hidden');
                }
                setTimeout(() => {
                    if (mainPage) {
                        mainPage.classList.add('active');
                        initMainPage();
                    }
                }, 500);
            }, 1600);
        }
    });
}

// ===== MODAIS =====

function openLetter() {
    const modal = document.getElementById('letterModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function openOracle() {
    const period = getTimeOfDay();
    const messages = oracleMessages[period];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const oracleText = document.getElementById('oracleText');
    const modal = document.getElementById('oracleModal');
    
    if (oracleText) {
        oracleText.textContent = randomMessage;
    }
    if (modal) {
        modal.classList.add('active');
    }
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
    if (gallery) {
        gallery.innerHTML = photos.map(photo => 
            `<div class="polaroid">
                <img src="${photo}" alt="Nossa memória" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23B91818%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2260%22%3E❤️%3C/text%3E%3C/svg%3E'">
            </div>`
        ).join('');
    }
    
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function openPlaylist() {
    const modal = document.getElementById('playlistModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function openMap() {
    const modal = document.getElementById('mapModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Fechar modal clicando fora
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// ===== INICIALIZAÇÃO =====

// Atualizar cronômetros imediatamente
updateCountdown();
updateRelationshipTimer();

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);
setInterval(updateRelationshipTimer, 1000);

// Log de inicialização
console.log('Site inicializado com sucesso!');