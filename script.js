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

// Contadores de elementos
let pactElements = {
    blood: 0,
    bat: 0,
    heart: 0,
    blackHeart: 0
};

// Carregar contador de visitas
function loadVisitCount() {
    const stored = localStorage.getItem('visitCount');
    visitCount = stored ? parseInt(stored) : 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    updateVisitCounter();
    
    // Carregar contador de pacto e elementos
    const storedPact = localStorage.getItem('pactCount');
    pactCount = storedPact ? parseInt(storedPact) : 0;
    
    const storedElements = localStorage.getItem('pactElements');
    if (storedElements) {
        pactElements = JSON.parse(storedElements);
    }
    
    updatePactCounter();
    restorePactElements();
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
    const element = document.createElement('div');
    element.className = 'pact-element';
    element.textContent = emojis[randomElement];
    element.style.left = Math.random() * 100 + '%';
    element.style.top = Math.random() * 100 + '%';
    element.style.animationDuration = (10 + Math.random() * 10) + 's';
    element.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('pactElementsContainer').appendChild(element);
    
    // Salvar no localStorage
    localStorage.setItem('pactElements', JSON.stringify(pactElements));
}

function restorePactElements() {
    const container = document.getElementById('pactElementsContainer');
    const emojis = {
        blood: '🩸',
        bat: '🦇',
        heart: '❤️',
        blackHeart: '🖤'
    };
    
    // Criar elementos salvos
    Object.keys(pactElements).forEach(type => {
        for (let i = 0; i < pactElements[type]; i++) {
            const element = document.createElement('div');
            element.className = 'pact-element';
            element.textContent = emojis[type];
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            element.style.animationDuration = (10 + Math.random() * 10) + 's';
            element.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(element);
        }
    });
}

function reinforcePact() {
    pactCount++;
    localStorage.setItem('pactCount', pactCount);
    
    // Adicionar novo elemento visual
    addPactElement();
    
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
        `${days} dias`;
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

// Efeito de digitação (typewriter)
function typeWriter(element, html, speed = 30) {
    element.innerHTML = '';
    let i = 0;
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText;
    
    // Criar estrutura HTML temporária
    const structure = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    function typeChar() {
        if (i < text.length) {
            // Reconstruir HTML progressivamente
            let currentHtml = '';
            let charCount = 0;
            
            function buildHtml(node) {
                if (charCount >= i + 1) return '';
                
                if (node.nodeType === Node.TEXT_NODE) {
                    const nodeText = node.textContent;
                    const remainingChars = (i + 1) - charCount;
                    const textToShow = nodeText.substring(0, remainingChars);
                    charCount += nodeText.length;
                    return textToShow;
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const tagName = node.tagName.toLowerCase();
                    let attrs = '';
                    for (let attr of node.attributes) {
                        attrs += ` ${attr.name}="${attr.value}"`;
                    }
                    
                    let content = '';
                    for (let child of node.childNodes) {
                        content += buildHtml(child);
                    }
                    
                    if (content || charCount < i + 1) {
                        return `<${tagName}${attrs}>${content}</${tagName}>`;
                    }
                    return '';
                }
                return '';
            }
            
            for (let child of doc.body.childNodes) {
                currentHtml += buildHtml(child);
            }
            
            element.innerHTML = currentHtml;
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Funções dos modais
function openLetter() {
    const modal = document.getElementById('letterModal');
    const content = document.querySelector('#letterModal .letter-content');
    
    const letterHtml = `
        <p>Meu amor,</p>
        <br>
        <p>Cada dia ao seu lado é uma nova página da nossa história. Você trouxe luz para os meus dias mais escuros e transformou momentos simples em memórias inesquecíveis.</p>
        <br>
        <p>Este espaço é nosso, onde guardamos tudo aquilo que nos faz únicos. Cada foto, cada música, cada lugar... tudo tem um pedacinho do nosso amor.</p>
        <br>
        <p>Te amo mais do que as palavras podem expressar.</p>
        <br>
        <p style="text-align: right;">Para sempre seu ❤️</p>
    `;
    
    modal.classList.add('active');
    typeWriter(content, letterHtml, 20);
}

function openOracle() {
    const period = getTimeOfDay();
    const messages = oracleMessages[period];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const oracleElement = document.getElementById('oracleText');
    
    document.getElementById('oracleModal').classList.add('active');
    typeWriter(oracleElement, randomMessage, 40);
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
    const modal = document.getElementById('playlistModal');
    const content = document.querySelector('#playlistModal .letter-content');
    
    const playlistHtml = '<p style="text-align: center;">Em breve você poderá adicionar suas músicas especiais aqui! 🎵</p>';
    
    modal.classList.add('active');
    typeWriter(content, playlistHtml, 30);
}

function openMap() {
    const modal = document.getElementById('mapModal');
    const content = document.querySelector('#mapModal .letter-content');
    
    const mapHtml = '<p style="text-align: center;">Em breve você poderá marcar os lugares especiais da nossa história! 📍</p>';
    
    modal.classList.add('active');
    typeWriter(content, mapHtml, 30);
}